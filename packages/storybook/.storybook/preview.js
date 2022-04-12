import React from 'react';
import { addParameters } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';
import '@react-components/shared/build/main.css';
import '@react-components/semantic-ui/build/main.css';

addParameters({
  options: {
    showRoots: true
  }
});
