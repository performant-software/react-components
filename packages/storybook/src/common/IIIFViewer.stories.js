// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import IIIFViewer from '../../../shared/src/components/IIIFViewer';
import manifest from '../assets/manifest.json';

export default {
  title: 'Components/Common/IIIFViewer',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <IIIFViewer
    manifestId={manifest}
  />
);
