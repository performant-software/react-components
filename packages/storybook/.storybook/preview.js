// @flow

import React from 'react';
import { addParameters } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';

addParameters({
  options: {
    showRoots: true
  }
});

export const parameters = {
  options: {
    storySort: {
      order: ['Overview', 'Components']
    }
  }
};
