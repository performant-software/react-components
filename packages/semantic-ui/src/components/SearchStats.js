// @flow

import React from 'react';
import i18n from '../i18n/i18n';
import { useStats } from '../hooks/InstantSearch';

const MsToS = 1000.0;
const DECIMAL_PLACES = 2;

const SearchStats = (props: any) => {
  const { nbHits: count, processingTimeMS } = useStats(props);
  const seconds = (processingTimeMS / MsToS).toFixed(DECIMAL_PLACES);

  return (
    <div>
      { i18n.t('SearchStats.labels.results', { count, seconds }) }
    </div>
  );
};

export default SearchStats;
