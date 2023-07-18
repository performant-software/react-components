// @flow

import React from 'react';
import i18n from '../i18n/i18n';
import type { StatsProps } from '../types/InstantSearch';

const MsToS = 1000.0;
const DECIMAL_PLACES = 2;

/**
 * This component is used with the `useStats` hook from Instant Search Hooks and renders a label of the number of
 * records returned and the time it took to execute the request.
 */
const SearchStats = ({ useStats, ...props }: StatsProps) => {
  const { nbHits: count, processingTimeMS } = useStats(props);
  const seconds = (processingTimeMS / MsToS).toFixed(DECIMAL_PLACES);

  return (
    <div>
      { i18n.t('SearchStats.labels.results', { count, seconds }) }
    </div>
  );
};

export default SearchStats;
