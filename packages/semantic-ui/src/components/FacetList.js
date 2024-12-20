// @flow

import { Timer } from '@performant-software/shared-components';
import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import {
  Checkbox,
  Icon,
  Input,
  Label,
  List
} from 'semantic-ui-react';
import _ from 'underscore';
import Facet, { type Props as FacetProps } from './Facet';
import i18n from '../i18n/i18n';
import LinkButton from './LinkButton';
import { type RefinementListProps } from '../types/InstantSearch';
import './FacetList.css';

type Props = FacetProps & RefinementListProps & {
  /**
   * The default value for the `operator` prop. If not provided, this will default to `or`.
   */
  defaultOperator?: string,

  /**
   * Default value of the facet list.
   */
  defaultValue?: string,

  /**
   * Renders a custom label element for the passed item.
   */
  renderLabel?: (item: any) => JSX.Element,

  /**
   * If "true", the component will render a search box for searching individual facet values.
   */
  searchable?: boolean,

  /**
   * If "true", the component will render a toggle to change the behavior of the list from "or" to "and" logic.
   */
  toggleable?: boolean
};

const OPERATOR_OR = 'or';
const OPERATOR_AND = 'and';

/**
 * This component is used with the `useRefinementList` hook from Instant Search Hooks. If the `searchable` prop
 * is "true", the component will also render a search box used to filter the list of facet values.
 */
const FacetList = forwardRef(({ useRefinementList, ...props }: Props, ref: HTMLElement) => {
  const [operator, setOperator] = useState(props.defaultOperator || OPERATOR_OR);

  const {
    canRefine,
    canToggleShowMore,
    isShowingMore,
    items,
    refine,
    searchForItems,
    toggleShowMore,
  } = useRefinementList({ ...props, operator });

  const searchRef = useRef();
  const [query, setQuery] = useState('');

  /**
   * Clears the current search state.
   *
   * @type {(function(): void)|*}
   */
  const onClear = useCallback(() => {
    // Reset the query view
    setQuery('');

    // Reset the list of refinements
    searchForItems();

    // Refocus the input element
    const { current: instance } = searchRef;
    if (instance) {
      instance.focus();
    }
  }, []);

  /**
   * Executes the search within the list of facet values.
   *
   * @type {function(): *}
   */
  const onSearch = useCallback(() => searchForItems(query), [query, searchForItems]);

  /**
   * Toggles the "and" / "or" list operator.
   *
   * @type {function(): void}
   */
  const onToggleOperator = useCallback(() => {
    setOperator((prevOperator) => (prevOperator === OPERATOR_OR ? OPERATOR_AND : OPERATOR_OR));
  }, []);

  /**
   * Sets the visibility variable based on the items and query.
   */
  const visible = useMemo(() => !(canRefine && _.isEmpty(items) && _.isEmpty(query)), [items, query]);

  /**
   * Sets the default value if provided.
   */
  useEffect(() => {
    if (props.defaultValue) {
      refine(props.defaultValue);
    }
  }, [props.defaultValue]);

  /**
   * Persist the facet search when a user selects or deselects items.
   */
  useEffect(() => {
    if (query) {
      searchForItems(query);
    }
  }, [items]);

  return (
    <Facet
      className='facet-list'
      defaultActive={props.defaultActive}
      divided={props.divided}
      innerRef={ref}
      title={props.title}
      visible={visible}
    >
      { props.searchable && (
        <Input
          icon={query && (
            <Icon
              link
              name='times'
              onClick={onClear}
            />
          )}
          fluid
          onChange={(e, { value }) => setQuery(value)}
          onKeyDown={() => Timer.clearSearchTimer()}
          onKeyUp={() => Timer.setSearchTimer(onSearch)}
          placeholder={i18n.t('FacetList.labels.search')}
          ref={searchRef}
          value={query}
        />
      )}
      <List
        className='facet-list'
      >
        { _.map(items, (item, index) => (
          <List.Item
            key={index}
          >
            <Checkbox
              checked={item.isRefined}
              label={{
                children: props.renderLabel
                  ? props.renderLabel(item)
                  : (
                    <>
                      <span>{ item.label }</span>
                      <Label
                        circular
                        content={item.count}
                        size='small'
                      />
                    </>
                  )
              }}
              onClick={() => refine(item.value)}
            />
          </List.Item>
        ))}
      </List>
      { canToggleShowMore && (
        <>
          <Icon
            name={isShowingMore ? 'angle up' : 'angle down'}
          />
          <LinkButton
            content={isShowingMore
              ? i18n.t('FacetList.buttons.showLess')
              : i18n.t('FacetList.buttons.showMore')}
            onClick={() => toggleShowMore()}
          />
        </>
      )}
      { props.toggleable && (
        <Checkbox
          className='toggleable'
          checked={operator === OPERATOR_AND}
          label={operator === OPERATOR_OR
            ? i18n.t('FacetList.labels.matchAny')
            : i18n.t('FacetList.labels.matchAll')}
          onChange={onToggleOperator}
          toggle
        />
      )}
    </Facet>
  );
});

FacetList.defaultProps = {
  ...Facet.defaultProps,
  defaultOperator: OPERATOR_OR
};

export default FacetList;
