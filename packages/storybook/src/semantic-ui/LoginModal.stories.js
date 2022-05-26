// @flow

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import LoginModal from '../../../semantic-ui/src/components/LoginModal';

export default {
  title: 'Components/Semantic UI/LoginModal',
  decorators: [withA11y, withKnobs]
};

export const Default = () => (
  <LoginModal
    disabled={boolean('Disabled', false)}
    loginFailed={boolean('Login failed', false)}
    onClose={action('close')}
    onLogin={action('login')}
    onPasswordChange={action('password-change')}
    onUsernameChange={action('username-change')}
    open={boolean('Open', true)}
  />
);

export const NoCloseButton = () => (
  <LoginModal
    disabled={boolean('Disabled', false)}
    loginFailed={boolean('Login failed', false)}
    onLogin={action('login')}
    onPasswordChange={action('password-change')}
    onUsernameChange={action('username-change')}
    open={boolean('Open', true)}
  />
);
