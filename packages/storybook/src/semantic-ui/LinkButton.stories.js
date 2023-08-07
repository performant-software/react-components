// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import LinkButton from '../../../semantic-ui/src/components/LinkButton';

export default {
  title: 'Components/Semantic UI/LinkButton',
  decorators: [withKnobs]
};

export const Default = () => (
  <LinkButton
    content={text('Text', 'This is a link button')}
    onClick={action('onclick')}
  />
);
