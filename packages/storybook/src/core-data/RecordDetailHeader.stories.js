// @flow

import React from 'react';
import RecordDetailHeader from '../../../core-data/src/components/RecordDetailHeader';

export default {
  title: 'Components/Core Data/RecordDetailHeader',
  component: RecordDetailHeader
};

export const Default = () => (
  <RecordDetailHeader
    text='This is a header!'
  />
);

export const Icon = () => (
  <RecordDetailHeader
    text='This is a place name!'
    icon='location'
  />
);

export const Multiline = () => (
  <RecordDetailHeader
    text='This is a really long header that goes onto the second line'
    className='w-80'
  />
)