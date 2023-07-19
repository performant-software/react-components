// @flow

import { useCitationStyles } from '@performant-software/shared-components';
import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
import _ from 'underscore';

type Props = {
  /**
   * Callback fired when the style selector is changed.
   */
  onChange: (name: string, xml: string) => void,

  /**
   * Default style value.
   */
  value?: string
};

/**
 * This component can be used, along with the `useCitationStyles` hook, to display a list of bibliographic styles
 * supported by Zotero.
 */
const StyleSelector = (props: Props) => {
  const { onStyleChange, style, styles } = useCitationStyles(props.value);

  /**
   * Call the onChange prop when the style changes.
   */
  useEffect(() => {
    if (style?.name && style?.xml) {
      props.onChange(style.name, style.xml);
    }
  }, [style]);

  return (
    <Dropdown
      onChange={(e, { value }) => onStyleChange(value)}
      options={_.map(styles, ({ name, title }) => ({
        key: name,
        value: name,
        text: title
      }))}
      search
      searchInput={{
        'aria-label': 'Search styles',
      }}
      selectOnBlur={false}
      selection
      text={style?.title}
      value={style?.name || ''}
    />
  );
};

export default StyleSelector;
