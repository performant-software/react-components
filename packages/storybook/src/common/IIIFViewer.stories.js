// @flow

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import IIIFViewer from '../../../shared/src/components/IIIFViewer';
import manifest from '../assets/manifest.json';

export default {
  title: 'Components/Common/IIIFViewer',
  decorators: [withKnobs]
};

export const Default = () => (
  <IIIFViewer
    manifestId={manifest}
  />
);
