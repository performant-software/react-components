// @flow

import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import { Table } from 'semantic-ui-react';
import uuid from 'uuid';
import _ from 'underscore';
import DataTable from './DataTable';
import DraggableRow from './DraggableRow';
import './EmbeddedList.css';

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
  actions: Array<Action>,
  addButton?: {
    location: string,
    color: string
  },
  buttons?: Array<ListButton>,
  className?: string,
  columns: Array<Column>,
  items: ?Array<any>,
  modal?: {
    component: Component,
    props: any,
    state: any
  },
  onCopy?: (item: any) => any,
  onDelete: (item: any) => void,
  onDrag?: (dragIndex: number, hoverIndex: number) => void,
  onSave?: (item: any) => void,
  renderDeleteModal?: ({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => void,
  renderEmptyRow?: () => void
};

type State = {
  modalDelete: boolean,
  modalEdit: boolean,
  selectedItem: any
};

const PATH_DELIMITER = '.';
const SORT_ASCENDING = 'ascending';
const SORT_DESCENDING = 'descending';

/**
 * The EmbeddedList component can be used to display a collection of records that live within a parent object. This is
 * especially useful when the collection is to be saved at the same time as the parent.
 */
class EmbeddedList extends Component<Props, State> {
  /**
   * Constructs a new EmbeddedList component.
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      sortColumn: null,
      sortDirection: null
    };
  }

  /**
   * Sorts the table by the first column.
   */
  componentDidMount() {
    this.onColumnClick(_.first(this.props.columns));
  }

  /**
   * Returns the sorted, filtered list of items.
   *
   * @returns {*}
   */
  getItems() {
    const { items } = this.props;
    const { sortColumn, sortDirection } = this.state;

    return _.orderBy(_.filter(items, (item) => !item._destroy), sortColumn, sortDirection);
  }

  /**
   * Sorts the table by the passed column.
   *
   * @param column
   */
  onColumnClick(column) {
    /**
     * We'll disable the column sorting if the table rows are draggable. Making the table rows draggable implies
     * that the sorting will be done manually. Allowing column click sorting could make things confusing.
     */
    if (this.props.onDrag) {
      return;
    }

    const sortColumn = column.name;
    let sortDirection = SORT_ASCENDING;

    if (column.name === this.state.sortColumn) {
      sortDirection = this.state.sortDirection === SORT_ASCENDING ? SORT_DESCENDING : SORT_ASCENDING;
    }

    this.setState({ sortColumn, sortDirection });
  }

  /**
   * Deletes the passed item. This function returns a promise so that calls can be chained together.
   *
   * @param item
   *
   * @returns {Promise}
   */
  onDelete(item) {
    this.props.onDelete(item);
    return Promise.resolve();
  }

  /**
   * Saves the passed item, resets the state, and reloads the data. This function returns a promise so that calls can
   * be chained together.
   *
   * @param item
   *
   * @returns {Promise}
   */
  onSave(item) {
    const uid = item.uid ? item.uid : uuid.v4();
    this.props.onSave({ ...item, uid });

    return Promise.resolve();
  }

  /**
   * Renders the EmbeddedList component.
   *
   * @returns {*}
   */
  render() {
    return (
      <DndProvider backend={Backend}>
        <DataTable
          actions={this.props.actions}
          addButton={this.props.addButton}
          buttons={this.props.buttons}
          className={`embedded-list ${this.props.className}`}
          columns={this.props.columns}
          items={this.getItems()}
          modal={this.props.modal}
          onColumnClick={this.onColumnClick.bind(this)}
          onCopy={this.props.onCopy}
          onDrag={this.props.onDrag}
          onDelete={this.onDelete.bind(this)}
          onSave={this.onSave.bind(this)}
          renderDeleteModal={this.props.renderDeleteModal}
          renderEmptyRow={this.props.renderEmptyRow}
          renderItem={this.renderItem.bind(this)}
          sortColumn={this.state.sortColumn}
          sortDirection={this.state.sortDirection}
          tableProps={{
            celled: true,
            sortable: !this.props.onDrag
          }}
        />
      </DndProvider>
    );
  }

  /**
   * Renders the passed item. This function should be used if the table row is draggable.
   *
   * @param item
   * @param index
   * @param children
   *
   * @returns {*}
   */
  renderItem(item, index, children) {
    if (this.props.onDrag) {
      // Since the item may not be saved yet, we'll look for the ID or UID columns as the key. This is necessary to
      // maintain the correct element when dragging.
      const key = item.id || item.uid;

      return (
        <DraggableRow
          id={key}
          index={index}
          item={item}
          key={key}
          onDrag={this.props.onDrag.bind(this)}
        >
          { children }
        </DraggableRow>
      );
    }

    return (
      <Table.Row
        key={index}
      >
        { children }
      </Table.Row>
    );
  }
}

/**
 * UnderscoreJS mixin to allow sorting by a property string (i.e. "person.name") and a sort
 * direction ("ascending" or "descending").
 */
_.mixin({
  orderBy: (items, property, direction) => {
    if (!property) {
      return items;
    }

    const sortProperty = _.property(property.split(PATH_DELIMITER));
    let ordered = _.sortBy(items, (item) => sortProperty(item));

    if (direction === SORT_DESCENDING) {
      ordered = ordered.reverse();
    }

    return ordered;
  }
});

EmbeddedList.defaultProps = {
  addButton: {
    location: 'bottom'
  },
  buttons: [],
  className: '',
  modal: undefined,
  onCopy: undefined,
  onDrag: undefined,
  onSave: () => {},
  renderDeleteModal: undefined,
  renderEmptyRow: undefined
};

export default EmbeddedList;
