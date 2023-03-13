// @flow

import React, { useCallback } from 'react';
import { Button, Label } from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
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
    // Content will always container the label
    const content = [filter.label];

    // If an option can be found, use the text from the operator
    const option = _.findWhere(FilterOperatorOptions, { key: filter.operator });
    if (option) {
      content.push(option.text);
    }

    // Append the value in quotes, if present
    if (filter.value) {
      content.push(`"${filter.value}"`);
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
