// @flow

import React, { type ComponentType } from 'react';
import { Button, Loader, Modal } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import EditProvider from './EditProvider';
import EditContext from '../contexts/EditContext';
import './EditModal.css';

type Props = {
  component: ComponentType<{}>,
  onClose: () => void,
  onSave: () => Promise<any>
};

const EditModal = ({ component, onClose, onSave, ...props }: Props) => {
  const OuterComponent = component;
  return (
    <EditProvider
      {...props}
    >
      <EditContext.Consumer>
        { (context) => (
          <OuterComponent>
            <Modal.Actions
              className='edit-modal-actions'
            >
              <Button
                disabled={context.saving}
                onClick={onSave.bind(this)}
                primary
                size='medium'
                type='submit'
              >
                { i18n.t('Common.buttons.save') }
                { context.saving && (
                  <Loader
                    active
                    className='saving'
                    inline
                    size='tiny'
                  />
                )}
              </Button>
              <Button
                disabled={context.saving}
                inverted
                onClick={onClose.bind(this)}
                primary
                size='medium'
                type='button'
              >
                { i18n.t('Common.buttons.cancel') }
              </Button>
            </Modal.Actions>
          </OuterComponent>
        )}
      </EditContext.Consumer>
    </EditProvider>
  );
};

export default EditModal;
