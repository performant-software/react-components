// @flow

import React from 'react';
import RecordDetailBreadcrumbs from '../../../core-data/src/components/RecordDetailBreadcrumbs';

export default {
  title: 'Components/Core Data/RecordDetailBreadcrumbs',
  component: RecordDetailBreadcrumbs
};

export const Default = () => (
  <RecordDetailBreadcrumbs
    history={['First record', 'Second record', 'Third record']}
  />
);

export const WithBackArrow = () => (
  <RecordDetailBreadcrumbs
    history={['First record', 'Second record', 'Third record']}
    onGoBack={() => { alert('Go Back!'); }}
  />
);

export const NarrowWidth = () => (
  <RecordDetailBreadcrumbs
    history={['First record', 'Second record', 'Third record']}
    className='w-60'
  />
);
