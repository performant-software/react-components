// @flow

import React, { Component } from 'react';
import { Input, Message } from 'semantic-ui-react';
import _ from 'underscore';
import DataTable from './DataTable';
import Toaster from './Toaster';
import i18n from '../i18n/i18n';
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
  sortable: boolean,
  sortDirection: string
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
    component: Component<{}>,
    props: any,
    state: any
  },
  onCopy?: (item: any) => any,
  onDelete: (item: any) => Promise<any>,
  onDeleteAll: () => Promise<any>,
  onLoad: (page: number) => Promise<any>,
  onSave: (item: any) => Promise<any>,
  polling?: number,
  renderDeleteModal?: ({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Component<{}>,
  renderEmptyRow?: () => void,
  saved?: boolean,
  searchable?: boolean
};

type State = {
  filters: any,
  loading: boolean,
  page: number,
  pages: number,
  saved: boolean,
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
  pollingInterval: IntervalID;

  /**
   * Constructs a new ListTable component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      filters: (props.filters && props.filters.props) || {},
      loading: false,
      page: 1,
      pages: 1,
      saved: props.saved || false,
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

    if (this.props.polling) {
      this.pollingInterval = setInterval(this.fetchData.bind(this), this.props.polling);
    }
  }

  componentWillUnmount() {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
    }
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
   * Resets the state and reloads the data.
   */
  afterDeleteAll() {
    this.setState({ page: 1 }, this.fetchData.bind(this));
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

      const filterKeys = _.keys((this.props.filters && this.props.filters.props) || {});
      const filters = _.pick(this.state.filters, filterKeys);

      const params = {
        ...filters,
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
   * Returns true if the current filters do not match the default filters.
   *
   * @returns {boolean}
   */
  isFilterActive() {
    if (!(this.props.filters && this.props.filters.props)) {
      return false;
    }

    const { props } = this.props.filters || {};
    return !_.isEqual(_.pick(this.state.filters, _.keys(props)), props);
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

    /**
     * If the column has not yet been click-sorted, check to see if there is a default sort
     * direction on the column. Otherwise, toggle the sort direction on the state.
     */
    if (column.sortDirection) {
      sortDirection = column.sortDirection;
    } else if (column.name === this.state.sortColumn) {
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
   * Deletes all the records and resets the state.
   *
   * @returns {Q.Promise<any> | Promise<R> | Promise<any> | void | *}
   */
  onDeleteAll() {
    return this.props
      .onDeleteAll()
      .then(this.afterDeleteAll.bind(this));
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
      this.setState({ filters, page: 1 }, () => {
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
      .then(() => this.setState({ saved: true }, this.fetchData.bind(this)));
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
      <>
        <DataTable
          actions={this.props.actions}
          addButton={this.props.addButton}
          buttons={this.props.buttons}
          className={this.props.className}
          columns={this.props.columns}
          configurable={this.props.configurable}
          deleteButton={this.props.deleteButton}
          filters={{
            active: this.isFilterActive(),
            component: this.props.filters && this.props.filters.component,
            onChange: this.onFilterChange.bind(this),
            props: {
              item: this.state.filters
            }
          }}
          items={this.state.items}
          loading={this.state.loading}
          modal={this.props.modal}
          page={this.state.page}
          pages={this.state.pages}
          onColumnClick={this.onColumnClick.bind(this)}
          onCopy={this.props.onCopy}
          onDelete={this.onDelete.bind(this)}
          onDeleteAll={this.onDeleteAll.bind(this)}
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
        { this.state.saved && (
          <Toaster
            onDismiss={() => this.setState({ saved: false })}
            type={Toaster.MessageTypes.positive}
          >
            <Message.Header
              content={i18n.t('Common.messages.save.header')}
            />
            <Message.Content
              content={i18n.t('Common.messages.save.content')}
            />
          </Toaster>
        )}
      </>
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
  configurable: true,
  filters: {},
  onCopy: undefined,
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  searchable: true
};

export default ListTable;
