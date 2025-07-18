// @flow

import React from 'react';
import { action } from 'storybook/actions';
import LinkButton from '../../../semantic-ui/src/components/LinkButton';

export default {
  title: 'Components/Semantic UI/LinkButton'
};

export const Default = () => (
  <LinkButton
    onClick={action('onclick')}
  />
);
