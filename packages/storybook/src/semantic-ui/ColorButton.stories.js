// @flow

import React from 'react';
import { action } from 'storybook/actions';
import ColorButton from '../../../semantic-ui/src/components/ColorButton';

export default {
  title: 'Components/Semantic UI/ColorButton'
};

export const Default = () => (
  <ColorButton
    onClick={action('click')}
  />
);
