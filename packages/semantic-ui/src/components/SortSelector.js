// @flow

import React, { useCallback, useEffect, useRef } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import _ from 'underscore';
import { SORT_ASCENDING, SORT_DESCENDING } from '../constants/Sort';

type Option = {
  key: string,
  value: string,
  text: string
};

type Sort = Option & {
  direction?: string
};

type Props = {
  defaultValue?: string,
  direction: string,
  onChange: (sort: Sort) => void,
  options: Array<Option>,
  text: string,
  value: string
};

// TODO: Add this to ItemsToggle component
const SortSelector = (props: Props) => {
  const sortRef = useRef();

  /**
   * Calls the onChange prop with the direction, text, and value of the selected sort.
   *
   * @type {(function(*): void)|*}
   */
  const onSelection = useCallback((option) => {
    const direction = props.value === option.value && props.direction === SORT_ASCENDING
      ? SORT_DESCENDING
      : SORT_ASCENDING;

    props.onChange({ ...option, direction });
  }, [props.direction, props.onChange, props.value]);

  /**
   * Set the default sort to the passed default value or the first option in the list.
   */
  useEffect(() => {
    if (!props.value) {
      let defaultSort;

      if (props.defaultValue) {
        defaultSort = _.findWhere(props.options, { value: props.defaultValue });
      } else {
        defaultSort = _.first(props.options);
      }

      onSelection(defaultSort);
    }
  }, []);

  return (
    <Button.Group
      basic
      className='sort-selector'
      style={{
        fontSize: 'inherit'
      }}
    >
      <Button
        aria-label='Sort by'
        content={props.text}
        icon={props.direction === SORT_ASCENDING ? 'sort alphabet up' : 'sort alphabet down'}
        onClick={(e) => sortRef.current.handleClick(e)}
      />
      <Dropdown
        aria-label='Sort'
        className='button icon'
        floating
        options={_.map(props.options, (option) => ({
          ...option,
          onClick: () => onSelection(option)
        }))}
        ref={sortRef}
        trigger={<></>}
        value={props.value}
      />
    </Button.Group>
  );
};

export default SortSelector;
