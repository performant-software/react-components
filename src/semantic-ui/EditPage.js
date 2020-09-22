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

const EditPage = (props: Props) => (
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
    { React.Children.map(props.children, (c) => ({ ...c, ...props })) }
  </Form>
);

export default withEditContainer(EditPage);
