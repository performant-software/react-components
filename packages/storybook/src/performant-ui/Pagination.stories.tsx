import React, { useState } from 'react';
import Pagination from '../../../performant-ui/src/components/Pagination';

export default {
  title: 'Components/Performant UI/Pagination',
  component: Pagination
};

export const Default = () => {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      pageCount={50}
      current={page}
      onChange={setPage}
    />
  );
};

export const SmallPageCount = () => {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      pageCount={5}
      current={page}
      onChange={setPage}
    />
  );
};
