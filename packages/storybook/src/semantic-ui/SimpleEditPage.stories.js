// @flow

import { action } from 'storybook/actions';
import React from 'react';
import { Form } from 'semantic-ui-react';
import SimpleEditPage from '../../../semantic-ui/src/components/SimpleEditPage';

export default {
  title: 'Components/Semantic UI/SimpleEditPage',
  component: SimpleEditPage
};

export const Default = () => (
  <SimpleEditPage
    menuProps={{
      text: true
    }}
    onCancel={action('cancel')}
  >
    <SimpleEditPage.Tab
      key='default'
    >
      <Form.Input
        autoFocus
        label='Name'
      />
      <Form.Input
        label='Address'
      />
    </SimpleEditPage.Tab>
  </SimpleEditPage>
);
