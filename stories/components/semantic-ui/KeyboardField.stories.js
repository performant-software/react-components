import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';
import English from 'simple-keyboard-layouts/build/layouts/english';
import Arabic from 'simple-keyboard-layouts/build/layouts/arabic';
import KeyboardField from '../../../src/semantic-ui/KeyboardField';
import layouts from '../../../src/utils/CustomKeyboardLayouts';

export default {
  title: 'Components/Semantic UI/KeyboardField',
  decorators: [withA11y, withKnobs]
};

export const Default = () => {
  const [value, setValue] = useState('a');
  const [value2, setValue2] = useState('b');

  return (
    <Form>
      <KeyboardField
        label={text('Field name', 'Field')}
        layout={English}
        name='test-field'
        onChange={(e, { value }) => setValue(value)}
        required={boolean('Required', false)}
        value={value}
      >
        <input
          className='english'
          type='text'
        />
      </KeyboardField>
      <KeyboardField
        label={text('Field name', 'Field')}
        layout={layouts.transliterationIjmes}
        name='test-field-2'
        onChange={(e, { value }) => setValue2(value)}
        required={boolean('Required', false)}
        value={value2}
      >
        <input
          className='arabic'
          dir='rtl'
          type='text'
        />
      </KeyboardField>
    </Form>
  );
};
