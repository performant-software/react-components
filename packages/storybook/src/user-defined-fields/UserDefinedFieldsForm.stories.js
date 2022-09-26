// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';
import UserDefinedFieldsForm from '../../../user-defined-fields/src/components/UserDefinedFieldsForm';

export default {
  title: 'Components/User Defined Fields/UserDefinedFieldsForm',
  decorators: [withA11y, withKnobs]
};

export const Default = () => {
  const [data, setData] = useState({
    'First name': 'Bob',
    'Last name': 'Smith'
  });

  return (
    <Form>
      <UserDefinedFieldsForm
        data={data}
        isError={() => false}
        onChange={(value) => setData(value)}
      />
    </Form>
  );
};
