import React from 'react';
import { withKnobs, boolean } from "@storybook/addon-knobs";
import BooleanIcon from '../../../src/semantic-ui/BooleanIcon.js';

export default {
  title: 'Components/Semantic UI/BooleanIcon',
  decorators: [withKnobs]
};

export const Default = () => <BooleanIcon value={boolean('Value', true)} />;