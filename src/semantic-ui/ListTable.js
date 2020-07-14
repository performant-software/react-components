// @flow

import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import _ from 'underscore';
import DataTable from './DataTable';
import Timer from '../utils/Timer';
import './ListTable.css';

type Action = {
  name: string
};

type Column = {
  label?: string,
  name: string,
  render?: () => void,
  renderHeader?: (item: any) => void,
  resolve?: (item: any) => void,
  sortable: boolean
};

type Props = {
  actions: Array<Action>,
  className?: string,
  collectionName: string,
  columns: Array<Column>,
  filters?: {
    component: Component<{}>,
    props: any
  },
  modal: {
    component: Component,
    props: any,
    state: any
  },
  onCopy?: (item: any) => any,
  onDelete: (item: any) => void,
  onLoad: (page: number) => void,
  onSave: (item: any) => void,
  renderDeleteModal?: ({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Component,
  renderEmptyRow?: () => void,
  searchable?: boolean
};

type State = {
  filters: any,
  loading: boolean,
  page: number,
  pages: number,
  search: string,
  sortColumn: string,
  sortDirection: string
};

const SORT_ASCENDING = 'ascending';
const SORT_DESCENDING = 'descending';

/**
 * The ListTable component can be used to display data fetched from a remote source (i.e an API) in a
 * tabular format. The ListTable also provides controls for adding new records, editing existing records,
 * and deleting records. Records displayed in the component will always be fetched from the remote source.
 */
class ListTable extends Component<Props, State> {
  /**
   * Constructs a new ListTable component.
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      filters: (props.filters && props.filters.props) || {},
      loading: false,
      page: 1,
      pages: 1,
      search: null,
      sortColumn: null,
      sortDirection: null
    };
  }

  /**
   * Loads the data.
   */
  componentDidMount() {
    this.onColumnClick(_.first(this.props.columns));
  }

  /**
   * If we're deleting the last item on the page, decrement the page number and fetch the data. Otherwise,
   * just fetch the data for the current page.
   *
   * @returns {void|*}
   */
  afterDelete() {
    if (this.state.items.length === 1) {
      return this.setState((state) => ({
        page: (state.page - 1) > 1 ? state.page - 1 : 1
      }), this.fetchData.bind(this));
    }

    return this.fetchData();
  }

  /**
   * Loads the data and sets it on the state.
   */
  fetchData() {
    this.setState({ loading: true }, () => {
      const {
        page,
        search,
        sortColumn,
        sortDirection
      } = this.state;

      const params = {
        ...this.state.filters,
        page,
        search,
        sort_by: sortColumn,
        sort_direction: sortDirection
      };

      this.props
        .onLoad(params)
        .then(({ data }) => {
          const items = data[this.props.collectionName];
          const { pages } = data.list;

          this.setState({
            items,
            page,
            pages,
            loading: false
          });
        });
    });
  }

  /**
   * Sets the sort column and direction for the passed column and reloads the data.
   *
   * @param column
   */
  onColumnClick(column) {
    if (!column.sortable) {
      return;
    }

    const sortColumn = column.name;
    let sortDirection = SORT_ASCENDING;

    if (column.name === this.state.sortColumn) {
      sortDirection = this.state.sortDirection === SORT_ASCENDING ? SORT_DESCENDING : SORT_ASCENDING;
    }

    this.setState({ sortColumn, sortDirection }, this.fetchData.bind(this));
  }

  /**
   * Deletes the currently selected item, resets the state, and reloads the data.
   *
   * @param selectedItem
   *
   * @returns {*}
   */
  onDelete(selectedItem) {
    return this.props
      .onDelete(selectedItem)
      .then(this.afterDelete.bind(this));
  }

  /**
   * Sets the filters on the state and returns a promise.
   *
   * @param filters
   *
   * @returns {Promise<R>}
   */
  onFilterChange(filters) {
    return new Promise((resolve) => {
      this.setState({ filters }, () => {
        this.fetchData();
        resolve();
      });
    });
  }

  /**
   * Sets the page number and reloads the data.
   *
   * @param e
   * @param activePage
   */
  onPageChange(e, { activePage }) {
    this.setState({ page: activePage }, this.fetchData.bind(this));
  }

  /**
   * Saves the passed item, resets the state, and reloads the data.
   *
   * @param item
   */
  onSave(item) {
    return this.props
      .onSave(item)
      .then(this.fetchData.bind(this));
  }

  /**
   * Resets the page to "1" and executes the search.
   */
  onSearch() {
    this.setState({ page: 1 }, this.fetchData.bind(this));
  }

  /**
   * Sets the passed search value on the state.
   *
   * @param e
   * @param value
   */
  onSearchChange(e, { value }) {
    this.setState({ search: value });
  }

  /**
   * Renders the ListTable component.
   *
   * @returns {*}
   */
  render() {
    return (
      <DataTable
        actions={this.props.actions}
        className={this.props.className}
        columns={this.props.columns}
        filters={{
          active: !_.isEqual(this.state.filters, this.props.filters.props || {}),
          component: this.props.filters.component,
          onChange: this.onFilterChange.bind(this),
          state: this.state.filters
        }}
        items={this.state.items}
        loading={this.state.loading}
        modal={this.props.modal}
        page={this.state.page}
        pages={this.state.pages}
        onColumnClick={this.onColumnClick.bind(this)}
        onCopy={this.props.onCopy}
        onDelete={this.onDelete.bind(this)}
        onPageChange={this.onPageChange.bind(this)}
        onSave={this.onSave.bind(this)}
        renderDeleteModal={this.props.renderDeleteModal}
        renderEmptyRow={this.props.renderEmptyRow}
        renderSearch={this.renderSearch.bind(this)}
        sortColumn={this.state.sortColumn}
        sortDirection={this.state.sortDirection}
        tableProps={{
          celled: true,
          sortable: true
        }}
      />
    );
  }

  /**
   * Renders the search input component.
   *
   * @returns {*}
   */
  renderSearch() {
    if (!this.props.searchable) {
      return null;
    }

    return (
      <Input
        type='text'
        icon='search'
        input={{
          'aria-label': 'search'
        }}
        loading={this.state.loading}
        onKeyDown={Timer.clearSearchTimer.bind(this)}
        onKeyUp={Timer.setSearchTimer.bind(this, this.onSearch.bind(this))}
        onChange={this.onSearchChange.bind(this)}
        size='small'
        value={this.state.searchQuery}
      />
    );
  }
}

ListTable.defaultProps = {
  className: '',
  filters: undefined,
  onCopy: undefined,
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  searchable: true
};

export default ListTable;
