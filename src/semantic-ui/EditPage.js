// @flow

import React, { type ComponentType } from 'react';
import { Button, Form, Loader } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import useEditContainer, { type EditContainerProps } from '../common/EditContainer';

type Props = EditContainerProps & {
  component: ComponentType<any>,
  onClose: () => void,
  onSave: () => Promise<any>
};

const EditPage = (props: Props) => {
  const Page = useEditContainer(useEditPage(props.component));
  return <Page {...props} />;
};

export default EditPage;

export const useEditPage = (WrappedComponent: ComponentType<any>) => ((props: Props) => (
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
    <WrappedComponent {...props} />
  </Form>
));
