// @flow

import React from 'react';
import { action } from 'storybook/actions';
import LoginModal from '../../../semantic-ui/src/components/LoginModal';

export default {
  title: 'Components/Semantic UI/LoginModal',
  component: LoginModal
};

export const Default = () => (
  <LoginModal
    onClose={action('close')}
    onLogin={action('login')}
    onPasswordChange={action('password-change')}
    onUsernameChange={action('username-change')}
  />
);

export const NoCloseButton = () => (
  <LoginModal
    onLogin={action('login')}
    onPasswordChange={action('password-change')}
    onUsernameChange={action('username-change')}
  />
);
