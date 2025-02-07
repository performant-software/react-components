// @flow

import React from 'react';
import RecordDetailHeader from '../../../core-data/src/components/RecordDetailHeader';

export default {
  title: 'Components/Core Data/RecordDetailHeader',
  component: RecordDetailHeader
};

export const Default = () => (
  <RecordDetailHeader
    title='A Very Serious and Important Event'
    detailItems={[
      {
        text: 'March 11, 1986',
        icon: 'date'
      },
      {
        text: 'Princton, NJ',
        icon: 'location'
      }
    ]}
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo. <span className='font-bold'>Tempor sem malesuada porttitor congue.</span> Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailHeader>
);

export const WithLink = () => (
  <RecordDetailHeader
    title='A Very Serious and Important Event'
    detailItems={[
      {
        text: 'March 11, 1986',
        icon: 'date'
      },
      {
        text: 'Princton, NJ',
        icon: 'location'
      }
    ]}
    detailPageUrl='#'
  >
    <p>
      Arcu imperdiet sit sit viverra id volutpat commodo. <span className='font-bold'>Tempor sem malesuada porttitor congue.</span> Nibh aenean vitae blandit vitae sapien ac varius mattis. Aliquam vitae purus arcu eros enim tempus parturient orci fames.
    </p>
  </RecordDetailHeader>
)