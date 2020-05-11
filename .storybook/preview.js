import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { addDecorator, addParameters } from '@storybook/react';
import i18n from '../src/i18n/i18n';
import 'semantic-ui-css/semantic.min.css';

addDecorator(storyFn => (
  <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
));

addParameters({
  options: {
    showRoots: true
  }
});