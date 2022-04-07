// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import LinkButton from '../../../src/semantic-ui/LinkButton';

export default {
  title: 'Components/Semantic UI/LinkButton',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <LinkButton
    content={text('Text', 'This is a link button')}
    onClick={action('onclick')}
  />
);
