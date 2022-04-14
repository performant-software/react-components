import React from 'react';
import { addParameters } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';
import '@performant-software/shared-components/build/main.css';
import '@performant-software/semantic-components/build/main.css';

addParameters({
  options: {
    showRoots: true
  }
});
