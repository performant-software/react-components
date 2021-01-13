// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import _ from 'underscore';
import DropdownButton from '../../../src/semantic-ui/DropdownButton';

export default {
  title: 'Components/Semantic UI/DropdownButton',
  decorators: [withA11y]
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
