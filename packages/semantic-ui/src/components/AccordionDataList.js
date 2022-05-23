// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type Element
} from 'react';
import _ from 'underscore';
import { Button, Checkbox, Dropdown } from 'semantic-ui-react';
import NestedAccordion from './NestedAccordion';
import useDataList, { SORT_ASCENDING } from './DataList';
import useList, { type Props as ListProps } from './List';
import './AccordionDataList.css';

type Sort = {
  key: any,
  value: any,
  text: string,
  direction?: string
};

type Props = ListProps & {
  getChildItems: (items: ?Array<any>, item: any) => Array<any>,
  getRootItems: (items: ?Array<any>) => Array<any>,
  page: number,
  onInit: () => void,
  onSort: (column: string, direction: ?string, page?: number) => void,
  selectable: boolean,
  sort?: Array<Sort>,
  sortColumn?: string,
  sortDirection?: string
};

type AccordionProps = ListProps & {
  getChildItems: (items: Array<any>, item: any) => Array<any>,
  onItemToggle: (item: any) => void,
  onRowSelect: (?any, ?any, ?any) => void,
  renderItem: (item: any) => Element<any>,
  rootItems: Array<any>,
  selectable: boolean,
  selectedRows: Array<{id: number}>,
  showToggle: (item: any) => boolean
};

const Accordion = useList((props: AccordionProps) => {
  /**
   * Renders the actions for the passed item.
   *
   * @type {(function(*=): (null|*))|*}
   */
  const renderActions = useCallback((item) => {
    const actions = _.filter(props.actions, (action) => !action.accept || action.accept(item));

    if (_.isEmpty(actions)) {
      return null;
    }

    return (
      <Button.Group>
        { _.map(actions, (action, index) => (
          <Button
            aria-label={action.name}
            basic
            color={action.color}
            icon={action.icon}
            key={`${action.name}-${index}`}
            onClick={action.onClick && action.onClick.bind(this, item)}
            title={action.title}
          />
        ))}
      </Button.Group>
    );
  }, [props.actions]);

  /**
   * Renders the checkbox for the passed item.
   *
   * @type {(function(*=): (null|*))|*}
   */
  const renderCheckbox = useCallback((item) => {
    if (!props.selectable) {
      return null;
    }

    return (
      <Checkbox
        key={`select-checkbox-${item.id}`}
        className='row-select-checkbox'
        onClick={(e, el) => props.onRowSelect(el, item, e)}
        checked={!!props.selectedRows.find((r) => r.id === item.id)}
      />
    );
  }, [props.onRowSelect, props.selectable, props.selectedRows]);

  return (
    <div
      className={['accordion-data-list', props.className || ''].join(' ')}
    >
      <NestedAccordion
        getChildItems={props.getChildItems}
        onItemToggle={(item) => props.onItemToggle && props.onItemToggle(item)}
        renderItem={(item) => props.renderItem(item)}
        renderRight={(item) => (
          <>
            { renderActions(item) }
            { renderCheckbox(item) }
          </>
        )}
        rootItems={props.rootItems}
        showToggle={(item) => props.showToggle(item)}
      />
    </div>
  );
});

const AccordionDataList = (props: Props) => {
  const rootItems = useMemo(() => props.getRootItems(props.items), [props.items]);
  const getChildItems = useCallback((item) => props.getChildItems(props.items, item), [props.items]);
  const sortDropdown = useRef<?typeof Dropdown>();

  /**
   * Sets the current sort value.
   *
   * @type {unknown}
   */
  const sortValue = useMemo(() => {
    const sort = _.find(props.sort, { value: props.sortColumn });
    return sort && sort.text;
  }, [props.sort, props.sortColumn]);

  /**
   * Toggles the sort property.
   *
   * @type {(function(*): void)|*}
   */
  const onSort = useCallback((sort) => {
    if (!props.onSort) {
      return;
    }

    let sortDirection;

    if (sort.value !== props.sortColumn) {
      sortDirection = sort.direction;
    }

    props.onSort(sort.value, sortDirection);
  }, [props.onSort, props.sortColumn]);

  /**
   * Renders the sort dropdown.
   *
   * @type {(function(): (null|*))|*}
   */
  const renderSort = useCallback(() => {
    if (_.isEmpty(props.sort)) {
      return null;
    }

    return (
      <Button.Group
        basic
        style={{
          fontSize: 'inherit'
        }}
      >
        <Button
          aria-label='Sort by'
          content={sortValue}
          icon={props.sortDirection === SORT_ASCENDING ? 'sort alphabet up' : 'sort alphabet down'}
          onClick={(e) => sortDropdown.current && sortDropdown.current.handleClick(e)}
        />
        <Dropdown
          aria-label='Sort by toggle'
          className='button icon'
          floating
          options={_.map(props.sort, (sort) => ({
            ...sort,
            onClick: () => onSort(sort)
          }))}
          ref={sortDropdown}
          trigger={<></>}
          value={props.sortColumn}
        />
      </Button.Group>
    );
  }, [props.sort, props.sortColumn, props.sortDirection]);

  /**
   * Sorts the first column on component mount. If no sort properties are defined, the onInit prop is called.
   */
  useEffect(() => {
    if (_.isEmpty(props.sort)) {
      return props.onInit();
    }

    const { page } = props;
    let { sortColumn = '', sortDirection = SORT_ASCENDING } = props;

    if (!sortColumn) {
      const defaultSort = _.first(props.sort);

      if (defaultSort) {
        sortColumn = defaultSort.value;

        if (defaultSort.direction) {
          sortDirection = defaultSort.direction;
        }
      }
    }

    return props.onSort(sortColumn, sortDirection, page);
  }, []);

  return (
    <Accordion
      {...props}
      renderListHeader={renderSort}
      rootItems={rootItems}
      getChildItems={getChildItems}
    />
  );
};

export default useDataList(AccordionDataList);
