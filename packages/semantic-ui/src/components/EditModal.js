// @flow

import { useEditContainer, type EditContainerProps } from '@performant-software/shared-components';
import React, { type ComponentType, useState } from 'react';
import {
  Button,
  Dimmer,
  Loader,
  Message,
  Modal
} from 'semantic-ui-react';
import Toaster from './Toaster';
import i18n from '../i18n/i18n';
import './EditModal.css';

type Props = EditContainerProps & {
  /**
   * The form component to render.
   */
  component: ComponentType<any>,

  /**
   * Callback fired when the close button is clicked.
   */
  onClose: () => void,

  /**
   * Callback fired when the save button is clicked.
   */
  onSave: () => Promise<any>,

  /**
   * If <code>true</code>, a loading indicator will display.
   */
  showLoading: boolean
};

/**
 * The <code>EditModal</code> component can be used to edit the details of a single record within a modal view. This
 * component uses the <code>EditContainer</code> higher-order component to facilitate all of the editing functionality.
 * This component is responsible for rendering the container in which the editable form is rendered.
 */
const EditModal = useEditContainer((props: Props) => {
  const OuterComponent = props.component;

  const [showToaster, setShowToaster] = useState(false);
  const hasErrors = !!(props.errors && props.errors.length);

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
          onClick={() => {
            setShowToaster(true);
            return props.onSave();
          }}
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
          basic
          disabled={props.saving}
          onClick={props.onClose.bind(this)}
          size='medium'
          type='button'
        >
          { i18n.t('Common.buttons.cancel') }
        </Button>
      </Modal.Actions>
    </OuterComponent>
  );
});

EditModal.defaultProps = {
  showLoading: true
};

export default EditModal;
