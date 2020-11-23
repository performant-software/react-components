// @flow

import React, { type ComponentType, useEffect, useState } from 'react';
import {
  Button,
  Dimmer,
  Loader,
  Message,
  Modal
} from 'semantic-ui-react';
import Toaster from './Toaster';
import i18n from '../i18n/i18n';
import withEditContainer, { type EditContainerProps } from '../common/EditContainer';
import './EditModal.css';

type Props = EditContainerProps & {
  component: ComponentType<any>,
  onClose: () => void,
  onSave: () => Promise<any>,
  showLoading: boolean
};

const EditModal = (props: Props) => {
  const OuterComponent = props.component;

  const [showToaster, setShowToaster] = useState(true);
  const hasErrors = !!(props.errors && props.errors.length);

  // Allow the user to clear the error toaster. If the set of validation errors changes, display the toaster again.
  useEffect(() => setShowToaster(true), [props.errors]);

  return (
    <OuterComponent
      {...props}
    >
      { props.showLoading && props.loading && (
        <Dimmer
          active={props.loading}
          inverted
        >
          <Loader
            content={i18n.t('Common.messages.loading')}
          />
        </Dimmer>
      )}
      { showToaster && hasErrors && (
        <Toaster
          onDismiss={() => setShowToaster(false)}
          timeout={0}
          type={Toaster.MessageTypes.negative}
        >
          <Message.Header
            content={i18n.t('Common.messages.error.header')}
          />
          <Message.List
            items={props.errors}
          />
        </Toaster>
      )}
      <Modal.Actions
        className='edit-modal-actions'
      >
        <Button
          disabled={props.saving}
          onClick={props.onSave.bind(this)}
          primary
          size='medium'
          type='submit'
        >
          { i18n.t('Common.buttons.save') }
          { props.saving && (
            <Loader
              active
              className='saving'
              inline
              size='tiny'
            />
          )}
        </Button>
        <Button
          disabled={props.saving}
          inverted
          onClick={props.onClose.bind(this)}
          primary
          size='medium'
          type='button'
        >
          { i18n.t('Common.buttons.cancel') }
        </Button>
      </Modal.Actions>
    </OuterComponent>
  );
};

EditModal.defaultProps = {
  showLoading: true
};

export default withEditContainer(EditModal);
