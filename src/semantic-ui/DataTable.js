// @flow

import React, { Component, createRef, type Element } from 'react';
import {
  Checkbox,
  Button,
  Loader,
  Popup,
  Ref,
  Table
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import ColumnResize from './ColumnResize';
import useColumnSelector from './DataTableColumnSelector';
import useList from './List';
import './DataTable.css';

import type { Action } from './List';
import { isBrowser } from '../utils/Browser';

type Column = {
  className?: string,
  hidden?: boolean,
  label?: string,
  name: string,
  render?: (item: any) => void,
  renderHeader?: (item: any) => void,
  resolve?: (item: any) => void,
  sortable: boolean
};

type Props = {
  actions: Array<Action>,
  className: string,
  columns: Array<Column>,
  expandableRows: boolean,
  expandPanel: (item: any, activePanel: any) => Component<any>,
  isRowSelected: (item: any) => boolean,
  items: ?Array<any>,
  loading: boolean,
  onClearSelected: () => void,
  onColumnClick: (column: Column) => void,
  onRowSelect?: (item: any)=>void,
  onSelectAll: (items: Array<any>)=>void,
  renderEmptyMessage: () => Element<any>,
  renderEmptyRow?: () => void,
  renderItem?: (item: any, index: number, children?: any) => Element<any>,
  sortColumn?: string,
  sortDirection?: string,
  t: (key: string) => string,
  tableProps: any,
  selectable?: boolean,
  selectedRows: Array<{id: number}>,
};

type State = {
  activePanel: any,
  resize: ?{
    columnRef: typeof Ref,
    offset: number
  }
};

class DataTable extends Component<Props, State> {
  static defaultProps: any;

  columnRefs: any;
  onClick: (e: Event) => void;
  onMouseMove: (e: Event) => void;
  onMouseUp: (e: Event) => void;

  /**
   * Constructs a new DataTable component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      resize: null,
      activePanel: null
    };

    this.initializeColumnRefs();

    this.onClick = this.onPreventClick.bind(this);
    this.onMouseMove = this.onColumnResize.bind(this);
    this.onMouseUp = this.afterColumnResize.bind(this);
  }

  /**
   * If the resize object is present on the state, sets the capture click handler on the document and
   * clears the resize object on the state.
   */
  afterColumnResize() {
    if (this.state.resize && isBrowser()) {
      document.addEventListener('click', this.onClick, true);
      this.setState({ resize: undefined });
    }
  }

  /**
   * Initializes a ref for each table column.
   */
  initializeColumnRefs() {
    this.columnRefs = {};

    _.each(this.props.columns, (c) => {
      this.columnRefs[c.name] = createRef();
    });
  }

  /**
   * Adds the mousemove and mouseup event listeners for dynamic column resizing.
   */
  componentDidMount() {
    if (isBrowser()) {
      document.addEventListener('mousemove', this.onMouseMove);
      document.addEventListener('mouseup', this.onMouseUp);
    }
  }

  /**
   * Removes the mousemove and mouseup event listeners.
   */
  componentWillUnmount() {
    if (isBrowser()) {
      document.removeEventListener('mousemove', this.onMouseMove);
      document.removeEventListener('mouseup', this.onMouseUp);
    }
  }

  /**
   * Returns the actual column count. This will be the number of columns +1 if the table allows actions.
   *
   * @returns {number}
   */
  getColumnCount() {
    let columnCount = this.props.columns.length;

    if (this.props.actions && this.props.actions.length) {
      columnCount += 1;
    }

    return columnCount;
  }

  /**
   * Resizes the current column based on the user's mouse position.
   *
   * @param e
   */
  onColumnResize(e: MouseEvent) {
    const { resize } = this.state;

    if (resize) {
      const { columnRef, offset } = resize;
      columnRef.current.style.width = `${offset + e.pageX}px`;
    }
  }

  /**
   * Stops progagation of the onclick event. The column resizing seems to trigger the 'click' event on the <th>
   * containing the <div> used to resize the column. Since the <th> already provides a 'click' event, this makes for
   * an awkward user experience because it will trigger a column sort each time a column is resized.
   *
   * This function will capture the onclick prior to it bubbling to the <th> element and prevent it from happening. It
   * will also remove the event listener from the document so that clicks elsewhere in the document are not prevented.
   *
   * @param e
   */
  onPreventClick(e: Event) {
    e.stopPropagation();

    if (isBrowser()) {
      document.removeEventListener('click', this.onClick, true);
    }
  }

  /**
   * Selects all of the items in the current collection.
   *
   * @param allSelected
   */
  onSelectAll(allSelected) {
    let items;

    if (allSelected) {
      items = [...this.props.items || []];
    } else {
      items = _.reject(this.props.items, this.props.isRowSelected.bind(this));
    }

    _.each(items, this.props.onRowSelect && this.props.onRowSelect.bind(this));
  }

  /**
   * Renders the DataTable component.
   *
   * @returns {*}
   */
  render() {
    return (
      <Table
        className='data-table'
        {...this.props.tableProps}
      >
        <Table.Header>
          <Table.Row>
            { this.renderSelectHeader() }
            { this.props.columns.map(this.renderHeaderCell.bind(this)) }
            { this.renderActionsHeader() }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.props.items && this.props.items.map(this.renderItem.bind(this)) }
          { this.renderEmptyTableRow() }
          { this.renderLoading() }
        </Table.Body>
      </Table>
    );
  }

  /**
   * Renders the action button for the passed item and action.
   *
   * @param item
   * @param action
   * @param index
   *
   * @returns {*}
   */
  renderActionButton(item: any, index: number, action: Action) {
    // If the action specified its own render function, return the result of the function call
    if (action.render) {
      return action.render(item, index);
    }

    const actionButton = (
      <Button
        basic
        compact
        color={action.color}
        icon={action.icon}
        key={`${action.name}-${index}`}
        onClick={action.onClick && action.onClick.bind(this, item)}
        title={action.title}
      />
    );

    // Wrap the button in a popup if the action specifies a popup attribute
    if (action.popup) {
      const { content, title } = action.popup;

      return (
        <Popup
          content={content}
          header={title}
          hideOnScroll
          mouseEnterDelay={500}
          position='top right'
          trigger={actionButton}
        />
      );
    }

    // Otherwise, simply return the button
    return actionButton;
  }

  /**
   * Renders the actions for the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {null|*}
   */
  renderActions(item: any, index: number) {
    if (!(this.props.actions && this.props.actions.length)) {
      return null;
    }

    const actions = this.props.actions
      .filter((action) => !action.accept || action.accept(item))
      .map((action) => {
        let defaults = {};

        if (action.name === 'edit') {
          defaults = {
            popup: {
              title: i18n.t('DataTable.actions.edit.title'),
              content: i18n.t('DataTable.actions.edit.content')
            }
          };
        } else if (action.name === 'copy') {
          defaults = {
            popup: {
              title: i18n.t('DataTable.actions.copy.title'),
              content: i18n.t('DataTable.actions.copy.content')
            }
          };
        } else if (action.name === 'delete') {
          defaults = {
            popup: {
              title: i18n.t('DataTable.actions.delete.title'),
              content: i18n.t('DataTable.actions.delete.content')
            }
          };
        }

        return _.defaults(action, defaults);
      });

    return (
      <Table.Cell
        className='actions-cell'
        key={index}
      >
        { actions.map(this.renderActionButton.bind(this, item, index)) }
      </Table.Cell>
    );
  }

  /**
   * Renders the action list header.
   *
   * @returns {null|*}
   */
  renderActionsHeader() {
    if (!(this.props.actions && this.props.actions.length)) {
      return null;
    }

    return (
      <Table.HeaderCell>
        { i18n.t('DataTable.columns.actions') }
      </Table.HeaderCell>
    );
  }

  /**
   * Renders the table cell for the passed item/column.
   *
   * @param item
   * @param column
   *
   * @returns {*}
   */
  renderCell(item: any, column: Column) {
    if (column.hidden) {
      return null;
    }

    let value;

    if (column.render) {
      value = column.render(item);
    } else if (column.resolve) {
      value = column.resolve(item);
    } else {
      value = item[column.name];
    }

    return (
      <Table.Cell
        key={`${item.id}-${column.name}`}
        className={column.className}
      >
        { value }
      </Table.Cell>
    );
  }

  /**
   * Renders the empty table row.
   *
   * @returns {null|*}
   */
  renderEmptyTableRow() {
    if (this.props.loading || (this.props.items && this.props.items.length)) {
      return null;
    }

    if (this.props.renderEmptyRow) {
      return this.props.renderEmptyRow();
    }

    return (
      <Table.Row>
        <Table.Cell
          colSpan={this.getColumnCount()}
          textAlign='center'
        >
          <div className='empty-container'>
            { this.props.renderEmptyMessage() }
          </div>
        </Table.Cell>
      </Table.Row>
    );
  }

  /**
   * Renders the table header cell for the passed column.
   *
   * @param column
   *
   * @returns {*}
   */
  renderHeaderCell(column: Column) {
    if (column.hidden) {
      return null;
    }

    if (column.renderHeader) {
      return column.renderHeader();
    }

    return (
      <Ref
        innerRef={this.columnRefs[column.name]}
      >
        <Table.HeaderCell
          key={column.name}
          sorted={this.props.sortColumn === column.name ? this.props.sortDirection : null}
          onClick={this.props.onColumnClick.bind(this, column)}
        >
          { column.label }
          <ColumnResize
            onMouseDown={(e: MouseEvent) => {
              const columnRef = this.columnRefs[column.name];
              const offset = columnRef.current.offsetWidth - e.pageX;
              this.setState({ resize: { columnRef, offset } });
            }}
          />
        </Table.HeaderCell>
      </Ref>
    );
  }

  /**
   * Renders the table row for the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {*}
   */
  renderItem(item: any, index: number) {
    const children = [
      this.renderSelectCheckbox(item, index),
      this.props.columns.map(this.renderCell.bind(this, item)),
      this.renderActions(item, index)
    ];

    const handleCellClick = (e) => {
      // only target table cells, not action buttons or checkboxes, etc.
      if (e.target.nodeName === 'TD') {
        this.setState((state) => ({
          activePanel: state.activePanel === item.id ? '' : item.id
        }));
      }
    };

    if (this.props.renderItem) {
      return this.props.renderItem(item, index, children);
    }

    return (
      <>
        <Table.Row
          key={index}
          onClick={this.props.expandableRows ? handleCellClick : () => { }}
          className={this.props.expandableRows ? 'expandable' : ''}
        >
          { children }
        </Table.Row>
        { this.props.expandableRows && (
          <Table.Row
            className={this.state.activePanel === item.id ? 'expanded-panel' : 'hidden'}
          >
            { this.props.expandPanel && this.props.expandPanel(item, this.state.activePanel) }
          </Table.Row>
        )}
      </>
    );
  }

  renderLoading() {
    if (!this.props.loading) {
      return null;
    }

    return (
      <Table.Row>
        <Table.Cell
          colSpan={this.getColumnCount()}
          textAlign='center'
        >
          <Loader
            active
            content={i18n.t('DataTable.loading')}
            inline
          />
        </Table.Cell>
      </Table.Row>
    );
  }

  /**
   * Renders the select checkbox for the passed item.
   *
   * @returns {null|*}
   */
  renderSelectCheckbox(item, index) {
    if (!(this.props.selectable && this.props.onRowSelect && this.props.isRowSelected)) {
      return null;
    }

    return (
      <Table.Cell
        className='select-cell'
        key={`select-cell-${index}`}
      >
        <Checkbox
          onClick={this.props.onRowSelect.bind(this, item)}
          checked={this.props.isRowSelected(item)}
        />
      </Table.Cell>
    );
  }

  /**
   * Renders the select list header.
   *
   * @returns {null|*}
   */
  renderSelectHeader() {
    if (!this.props.selectable) {
      return null;
    }

    const allSelected = this.props.items
      && this.props.items.length
      && _.every(this.props.items, this.props.isRowSelected.bind(this));

    return (
      <Table.HeaderCell
        className='select-cell'
      >
        <Checkbox
          onClick={this.onSelectAll.bind(this, allSelected)}
          checked={allSelected}
        />
      </Table.HeaderCell>
    );
  }
}

DataTable.defaultProps = {
  actions: undefined,
  addButton: {
    location: 'top',
    color: 'green'
  },
  buttons: [],
  count: 0,
  className: '',
  expandableRows: false,
  expandPanel: undefined,
  filters: undefined,
  items: [],
  loading: false,
  modal: undefined,
  page: 1,
  pages: 1,
  onColumnClick: () => {},
  onCopy: undefined,
  onPageChange: () => {},
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  renderSearch: undefined,
  renderItem: undefined,
  showRecordCount: false,
  selectedRows: [],
  sortColumn: undefined,
  sortDirection: undefined,
};

export default useColumnSelector(useList(DataTable));

export type {
  Column
};
