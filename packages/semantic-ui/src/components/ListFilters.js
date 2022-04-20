// @flow

import { type EditContainerProps } from '@performant-software/shared-components';
import React, {
  useCallback,
  useEffect,
  useMemo,
  type Element
} from 'react';
import uuid from 'react-uuid';
import {
  Button,
  Checkbox,
  Dropdown,
  Form,
  Grid,
  Header,
  Input,
  Modal
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import AssociatedDropdown from './AssociatedDropdown';
import DropdownButton from './DropdownButton';
import FuzzyDate from './FuzzyDate';

type Option = {
  key: string | number,
  icon?: string,
  text: string,
  value: any
};

type Filter = {
  collectionName?: 'string',
  key: string,
  label: string,
  onSearch?: (search: string) => Promise<any>,
  operator: ?string,
  options?: Array<Option>,
  renderOption?: (item: any) => Option,
  renderSearchQuery?: (item: any) => Element<any> | string,
  searchQuery?: string,
  type: string,
  value: ?any
};

type Props = EditContainerProps & {
  filters: Array<Filter>,
  item: {
    filters: Array<Filter>,
    onSort: (filter: Filter) => any
  }
};

const FilterTypes = {
  boolean: 'boolean',
  date: 'date',
  integer: 'integer',
  relationship: 'relationship',
  select: 'select',
  string: 'string',
  text: 'text'
};

const Operators = {
  equal: 'equal',
  notEqual: 'not_equal',
  contain: 'contain',
  notContain: 'not_contain',
  empty: 'empty',
  notEmpty: 'not_empty',
  greaterThan: 'greater_than',
  lessThan: 'less_than'
};

const OperatorsByType = {
  [FilterTypes.boolean]: [
    Operators.equal
  ],
  [FilterTypes.date]: [
    Operators.equal
  ],
  [FilterTypes.relationship]: [
    Operators.equal,
    Operators.notEqual,
    Operators.empty,
    Operators.notEmpty
  ],
  [FilterTypes.select]: [
    Operators.equal,
    Operators.notEqual,
    Operators.empty,
    Operators.notEmpty
  ],
  [FilterTypes.string]: [
    Operators.equal,
    Operators.notEqual,
    Operators.contain,
    Operators.notContain,
    Operators.empty,
    Operators.notEmpty
  ],
  [FilterTypes.text]: [
    Operators.contain,
    Operators.notContain,
    Operators.empty,
    Operators.notEmpty
  ]
};

const OperatorOptions = [{
  key: Operators.equal,
  value: Operators.equal,
  text: i18n.t('ListFilters.operators.equal')
}, {
  key: Operators.notEqual,
  value: Operators.notEqual,
  text: i18n.t('ListFilters.operators.notEqual')
}, {
  key: Operators.contain,
  value: Operators.contain,
  text: i18n.t('ListFilters.operators.contain')
}, {
  key: Operators.notContain,
  value: Operators.notContain,
  text: i18n.t('ListFilters.operators.notContain')
}, {
  key: Operators.empty,
  value: Operators.empty,
  text: i18n.t('ListFilters.operators.empty')
}, {
  key: Operators.notEmpty,
  value: Operators.notEmpty,
  text: i18n.t('ListFilters.operators.notEmpty')
}, {
  key: Operators.greaterThan,
  value: Operators.greaterThan,
  text: i18n.t('ListFilters.operators.greaterThan')
}, {
  key: Operators.lessThan,
  value: Operators.lessThan,
  text: i18n.t('ListFilters.operators.lessThan')
}];

const ListFilters = (props: Props) => {
  /**
   * Returns the available operators for the passed filter type.
   *
   * @type {function(string): *}
   */
  const getOperatorsByType = useCallback((type: string) => {
    const operators = OperatorsByType[type];
    return _.filter(OperatorOptions, (option) => !operators || _.contains(operators, option.key));
  }, []);

  /**
   * Default sort function.
   *
   * @param filter
   */
  const onDefaultSort = (filter) => filter.label;

  /**
   * Renders the input element for the passed filter.
   *
   * @type {(function(Filter): (null|*))|*}
   */
  const renderInput = useCallback((filter: Filter) => {
    // No need to render an input for "empty" or "not empty" operators
    if (filter.operator === Operators.empty || filter.operator === Operators.notEmpty) {
      return null;
    }

    // Render a checkbox for boolean types
    if (filter.type === FilterTypes.boolean) {
      return (
        <Checkbox
          onChange={() => props.onSaveChildAssociation('filters', { ...filter, value: !filter.value })}
          checked={filter.value}
        />
      );
    }

    // Render a text input for string, text, and integer types
    if (filter.type === FilterTypes.string || filter.type === FilterTypes.text || filter.type === FilterTypes.integer) {
      return (
        <Input
          onChange={(e, { value }) => props.onSaveChildAssociation('filters', { ...filter, value })}
          value={filter.value}
        />
      );
    }

    // Render a fuzzy date input for date types
    if (filter.type === FilterTypes.date) {
      return (
        <FuzzyDate
          date={filter.value || {}}
          description={false}
          onChange={(value) => {
            props.onSaveChildAssociation('filters', {
              ...filter,
              value
            });
          }}
          title={filter.label}
        />
      );
    }

    // Render a dropdown
    if (filter.type === FilterTypes.select) {
      return (
        <Dropdown
          onChange={(e, { value }) => props.onSaveChildAssociation('filters', { ...filter, value })}
          options={filter.options}
          selectOnBlur={false}
          selection
          value={filter.value}
        />
      );
    }

    // Render an AssociatedDropdown for relationship types
    if (filter.type === FilterTypes.relationship) {
      const {
        collectionName,
        onSearch,
        renderOption,
        renderSearchQuery,
        searchQuery,
        value
      } = filter;

      if (!(collectionName && onSearch && renderOption)) {
        return null;
      }

      return (
        <AssociatedDropdown
          collectionName={collectionName}
          onSearch={onSearch}
          onSelection={(item) => {
            props.onSaveChildAssociation('filters', {
              ...filter,
              searchQuery: renderSearchQuery && renderSearchQuery(item),
              value: item.id
            });
          }}
          renderOption={renderOption}
          required
          searchQuery={searchQuery || ''}
          value={value || null}
        />
      );
    }

    return null;
  }, [props.item.filters, props.onSaveChildAssociation]);

  /**
   * Sort the filters according to the onSort prop if provided.
   *
   * @type {unknown}
   */
  const filters = useMemo(() => _.sortBy(
    props.filters,
    props.item.onSort || onDefaultSort
  ), [props.filters, props.item.onSort]);

  /**
   * Since the filters may be restored from the session storage, complex object and functions are not serialized. Here
   * we'll default any properties for existing filters that could not be serialized when the component is mounted.
   */
  useEffect(() => {
    _.each(props.item.filters, (filter) => {
      const defaults = _.findWhere(props.filters, { key: filter.key });

      if (filter.type === FilterTypes.boolean) {
        defaults.value = false;
      }

      props.onSaveChildAssociation('filters', _.defaults(filter, defaults));
    });
  }, []);

  return (
    <Modal
      as={Form}
      centered={false}
      className='list-filters-modal'
      noValidate
      open
      size='small'
    >
      <Modal.Header>
        <Grid
          columns={2}
        >
          <Grid.Column
            verticalAlign='middle'
          >
            <Header
              content={i18n.t('ListFilters.title')}
            />
          </Grid.Column>
          <Grid.Column
            textAlign='right'
          >
            <DropdownButton
              color='green'
              icon='plus'
              options={_.map(filters, (filter) => ({
                key: filter.key,
                value: filter.key,
                text: filter.label
              }))}
              onChange={(e, { value }) => {
                const filter = _.findWhere(props.filters, { key: value });
                props.onSaveChildAssociation('filters', {
                  ...filter,
                  uid: uuid(),
                  operator: Operators.equal
                });
              }}
              scrolling
              text={i18n.t('ListFilters.buttons.add')}
              value=''
            />
            <Button
              color='red'
              content={i18n.t('ListFilters.buttons.reset')}
              icon='repeat'
              onClick={() => props.onReset()}
              style={{
                marginLeft: '1em'
              }}
            />
          </Grid.Column>
        </Grid>
      </Modal.Header>
      <Modal.Content>
        { !_.isEmpty(props.item.filters) && (
          <Grid>
            { _.map(props.item.filters, (filter) => (
              <Grid.Row
                columns={4}
                key={filter.key}
                verticalAlign='middle'
              >
                <Grid.Column>
                  <Header
                    content={filter.label}
                  />
                </Grid.Column>
                <Grid.Column
                  width={5}
                >
                  <Dropdown
                    options={getOperatorsByType(filter.type)}
                    onChange={(e, { value }) => props.onSaveChildAssociation('filters', {
                      ..._.omit(filter, 'value'),
                      operator: value,
                    })}
                    selection
                    value={filter.operator}
                  />
                </Grid.Column>
                <Grid.Column
                  width={5}
                >
                  { renderInput(filter) }
                </Grid.Column>
                <Grid.Column
                  width={1}
                >
                  <Button
                    basic
                    icon='times'
                    onClick={() => {
                      /*
                       * If we're removing the last filter, call the onReset prop to ensure the UI doesn't display
                       * as active.
                       */
                      if (props.item.filters && props.item.filters.length === 1) {
                        props.onReset();
                      } else {
                        props.onDeleteChildAssociation('filters', filter);
                      }
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
            ))}
          </Grid>
        )}
      </Modal.Content>
      { props.children }
    </Modal>
  );
};

export default ListFilters;

export {
  FilterTypes
};
