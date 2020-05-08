import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { Form } from 'semantic-ui-react';
import English from 'simple-keyboard-layouts/build/layouts/english';
import KeyboardField from '../../../src/semantic-ui/KeyboardField';

export default {
  title: 'Components/Semantic UI/KeyboardField',
  decorators: [withKnobs]
};

export const Default = () => {
  const [value, setValue] = useState('');

  return (
    <Form>
      <KeyboardField
        label={text('Field name', 'Field')}
        layout={English}
        onChange={(e, { value }) => setValue(value)}
        required={boolean('Required', false)}
        value={value}
      />
    </Form>
  );
};