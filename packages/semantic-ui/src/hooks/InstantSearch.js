// @flow

import { useConnector } from 'react-instantsearch-hooks-web';
import connectRange from 'instantsearch.js/es/connectors/range/connectRange';
import connectStats from 'instantsearch.js/es/connectors/stats/connectStats';

/**
 * Utility function to create the range slider hook.
 *
 * @param props
 */
export const useRangeSlider = (props) => useConnector(connectRange, props);

/**
 * Utility function to create the stats hook.
 *
 * @param props
 */
export const useStats = (props) => useConnector(connectStats, props);
