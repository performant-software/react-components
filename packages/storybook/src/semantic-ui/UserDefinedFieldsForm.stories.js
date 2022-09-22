// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';
import UserDefinedFieldsForm from '../../../semantic-ui/src/components/UserDefinedFieldsForm';

export default {
  title: 'Components/Semantic UI/UserDefinedFieldsForm',
  decorators: [withA11y, withKnobs]
};

export const Default = () => {
  const [item, setItem] = useState(JSON.stringify({
    'First name': 'Bob',
    'Last name': 'Smith'
  }));

  return (
    <Form>
      <UserDefinedFieldsForm
        isError={() => false}
        item={{ user_defined: item }}
        onChange={(value) => setItem(value)}
      />
    </Form>
  );
};
