// @flow

import React from 'react';
import { action } from 'storybook/actions';
import { Form } from 'semantic-ui-react';
import LinkLabel from '../../../semantic-ui/src/components/LinkLabel';

export default {
  title: 'Components/Semantic UI/LinkLabel'
};

export const Default = () => (
  <Form>
    <Form.Input
      name='field'
      input={{
        'aria-label': 'test-field'
      }}
      label={() => (
        <LinkLabel
          htmlFor='field'
          onClick={action('click')}
        />
      )}
    />
  </Form>
);
