// @flow

import React, { useState } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Form } from 'semantic-ui-react';
import UserDefinedFieldsForm from '../../../user-defined-fields/src/components/UserDefinedFieldsForm';

export default {
  title: 'Components/User Defined Fields/UserDefinedFieldsForm',
  decorators: [withKnobs]
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
