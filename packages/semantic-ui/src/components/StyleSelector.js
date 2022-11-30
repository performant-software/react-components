// @flow

import useCitationStyles from '@performant-software/shared-components';
import React, { useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
import _ from 'underscore';

type Props = {
  onChange: (name: string, xml: string) => void,
  value: ?string
};

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
