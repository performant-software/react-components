import React, { useState } from 'react';
import Table from '../../../performant-ui/src/components/Table';

export default {
  title: 'Components/Performant UI/Table',
  component: Table
};

export const Default = () => {
  return (
    <Table>
      <Table.Head>
        Hello
      </Table.Head>
    </Table>
  );
};
