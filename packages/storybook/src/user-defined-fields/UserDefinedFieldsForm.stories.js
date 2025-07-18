// @flow

import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import UserDefinedFieldsForm from '../../../user-defined-fields/src/components/UserDefinedFieldsForm';

export default {
  title: 'Components/User Defined Fields/UserDefinedFieldsForm',
  component: UserDefinedFieldsForm
};

export const Default = () => {
  const [data, setData] = useState({});

  return (
    <Form>
      <UserDefinedFieldsForm
        data={data}
        isError={() => false}
        onChange={setData}
      />
    </Form>
  );
};
