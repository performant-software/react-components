// @flow

import axios from 'axios';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import { Form, Grid, Modal } from 'semantic-ui-react';
import _ from 'underscore';
import DataTable from './DataTable';
import DropdownButton from './DropdownButton';
import i18n from '../i18n/i18n';
import MenuBar from './MenuBar';
import MenuSidebar from './MenuSidebar';
import useDataList, { SORT_ASCENDING, SORT_DESCENDING } from './DataList';
import './DataView.css';

import type { Column } from './DataTable';

type Sort = {
  label: string,
  value: string
};

type Item = {
  id: string,
  label: string,
  group?: string,
  columns?: Array<Column>,
  sorts?: Array<Sort>
};

type Props = {
  columnCount?: number,
  items: Array<Item>,
  layout: 'top' | 'left',
  title: string
};

/**
 * Sets up the List component used by the DataView component. This component is responsible for rendering the DataTable
 * and handling sorting.
 */
const List = useDataList((props) => {
  const [activeSort, setActiveSort] = useState();

  /**
   * Sets the active sort object on the state.
   *
   * @type {(function(*): void)|*}
   */
  const onSortChange = useCallback((sort) => {
    const newSort = { ...sort };

    if (activeSort && activeSort.value === sort.value) {
      newSort.direction = activeSort.direction === SORT_DESCENDING ? SORT_ASCENDING : SORT_DESCENDING;
    }

    setActiveSort(newSort);
  }, [props.sorts, activeSort]);

  /**
   * Calls the onSort prop when the active sort is changed.
   */
  useEffect(() => {
    if (activeSort) {
      props.onSort(activeSort.value, activeSort.direction, props.page);
    }
  }, [activeSort]);

  /**
   * Calls the onSort prop when the component is loaded to initialize the data set.
   */
  useEffect(() => {
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

    props.onSort(sortColumn, sortDirection, page);
  }, []);

  return (
    <DataTable
      {...props}
      renderListHeader={() => props.sorts && (
        <DropdownButton
          basic
          icon={activeSort && activeSort.direction === SORT_DESCENDING
            ? 'sort alphabet down'
            : 'sort alphabet up'}
          onChange={() => {}}
          options={_.map(props.sorts, (sort) => ({
            key: sort.value,
            value: sort.value,
            text: sort.label,
            onClick: () => onSortChange(sort)
          }))}
          text={activeSort
            ? i18n.t('DataView.labels.sortBy', { column: activeSort.label })
            : i18n.t('DataView.labels.noSort')}
          value={activeSort && activeSort.value}
        />
      )}
      tableProps={{
        ...props.tableProps || {},
        celled: true
      }}
    />
  );
});

const DataView = (props: Props) => {
  const [activeItem, setActiveItem] = useState();
  const [selectedRecord, setSelectedRecord] = useState();

  const [columns, setColumns] = useState([]);
  const [menu, setMenu] = useState([]);
  const [paddingLeft, setPaddingLeft] = useState();
  const [key, setKey] = useState();

  const menuRef = useRef();

  /**
   * Sets the collection name based on the URL of the active item.
   *
   * @type {string}
   */
  const collectionName = useMemo(() => {
    let name = '';

    if (activeItem) {
      name = activeItem.url.substr(activeItem.url.lastIndexOf('/') + 1, activeItem.url.length);
    }

    return name;
  }, [activeItem]);

  /**
   * Merges the calculated columns with the columns passed with the active item. The idea is to allow customization
   * of the columns by the implementing component, but not require it.
   *
   * @type {(function(*): ([]|*))|*}
   */
  const mergeColumns = useCallback((items) => {
    if (!activeItem) {
      return [];
    }

    // Build the list of columns based on the unique set of properties
    const keys = _.chain(items)
      .map((item) => _.keys(item))
      .flatten()
      .uniq()
      .value();

    // Merge any columns provided by the implementing component by name
    let cols = _.map(keys, (col, index) => {
      const columnValue = _.findWhere(activeItem.columns, { name: col }) || {};

      const defaultValue = {
        name: col,
        label: col.trim().replace(/^\w/, (c) => c.toUpperCase()).replaceAll('_', ' '),
        sortable: false,
        resolve: (item) => resolveValue(item, col),
        hidden: index > props.columnCount,
        index
      };

      return _.extend(defaultValue, columnValue);
    });

    // Include any columns provided by the implementing component that do not exist on the object (i.e. extra columns)
    cols = [
      ...cols,
      ..._.reject(activeItem.columns, (col) => _.contains(keys, col.name))
    ];

    // Sort the columns by the index property
    return _.sortBy(cols, 'index');
  }, [activeItem]);

  /**
   * Calls the "show" URL for the passed item. It's possible that the API does not implement a public "show" route. In
   * this case and error is expected and the passed item will be set as the selected record.
   *
   * @type {(function(*): void)|*}
   */
  const onItemSelection = useCallback((item) => {
    if (activeItem) {
      axios
        .get(`${activeItem.url}/${item.id}`)
        .then(({ data }) => {
          const itemKey = _.first(_.keys(data));
          setSelectedRecord(data[itemKey]);
        })
        .catch(() => {
          setSelectedRecord(item);
        });
    }
  }, [activeItem]);

  /**
   * Calls the "index" URL to initialize the data set.
   *
   * @type {function(*): *}
   */
  const onLoad = useCallback((params) => {
    let promise;

    if (activeItem) {
      promise = axios
        .get(activeItem.url, { params })
        .then((response) => {
          const items = response.data[collectionName];
          setColumns(mergeColumns(items));

          return response;
        });
    } else {
      promise = Promise.resolve();
    }

    return promise;
  }, [activeItem]);

  /**
   * Returns the value of the passed attribute on the passed item. This function handles use cases for special
   * types of objects.
   *
   * @type {function(*, *): *}
   */
  const resolveValue = useCallback((item, attribute) => {
    let value = item[attribute];

    if (_.isArray(value)) {
      value = _.size(value);
    } else if (_.isBoolean(value)) {
      value = Boolean(value).toString();
    } else if (_.isObject(value)) {
      value = value[_.first(_.keys(value))];
    }

    return value;
  }, []);

  /**
   * Re-formats the passed items as a menu object. If we're grouping the menu items, items will be added as
   * a child property of the group object.
   */
  useEffect(() => {
    const hasGroups = _.every(props.items, (item) => !!item.group);

    if (!hasGroups) {
      setMenu(props.items);
    } else {
      const menuItems = _.groupBy(props.items, 'group');
      const headers = _.keys(menuItems);

      setMenu(_.map(headers, (header) => ({
        content: header,
        items: _.map(menuItems[header], (item) => ({
          active: activeItem && activeItem.id === item.id,
          content: item.label,
          onClick: () => setActiveItem(item)
        }))
      })));
    }
  }, [activeItem, props.items]);

  /**
   * Set the active item as the first item in the list.
   */
  useEffect(() => {
    if (props.items && props.items.length) {
      setActiveItem(_.first(props.items));
    }
  }, [props.items]);

  /**
   * If we're using the sidebar layout, set the padding so the fixed positioned menu does not overlap the content.
   */
  useEffect(() => {
    if (props.layout === 'left' && menuRef && menuRef.current) {
      setPaddingLeft(menuRef.current.offsetWidth);
    }
  }, [menuRef, props.layout]);

  /**
   * Calculates the key value when the active item or columns are changed. This is done to force re-rendering
   * of the List component when the columns are loaded via the API.
   */
  useEffect(() => {
    const keys = [];

    if (activeItem) {
      keys.push(activeItem.id);
    }

    if (columns && columns.length) {
      keys.push(..._.pluck(columns, 'name'));
    }

    setKey(keys.join(''));
  }, [activeItem, columns]);

  return (
    <div
      className='data-view'
    >
      { props.layout === 'top' && (
        <MenuBar
          header={{
            content: props.title
          }}
          items={menu}
        />
      )}
      { props.layout === 'left' && (
        <MenuSidebar
          contextRef={menuRef}
          header={{
            content: props.title
          }}
          items={menu}
        />
      )}
      <div
        style={{
          marginLeft: paddingLeft
        }}
      >
        { activeItem && (
          <List
            actions={[{
              name: 'details',
              icon: 'info',
              onClick: onItemSelection
            }]}
            collectionName={collectionName}
            columns={columns}
            key={key}
            onLoad={onLoad}
            perPageOptions={[10, 25, 50, 100]}
            searchable
            sorts={activeItem.sorts}
          />
        )}
      </div>
      { selectedRecord && (
        <Modal
          as={Form}
          centered={false}
          className='data-view-modal'
          closeIcon
          onClose={() => setSelectedRecord(null)}
          open
        >
          <Modal.Header
            content={i18n.t('DataView.labels.details')}
          />
          <Modal.Content>
            <Grid
              columns={3}
              doubling
            >
              { _.map(mergeColumns([selectedRecord]), (column) => (
                <Grid.Column
                  as={Form.Field}
                  key={column.name}
                >
                  <span
                    className='label'
                  >
                    { column.label }
                  </span>
                  { resolveValue(selectedRecord, column.name) }
                </Grid.Column>
              ))}
            </Grid>
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
};

DataView.defaultProps = {
  columnCount: 5,
  layout: 'left'
};

export default DataView;
