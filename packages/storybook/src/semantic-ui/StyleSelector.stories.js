// @flow

import { action } from 'storybook/actions';
import React from 'react';
import StyleSelector from '../../../semantic-ui/src/components/StyleSelector';

export default {
  title: 'Components/Semantic UI/StyleSelector',
  component: StyleSelector
};

export const Default = () => (
  <div
    style={{
      minHeight: '400px'
    }}
  >
    <StyleSelector
      onChange={action('onChange')}
    />
  </div>
);
