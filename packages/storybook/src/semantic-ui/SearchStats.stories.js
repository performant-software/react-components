// @flow

import React from 'react';
import SearchStats from '../../../semantic-ui/src/components/SearchStats';

export default {
  title: 'Components/Semantic UI/SearchStats',
  component: SearchStats
};

export const Default = () => (
  <SearchStats
    useStats={() => ({
      nbHits: 389427834,
      processingTimeMS: 385
    })}
  />
);
