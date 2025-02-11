// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import SelectRecordPanel from '../../../core-data/src/components/SelectRecordPanel';
import data from '../data/Companies.json';

export default {
  title: 'Components/Core Data/SelectRecordPanel',
  component: SelectRecordPanel,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
};

export const Default = () => (
  <div className='w-[360px] h-[600px]'>
    <SelectRecordPanel
      items={data}
      modelName='Organization'
      onClick={action('click')}
      onClose={action('click')}
      renderItemName={(item) => item.company}
      itemIcon='occupation'
      headerIcon='location'
      title='Cincinnati, Ohio'
    />
  </div>
);
