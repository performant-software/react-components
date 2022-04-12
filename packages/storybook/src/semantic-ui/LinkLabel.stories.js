// @flow

import { LinkLabel } from '@react-components/semantic-ui';
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';

export default {
  title: 'Components/Semantic UI/LinkLabel',
  decorators: [withA11y, withKnobs]
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
