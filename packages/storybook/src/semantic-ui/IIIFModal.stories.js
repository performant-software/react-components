// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import IIIFModal from '../../../semantic-ui/src/components/IIIFModal';
import manifest from '../assets/manifest.json';

export default {
  title: 'Components/Semantic UI/IIIFModal',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <IIIFModal
    manifest={manifest}
    onClose={action('close')}
  />
);
