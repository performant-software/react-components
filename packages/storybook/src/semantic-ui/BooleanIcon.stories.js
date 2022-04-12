// @flow

import { BooleanIcon } from '@react-components/semantic-ui';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Components/Semantic UI/BooleanIcon',
  decorators: [withA11y, withKnobs]
};

export const Default = () => <BooleanIcon value={boolean('Value', true)} />;
