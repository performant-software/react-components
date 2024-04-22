// @flow

import { FuzzyDate as FuzzyDateUtils } from '@performant-software/shared-components';
import _ from 'underscore';

/**
 * Returns the date view for the passed event.
 *
 * @param event
 *
 * @returns {*}
 */
const getDateView = (event) => _.compact([
  FuzzyDateUtils.getDateView(event.start_date),
  FuzzyDateUtils.getDateView(event.end_date)
]).join(' - ');

export default {
  getDateView
};
