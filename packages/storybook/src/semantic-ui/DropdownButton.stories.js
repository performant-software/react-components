// @flow

import React, { useState } from 'react';
import _ from 'underscore';
import DropdownButton from '../../../semantic-ui/src/components/DropdownButton';

export default {
  title: 'Components/Semantic UI/DropdownButton'
};

export const Default = () => {
  const options = [{
    key: 'red',
    value: 'red',
    text: 'Red'
  }, {
    key: 'blue',
    value: 'blue',
    text: 'Blue'
  }, {
    key: 'yellow',
    value: 'yellow',
    text: 'Yellow'
  }];

  const [color, setColor] = useState(_.first(options).value);

  return (
    <DropdownButton
      onChange={(e, { value }) => setColor(value)}
      options={options}
      text={_.find(options, (o) => o.value === color).text}
      value={color}
    />
  );
};
