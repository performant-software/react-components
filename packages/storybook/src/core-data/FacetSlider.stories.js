// @flow

import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import FacetSlider from '../../../core-data/src/components/FacetSlider';

export default {
  title: 'Components/Core Data/FacetSlider',
  component: FacetSlider
};

export const Default = () => {
  const [value, setValue] = useState([1500, 2010]);

  return (
    <FacetSlider
      min={1500}
      max={2010}
      onValueChange={setValue}
      value={value}
    />
  );
};

export const CustomStyles = () => {
  const [value, setValue] = useState([1500, 2010]);

  return (
    <div
      className='bg-gray-1000 text-white fill-white py-7 rounded-md'
    >
      <FacetSlider
        classNames={{
          button: 'px-4',
          range: 'bg-white',
          thumb: 'bg-white',
          track: 'bg-gray-400'
        }}
        min={1500}
        max={2010}
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

export const TooltipPosition = () => {
  const [value, setValue] = useState([1500, 2010]);

  return (
    <FacetSlider
      min={1500}
      max={2010}
      onValueChange={setValue}
      position='right'
      value={value}
    />
  );
};
