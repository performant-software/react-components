import React, { useState } from 'react';
import PageStats from '../../../performant-ui/src/components/PageStats';

export default {
  title: 'Components/Performant UI/PageStats',
  component: PageStats
};

export const Default = () => {
  return (
    <PageStats
      itemCount={100}
      page={1}
      perPage={10}
    />
  );
};

export const TrickierNumbers = () => {
  return (
    <PageStats
      itemCount={43279}
      page={23}
      perPage={77}
    />
  )
}