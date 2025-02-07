// @flow

import React from 'react';
import RecordDetailItem from '../../../core-data/src/components/RecordDetailItem';

export default {
  title: 'Components/Core Data/RecordDetailItem',
  component: RecordDetailItem
};

export const Default = () => (
  <RecordDetailItem
    text='March 11, 1986'
    icon='date'
  />
);