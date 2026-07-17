// @flow

import React, { useCallback } from 'react';
import { Button, Label } from 'semantic-ui-react';
import _ from 'underscore';
import { Browser, Calendar } from '@performant-software/shared-components';
import i18n from '../i18n/i18n';
import { ACCURACY_YEAR } from './FuzzyDate';
import { FilterOperatorOptions, type Filter } from './ListFilters';
import './FilterLabels.css';

type Props = {
  filters: Array<Filter>,
  onClear?: () => void,
  onClick: (filter: Filter) => void
};

const FilterLabels = (props: Props) => {
  /**
   * Returns the content string for the passed filter.
   *
   * @type {function(*): string}
   */
  const getContent = useCallback((filter) => {
    // Content will always contain the label
    const content = [filter.label];

    // If an option can be found, use the text from the operator
    const option = _.findWhere(FilterOperatorOptions, { key: filter.operator });
    if (option) {
      content.push(option.text);
    }

    let displayValue = filter.value;

    if (filter.searchQuery) {
      // prefer searchQuery as the default display label
      displayValue = filter.searchQuery;
    } else if (filter.options) {
      // get text label from dropdown/select filters
      const selectedOption = _.findWhere(filter.options, { value: filter.value });
      if (selectedOption) {
        displayValue = selectedOption.text;
      }
    } else if (filter.type === 'boolean') {
      // format booleans as capitalized strings
      displayValue = filter.value ? 'True' : 'False';
    } else if (filter.type === 'date' && typeof filter.value === 'object' && filter.value !== null) {
      // format FuzzyDate objects to selected accuracy
      const { accuracy = ACCURACY_YEAR, startDate, endDate, range } = filter.value;

      const calendar = new Calendar(
        Browser.isBrowser() && navigator.language,
        Calendar.Calendars.gregorian
      );

      const formatDate = (value) => calendar.format(value, accuracy);
      const formattedStart = startDate ? formatDate(startDate) : '';

      if (range && endDate) {
        displayValue = `${formattedStart} - ${formatDate(endDate)}`;
      } else {
        displayValue = formattedStart;
      }
    }

    // Append the value in quotes, if present
    if (displayValue !== undefined && displayValue !== null && displayValue !== '') {
      content.push(`"${displayValue}"`);
    }

    return content.join(' ');
  }, []);

  return (
    <Label.Group
      className='filter-labels'
    >
      { _.map(props.filters, (filter) => (
        <Label
          basic
          content={getContent(filter)}
          onRemove={() => props.onClick(filter)}
        />
      ))}
      { props.onClear && (
        <Label
          as={Button}
          color='red'
          content={i18n.t('FilterLabels.buttons.clear')}
          icon='times'
          onClick={props.onClear}
        />
      )}
    </Label.Group>
  );
};

export default FilterLabels;
