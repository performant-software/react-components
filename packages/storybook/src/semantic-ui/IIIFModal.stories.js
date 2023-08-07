// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import IIIFModal from '../../../semantic-ui/src/components/IIIFModal';
import manifest from '../assets/manifest.json';

export default {
  title: 'Components/Semantic UI/IIIFModal',
  decorators: [withKnobs]
};

export const Default = () => (
  <IIIFModal
    manifestId={manifest}
    onClose={action('close')}
  />
);
