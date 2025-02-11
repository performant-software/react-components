// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import SelectRecordPanel from '../../../core-data/src/components/SelectRecordPanel';
import data from '../data/Companies.json';

export default {
  title: 'Components/Core Data/SelectRecordPanel',
  component: SelectRecordPanel
};

export const Default = () => (
  <SelectRecordPanel
    items={data}
    modelName='Organization'
    onClick={action('click')}
    renderItemName={(item) => item.company}
    itemIcon='occupation'
    headerIcon='location'
    title='Cincinnati'
  />
);
