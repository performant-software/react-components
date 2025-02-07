// @flow

import React from 'react';
import RecordDetailTitle from '../../../core-data/src/components/RecordDetailTitle';

export default {
  title: 'Components/Core Data/RecordDetailTitle',
  component: RecordDetailTitle
};

export const Default = () => (
  <RecordDetailTitle
    text='This is a header!'
  />
);

export const Icon = () => (
  <RecordDetailTitle
    text='This is a place name!'
    icon='location'
  />
);

export const Multiline = () => (
  <RecordDetailTitle
    text='This is a really long header that goes onto the second line'
    className='w-80'
  />
)