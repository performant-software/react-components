// @flow

import React, { type ComponentType } from 'react';
import { Button, Form, Loader } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import EditProvider from './EditProvider';
import EditContext from '../contexts/EditContext';
import './EditPage.css';

type Props = {
  component: ComponentType<{}>,
  onClose: () => void,
  onSave: () => Promise<any>
};

const EditPage = ({ component, ...props }: Props) => {
  const InnerComponent = component;
  return (
    <EditProvider
      {...props}
    >
      <EditContext.Consumer>
        { (context) => (
          <Form
            className='edit-page'
          >
            <Button
              disabled={context.saving}
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
              { context.saving && (
                <Loader
                  active
                  className='saving'
                  inline
                  size='tiny'
                />
              )}
            </Button>
            {/* We'll map the context to the props for backwards compatability */}
            <InnerComponent {...context} />
          </Form>
        )}
      </EditContext.Consumer>
    </EditProvider>
  );
};

export default EditPage;
