// @flow

import React from 'react';
import FacetSlider from '../../../core-data/src/components/FacetSlider';

export default {
  title: 'Components/Core Data/FacetSlider',
  component: FacetSlider
};

export const Default = () => (
  <FacetSlider
    markerStep={100}
    min={1500}
    max={2010}
  />
);

export const CustomStyles = () => (
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
      markerStep={100}
      min={1500}
      max={2010}
    />
  </div>
);
