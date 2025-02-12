// @flow

import React, { useState } from 'react';
import Slider from '../../../core-data/src/components/Slider';

export default {
  title: 'Components/Core Data/Slider',
  component: Slider
};

export const Default = () => {
  const [value, setValue] = useState([1500, 2010]);

  return (
    <Slider
      min={1500}
      max={2010}
      onValueChange={setValue}
      value={value}
    />
  );
};

export const WithLabel = () => {
  const [value, setValue] = useState([1500, 2010]);

  return (
    <div className='w-[300px] border border-black rounded-md'>
      <Slider
        min={1500}
        max={2010}
        label='Lifespan'
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

export const WithLabelAndIcon = () => {
  const [value, setValue] = useState([1500, 2010]);

  return (
    <div className='w-[300px] border border-black rounded-md'>
      <Slider
        min={1500}
        max={2010}
        icon='person'
        label='Lifespan'
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};

export const CustomStyles = () => {
  const [value, setValue] = useState([1500, 2010]);
  const [committedValue, setCommittedValue] = useState([1500, 2010]);

  return (
    <div
      className='bg-gray-1000 text-white fill-white py-7 rounded-md'
    >
      <p>
        committed values:
        {committedValue[0]}
        ,
        {committedValue[1]}
      </p>
      <Slider
        classNames={{
          button: 'px-4',
          range: 'bg-white',
          thumb: 'bg-white',
          track: 'bg-gray-400'
        }}
        min={1500}
        max={2010}
        onValueChange={setValue}
        onValueCommit={setCommittedValue}
        value={value}
      />
    </div>
  );
};

export const TooltipPosition = () => {
  const [value, setValue] = useState([1500, 2010]);

  return (
    <Slider
      min={1500}
      max={2010}
      onValueChange={setValue}
      position='right'
      value={value}
    />
  );
};

export const NarrowContainer = () => {
  const [value, setValue] = useState([1500, 2010]);

  return (
    <div className='w-[300px] border border-black rounded-md'>
      <Slider
        min={1500}
        max={2010}
        onValueChange={setValue}
        value={value}
      />
    </div>
  );
};
