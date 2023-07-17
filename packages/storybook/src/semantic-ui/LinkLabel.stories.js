// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';
import LinkLabel from '../../../semantic-ui/src/components/LinkLabel';

export default {
  title: 'Components/Semantic UI/LinkLabel',
  decorators: [withKnobs]
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
          content={text('Text', 'Click here')}
          htmlFor='field'
          label={text('Label', 'My label')}
          onClick={action('click')}
        />
      )}
    />
  </Form>
);
