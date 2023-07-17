// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import ArabicLayout from 'simple-keyboard-layouts/build/layouts/arabic';
import ChineseLayout from 'simple-keyboard-layouts/build/layouts/chinese';
import EnglishLayout from 'simple-keyboard-layouts/build/layouts/english';
import JapaneseLayout from 'simple-keyboard-layouts/build/layouts/japanese';
import Keyboard from '../../../shared/src/components/Keyboard';

export default {
  title: 'Components/Common/Keyboard',
  decorators: [withKnobs]
};

export const English = () => (
  <Keyboard
    layout={EnglishLayout}
    onChange={action('change')}
    value=''
  />
);

export const Arabic = () => (
  <Keyboard
    layout={ArabicLayout}
    onChange={action('change')}
    value=''
  />
);

export const Chinese = () => (
  <Keyboard
    layout={ChineseLayout}
    onChange={action('change')}
    value=''
  />
);

export const Japanese = () => (
  <Keyboard
    layout={JapaneseLayout}
    onChange={action('change')}
    value=''
  />
);
