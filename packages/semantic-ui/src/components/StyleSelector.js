// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { Dropdown } from 'semantic-ui-react';
import _ from 'underscore';
import CitationStyles from '../resources/CitationStyles.json';

type Props = {
  onChange: (name: string, xml: string) => void,
  value: ?string
};

const StyleSelector = (props: Props) => {
  const [stylesCache, setStylesCache] = useState({});

  /**
   * Build the list of available style options.
   *
   * @type {{}}
   */
  const styles = useMemo(() => CitationStyles.coreCitationStyles, []);

  /**
   * Sets the style to the selected value. Styles are cached on the state so they do not need to be fetched
   * more than once per render.
   *
   * @type {(function(*, {value: *}): void)|*}
   */
  const onChange = useCallback((e, { value }) => {
    if (_.has(stylesCache, value)) {
      props.onChange(value, stylesCache[value]);
    } else {
      fetch(`https://www.zotero.org/styles/${value}`)
        .then((response) => response.text())
        .then((xml) => {
          props.onChange(value, xml);
          setStylesCache((prevCache) => ({ ...prevCache, [value]: xml }));
        });
    }
  }, [stylesCache]);

  /**
   * Default the selected style on component mount.
   */
  useEffect(() => {
    const { name } = _.findWhere(styles, { isDefault: true });
    onChange(null, { value: name });
  }, []);

  return (
    <Dropdown
      onChange={onChange}
      options={_.map(styles, (style) => ({
        key: style.name,
        value: style.name,
        text: style.title
      }))}
      search
      selectOnBlur={false}
      selection
      text={_.findWhere(styles, { name: props.value })?.title}
      value={props.value}
    />
  );
};

export default StyleSelector;
