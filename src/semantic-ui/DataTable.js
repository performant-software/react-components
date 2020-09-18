// @flow

import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import {
  Button, Checkbox,
  Confirm,
  Dropdown,
  Grid,
  Header,
  Icon,
  Menu,
  Pagination,
  Table
} from 'semantic-ui-react';
import { Trans, withTranslation } from 'react-i18next';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import createEditModal from './EditModal';
import Draggable from './Draggable';
import './DataTable.css';

type Action = {
  name: string
};

type Column = {
  label?: string,
  name: string,
  render?: () => void,
  renderHeader?: (item: any) => void,
  resolve?: (item: any) => void
};

type ListButton = {
  render: () => Component
};

type Props = {
  actions?: Array<Action>,
  addButton?: {
    location: string,
    color: string
  },
  buttons?: Array<ListButton>,
  className?: string,
  columns: Array<Column>,
  filters?: {
    active: boolean,
    component: Component<{}>,
    props?: any,
    state?: any,
    onChange: (params: any) => void
  },
  items?: ?Array<any>,
  loading?: boolean,
  modal?: {
    component: Component,
    props: any,
    state: any
  },
  page?: number,
  pages?: number,
  onColumnClick?: (column: Column) => void,
  onCopy?: (item: any) => any,
  onDelete: (item: any) => void,
  onPageChange?: () => void,
  onSave: (item: any) => void,
  renderDeleteModal?: ({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Component,
  renderEmptyRow?: () => void,
  renderItem?: (item: any, index: number) => Component,
  renderSearch?: () => Component,
  sortColumn?: string,
  sortDirection?: string,
  t: (key: string) => string,
  tableProps: any
};

type State = {
  modalDelete: boolean,
  modalEdit: boolean,
  modalFilter: boolean,
  selectedItem: any
};

class DataTable extends Component<Props, State> {
  /**
   * Constructs a new DataTable component.
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      columns: props.columns,
      modalDelete: false,
      modalEdit: false,
      modalFilter: false,
      selectedItem: null
    };
  }

  /**
   * Returns the actual column count. This will be the number of columns +1 if the table allows actions.
   *
   * @returns {number}
   */
  getColumnCount() {
    let columnCount = this.props.columns.length;

    if (this.props.actions.length) {
      columnCount += 1;
    }

    return columnCount;
  }

  /**
   * Displays the add/edit modal.
   */
  onAddButton() {
    this.setState({ modalEdit: true });
  }

  /**
   * Toggles the hidden property for the passed column.
   *
   * @param column
   */
  onColumnCheckbox(column) {
    this.setState((state) => ({
      columns: _.map(state.columns, (c) => (c.name === column.name ? { ...c, hidden: !c.hidden } : c))
    }));
  }

  /**
   * Copies the selected item and displays the add/edit modal.
   *
   * @param selectedItem
   */
  onCopyButton(selectedItem) {
    const copy = this.props.onCopy
      ? this.props.onCopy(selectedItem)
      : _.omit(selectedItem, 'id', 'uid');

    this.setState({ selectedItem: copy, modalEdit: true });
  }

  /**
   * Deletes the currently selected item and clears the state.
   *
   * @returns {*}
   */
  onDelete() {
    const { selectedItem } = this.state;
    this.setState({ selectedItem: null, modalDelete: false });

    return this.props.onDelete(selectedItem);
  }

  /**
   * Displays the delete confirmation modal for the selected item.
   *
   * @param selectedItem
   */
  onDeleteButton(selectedItem) {
    this.setState({ selectedItem, modalDelete: true });
  }

  /**
   * Drags/drops the column at the passed index to the new position.
   *
   * @param dragIndex
   * @param hoverIndex
   */
  onDrag(dragIndex: number, hoverIndex: number) {
    this.setState((state) => {
      const columns = [...state.columns];
      const column = columns[dragIndex];

      columns.splice(dragIndex, 1);
      columns.splice(hoverIndex, 0, column);

      return { columns };
    });
  }

  /**
   * Displays the add/edit modal for the selected item.
   *
   * @param selectedItem
   */
  onEditButton(selectedItem) {
    this.setState({ selectedItem, modalEdit: true });
  }

  /**
   * Opens the filters modal.
   */
  onFilterButton() {
    this.setState({ modalFilter: true });
  }

  /**
   * Saves the passed item and closes the add/edit modal.
   *
   * @param item
   *
   * @returns {*}
   */
  onSave(item) {
    return this.props
      .onSave(item)
      .then(() => this.setState({ modalEdit: false, selectedItem: null }));
  }

  /**
   * Calls the filters onChange prop and closes the modal.
   *
   * @param filters
   *
   * @returns {Q.Promise<any> | Promise<R> | Promise<any> | void | *}
   */
  onSaveFilter(filters) {
    return this.props.filters
      .onChange(filters)
      .then(() => this.setState({ modalFilter: false }));
  }

  /**
   * Renders the DataTable component.
   *
   * @returns {*}
   */
  render() {
    return (
      <DndProvider
        backend={Backend}
      >
        <div
          className={`data-table ${this.props.className}`}
        >
          { this.renderHeader() }
          <Table
            {...this.props.tableProps}
          >
            <Table.Header>
              <Table.Row>
                { this.state.columns.map(this.renderHeaderCell.bind(this)) }
                { this.renderActionsHeader() }
              </Table.Row>
            </Table.Header>
            <Table.Body>
              { this.props.items && this.props.items.map(this.renderItem.bind(this)) }
              { this.renderEmptyTableRow() }
            </Table.Body>
          </Table>
          { this.renderFooter() }
          { this.renderEditModal() }
          { this.renderDeleteModal() }
          { this.renderFilterModal() }
        </div>
      </DndProvider>
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
  renderActionButton(item, index, action) {
    if (action.render) {
      return action.render(item, index);
    }

    return (
      <Button
        basic
        compact
        color={action.color}
        icon={action.icon}
        key={`${action.name}-${index}`}
        onClick={action.onClick.bind(this, item)}
        title={action.title || action.name}
      />
    );
  }

  /**
   * Renders the actions for the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {null|*}
   */
  renderActions(item, index) {
    if (!(this.props.actions && this.props.actions.length)) {
      return null;
    }

    const actions = this.props.actions
      .filter((action) => !action.accept || action.accept(item))
      .map((action) => {
        if (action.name === 'edit') {
          return { ...action, icon: 'edit outline', onClick: this.onEditButton.bind(this) };
        }

        if (action.name === 'copy') {
          return { ...action, icon: 'copy outline', onClick: this.onCopyButton.bind(this) };
        }

        if (action.name === 'delete') {
          return { ...action, icon: 'times circle outline', onClick: this.onDeleteButton.bind(this) };
        }

        return action;
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
   * Renders the add button.
   *
   * @returns {*}
   */
  renderAddButton() {
    if (!(this.props.addButton && this.props.modal)) {
      return null;
    }

    return (
      <Button
        basic
        color={this.props.addButton.color}
        onClick={this.onAddButton.bind(this)}
      >
        <Icon name='plus' />
        { i18n.t('DataTable.buttons.add') }
      </Button>
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
  renderCell(item, column) {
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
   * Renders the list configuration button.
   *
   * @returns {*}
   */
  renderConfigureButton() {
    return (
      <Dropdown
        basic
        button
        icon='cog'
        className='icon configure-button'
        simple
      >
        <Dropdown.Menu>
          { this.state.columns.map((c, index) => (
            <Draggable
              id={c.name}
              index={index}
              key={c.name}
              onDrag={this.onDrag.bind(this)}
            >
              <Dropdown.Item>
                <Icon
                  name='bars'
                />
                <Checkbox
                  checked={!c.hidden}
                  label={c.label}
                  onClick={this.onColumnCheckbox.bind(this)}
                />
              </Dropdown.Item>
            </Draggable>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  /**
   * Renders the copy button for the passed item.
   *
   * @param item
   *
   * @returns {null|*}
   */
  renderCopyButton(item) {
    const action = _.findWhere(this.props.actions, { name: 'copy' });

    if (!action) {
      return null;
    }

    if (action.render) {
      return action.render(item);
    }

    return (
      <Button
        basic
        compact
        icon='copy outline'
        onClick={this.onCopyButton.bind(this, item)}
      />
    );
  }

  /**
   * Renders the delete button for the passed item.
   *
   * @param item
   *
   * @returns {null|*}
   */
  renderDeleteButton(item) {
    const action = _.findWhere(this.props.actions, { name: 'delete' });

    if (!action) {
      return null;
    }

    if (action.render) {
      return action.render(item);
    }

    return (
      <Button
        basic
        compact
        icon='times circle outline'
        onClick={this.onDeleteButton.bind(this, item)}
      />
    );
  }

  /**
   * Renders the delete modal if visible.
   *
   * @returns {null|*}
   */
  renderDeleteModal() {
    if (!this.state.modalDelete) {
      return null;
    }

    const { selectedItem } = this.state;
    const onCancel = () => this.setState({ selectedItem: null, modalDelete: false });
    const onConfirm = this.onDelete.bind(this);

    if (this.props.renderDeleteModal) {
      return this.props.renderDeleteModal({ selectedItem, onConfirm, onCancel });
    }

    return (
      <Confirm
        content={i18n.t('DataTable.deleteContent')}
        header={<Header icon='trash alternate outline' content={i18n.t('DataTable.deleteHeader')} />}
        onCancel={onCancel}
        onConfirm={onConfirm}
        open
      />
    );
  }

  /**
   * Renders the edit button for the passed item.
   *
   * @param item
   *
   * @returns {null|*}
   */
  renderEditButton(item) {
    const action = _.findWhere(this.props.actions, { name: 'edit' });

    if (!action) {
      return null;
    }

    if (action.render) {
      return action.render(item);
    }

    return (
      <Button
        basic
        compact
        icon='edit outline'
        onClick={this.onEditButton.bind(this, item)}
      />
    );
  }

  /**
   * Renders the edit modal if visible.
   *
   * @returns {null|*}
   */
  renderEditModal() {
    if (!this.props.modal || !this.state.modalEdit) {
      return null;
    }

    const { component, props, state } = this.props.modal;
    const EditModal = withTranslation()(createEditModal(component, props, state));

    return (
      <EditModal
        onClose={() => this.setState({ selectedItem: null, modalEdit: false })}
        onSave={this.onSave.bind(this)}
        item={this.state.selectedItem}
      />
    );
  }

  /**
   * Renders the empty message text/component. The message content is based on whether or not records can be added
   * to this data table.
   *
   * @returns {*}
   */
  renderEmptyMessage() {
    if (!(this.props.addButton && this.props.modal)) {
      return i18n.t('DataTable.emptyList');
    }

    return (
      <Trans i18nKey='DataTable.emptyListAdd'>
        You haven&apos;t added any yet. Click
        <div className='empty-button'>
          { this.renderAddButton() }
        </div>
        to get started.
      </Trans>
    );
  }

  /**
   * Renders the empty table row.
   *
   * @returns {null|*}
   */
  renderEmptyTableRow() {
    if (this.props.items.length) {
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
            { this.renderEmptyMessage() }
          </div>
        </Table.Cell>
      </Table.Row>
    );
  }

  /**
   * Renders the filter button component.
   *
   * @returns {null|*}
   */
  renderFilterButton() {
    if (!(this.props.filters && this.props.filters.component)) {
      return null;
    }

    return (
      <Button
        active={this.props.filters.active}
        basic
        icon='filter'
        onClick={this.onFilterButton.bind(this)}
      />
    );
  }

  /**
   * Renders the filter modal if visible.
   *
   * @returns {null|*}
   */
  renderFilterModal() {
    if (!this.props.filters || !this.state.modalFilter) {
      return null;
    }

    const { component, props, state } = this.props.filters;
    const FilterModal = withTranslation()(createEditModal(component, props, state));

    return (
      <FilterModal
        onClose={() => this.setState({ modalFilter: false })}
        onSave={this.onSaveFilter.bind(this)}
      />
    );
  }

  /**
   * Renders the table footer.
   *
   * @returns {null|*}
   */
  renderFooter() {
    if (!(this.props.addButton.location === 'bottom' || this.props.pages)) {
      return null;
    }

    return (
      <div className='footer'>
        <Grid
          columns={2}
        >
          <Grid.Column
            textAlign='left'
          >
            { this.props.addButton.location === 'bottom' && this.renderAddButton() }
            { this.props.buttons.map((button) => button.render()) }
          </Grid.Column>
          <Grid.Column
            textAlign='right'
          >
            { this.renderPagination() }
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  /**
   * Renders the table header.
   *
   * @returns {null|*}
   */
  renderHeader() {
    if (!(this.props.addButton.location === 'top' || this.props.page)) {
      return null;
    }

    return (
      <div
        className='header'
      >
        <Grid
          columns={2}
          verticalAlign='bottom'
        >
          <Grid.Column
            textAlign='left'
          >
            { this.props.addButton.location === 'top' && this.renderAddButton() }
            { this.props.buttons.map((button, index) => button.render(index)) }
          </Grid.Column>
          <Grid.Column
            textAlign='right'
          >
            <Menu
              compact
              borderless
              secondary
            >
              <Menu.Menu>
                { this.renderConfigureButton() }
              </Menu.Menu>
              <Menu.Menu>
                { this.renderFilterButton() }
              </Menu.Menu>
              <Menu.Menu>
                { this.props.renderSearch && this.props.renderSearch() }
              </Menu.Menu>
            </Menu>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  /**
   * Renders the table header cell for the passed column.
   *
   * @param column
   *
   * @returns {*}
   */
  renderHeaderCell(column) {
    if (column.hidden) {
      return null;
    }

    if (column.renderHeader) {
      return column.renderHeader();
    }

    return (
      <Table.HeaderCell
        key={column.name}
        sorted={this.props.sortColumn === column.name ? this.props.sortDirection : null}
        onClick={this.props.onColumnClick.bind(this, column)}
      >
        { column.label }
      </Table.HeaderCell>
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
  renderItem(item, index) {
    const children = [
      this.state.columns.map(this.renderCell.bind(this, item)),
      this.renderActions(item, index)
    ];

    if (this.props.renderItem) {
      return this.props.renderItem(item, index, children);
    }

    return (
      <Table.Row
        key={index}
      >
        { children }
      </Table.Row>
    );
  }

  /**
   * Renders the pagination component.
   *
   * @returns {null|*}
   */
  renderPagination() {
    if (this.props.pages <= 1) {
      return null;
    }

    return (
      <Pagination
        activePage={this.props.page}
        firstItem={null}
        lastItem={null}
        onPageChange={this.props.onPageChange.bind(this)}
        size='mini'
        totalPages={this.props.pages}
      />
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
  className: '',
  filters: undefined,
  items: [],
  loading: false,
  modal: undefined,
  page: null,
  pages: null,
  onColumnClick: () => {},
  onCopy: undefined,
  onPageChange: () => {},
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  renderSearch: undefined,
  renderItem: undefined,
  sortColumn: undefined,
  sortDirection: undefined
};

export default DataTable;
