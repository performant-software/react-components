// @flow

import React from 'react';
import { Button, Form, Loader } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import withEditContainer, { type EditContainerProps } from '../utils/EditContainer';
import './EditPage.css';

type Props = EditContainerProps & {
  onClose: () => void,
  onSave: () => Promise<any>
};

const EditPageContainer = (props: Props) => (
  <Form
    className='edit-page'
  >
    <Button
      disabled={props.saving}
      floated='right'
      inverted
      onClick={props.onClose.bind(this)}
      primary
      size='medium'
      type='button'
    >
      { i18n.t('Common.buttons.cancel') }
    </Button>
    <Button
      floated='right'
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
    { props.children }
  </Form>
);

const Wrapper = withEditContainer(EditPageContainer);

const EditPage = (props: Props) => (
  <Wrapper {...props} />
);

export default EditPage;
