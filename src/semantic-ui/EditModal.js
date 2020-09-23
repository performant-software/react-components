// @flow

import React, { type ComponentType } from 'react';
import { Button, Loader, Modal } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import withEditContainer, { type EditContainerProps } from '../common/EditContainer';
import './EditModal.css';

type Props = EditContainerProps & {
  component: ComponentType<any>,
  onClose: () => void,
  onSave: () => Promise<any>
};

const EditModal = (props: Props) => {
  const OuterComponent = props.component;
  return (
    <OuterComponent
      {...props}
    >
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

export default withEditContainer(EditModal);
