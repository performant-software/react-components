// @flow

import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Message,
  Modal
} from 'semantic-ui-react';
import { I18nextProvider, withTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';
import './LoginModal.css';

type Props = {
  disabled: boolean,
  loginFailed: boolean,
  onClose: () => void,
  onLogin: () => void,
  onPasswordChange: () => void,
  onUsernameChange: () => void,
  open: boolean,
  t: () => string,
  trigger: () => Component
};

const LoginModal = (props: Props) => (
  <I18nextProvider i18n={i18n}>
    <Modal
      as={Form}
      error={props.loginFailed}
      open={props.open}
      size='small'
      trigger={props.trigger}
    >
      <Header
        icon='user circle'
        content={props.t('LoginModal.header')}
      />
      <Message
        error
        header={props.t('LoginModal.loginErrorHeader')}
        content={props.t('LoginModal.loginErrorContent')}
      />
      <Grid
        padded='vertically'
        textAlign='center'
      >
        <Grid.Column>
          <Grid.Row
            className='row'
          >
            <Input
              autoFocus
              className='form-field'
              icon={<Icon name='at' />}
              onChange={props.onUsernameChange.bind(this)}
              placeholder={props.t('LoginModal.email')}
              size='huge'
            />
          </Grid.Row>
          <Grid.Row
            className='row'
          >
            <Input
              className='form-field'
              icon={<Icon name='lock' />}
              onChange={props.onPasswordChange.bind(this)}
              placeholder={props.t('LoginModal.password')}
              size='huge'
              type='password'
            />
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <Modal.Actions>
        <Button
          disabled={props.disabled}
          onClick={props.onLogin.bind(this)}
          primary
          size='large'
          type='submit'
        >
          { props.t('LoginModal.buttonLogin') }
        </Button>
        <Button
          inverted
          onClick={props.onClose.bind(this)}
          primary
          size='large'
        >
          { props.t('LoginModal.buttonCancel') }
        </Button>
      </Modal.Actions>
    </Modal>
  </I18nextProvider>
);

export default withTranslation()(LoginModal);
