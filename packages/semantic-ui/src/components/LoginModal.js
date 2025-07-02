// @flow

import { ModalContext } from '@performant-software/shared-components';
import React, { type Element } from 'react';
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
  trigger?: () => Element<any>,
  placeholder: string
};

const LoginModal = (props: Props) => {
  const { placeholder = i18n.t('LoginModal.email') } = props;

  return (
    <ModalContext.Consumer>
      { (mountNode) => (
        <Modal
          as={Form}
          className='login-modal'
          error={props.loginFailed}
          mountNode={mountNode}
          open={props.open}
          size='small'
          trigger={props.trigger}
        >
          <Header
            icon='user circle'
            content={i18n.t('LoginModal.header')}
          />
          <Message
            error
            header={i18n.t('LoginModal.loginErrorHeader')}
            content={i18n.t('LoginModal.loginErrorContent')}
          />
          <Grid
            padded='vertically'
            textAlign='center'
          >
            <Grid.Column>
              <Grid.Row>
                <Input
                  autoFocus
                  className='form-field'
                  icon={<Icon name='at' />}
                  onChange={props.onUsernameChange.bind(this)}
                  placeholder={placeholder}
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
                  placeholder={i18n.t('LoginModal.password')}
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
              { i18n.t('LoginModal.buttonLogin') }
            </Button>
            { props.onClose && (
              <Button
                basic
                onClick={props.onClose.bind(this)}
                size='large'
              >
                { i18n.t('LoginModal.buttonCancel') }
              </Button>
            )}
          </Modal.Actions>
        </Modal>
      )}
    </ModalContext.Consumer>
  );
};

export default LoginModal;
