// @flow

import React from 'react';
import Breadcrumbs from '../../../semantic-ui/src/components/Breadcrumbs';

export default {
  title: 'Components/Semantic UI/Breadcrumbs',
  component: Breadcrumbs
};

export const Default = () => (
  <Breadcrumbs
    labels={{
      books: 'Books'
    }}
    onLoad={() => Promise.resolve('Great Expectations')}
    pathname='/books/12'
  />
);
