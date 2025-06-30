// @flow

import { ObjectJs as ObjectUtils, Timer } from '@performant-software/shared-components';
import React, { Component, type ComponentType } from 'react';
import uuid from 'react-uuid';
import _ from 'underscore';
import { Icon, Input, Message } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import ListSessionUtils from '../utils/ListSession';
import Toaster from './Toaster';

type Props = {
  /**
   * Name of the collection to retrieve from the API response.
   */
  collectionName: string,

  /**
   * The default number of records to display on a single page.
   */
  defaultPerPage?: number,

  /**
   * The default value for the search input element.
   */
  defaultSearch?: string,

  /**
   * The default value to use for sorting the list.
   */
  defaultSort?: string,

  /**
   * The default direction in which to sort the list.
   */
  defaultSortDirection?: string,

  /**
   * If provided, the passed <code>component</code> will be rendered when the filter button is clicked.
   * <br />
   * <br />
   *
   * Values passed in the <code>defaults</code> and <code>props</code> properties will be made available in the
   * passed component.
   * <br />
   * <br />
   *
   * The <code>onChange</code> callback will fire when the filters are modified. This action will also reload the list,
   * passing the new filters the <code>onLoad</code> callback.
   */
  filters?: {
    component: ComponentType<any>,
    defaults?: any,
    props?: any,
    onChange?: (filter: any) => Promise<any>,
    showLabels?: boolean
  },

  /**
   * Callback fired when the "delete" action is clicked.
   * @param item
   */
  onDelete?: (item: any) => Promise<any>,

  /**
   * Callback fired when the "delete all" action is clicked. This action is typically renedered in the header and will
   * apply to every item in the list.
   */
  onDeleteAll?: () => Promise<any>,

  /**
   * Callback fired when loading the list of items from an API. This callback is fired any time the list changes.
   */
  onLoad: (params: any) => Promise<any>,

  /**
   * Callback fired when an item is saved via the add/edit modal.
   */
  onSave?: (item: any) => Promise<any>,

  /**
   * The numeric list of options to allow the user to select for the number of records to display per page.
   */
  perPageOptions?: Array<number>,

  /**
   * If provided, the <code>onLoad</code> callback will fire after a timeout of the passed number of milliseconds. This
   * can be useful in order to show progress (file upload, download, etc) that must be retrieved from the server.
   */
  polling?: number,

  /**
   * Callback fired when an error occurs. The passed error can take any form and is up to the consuming component to
   * interpret. The return value should be an array of user-friendly error messages.
   */
  resolveErrors?: (error: any) => Array<string>,

  /**
   * Used to inform the list that an external save has taken place. When set to <code>true</code>, a success toaster
   * will display.
   */
  saved?: boolean,

  /**
   * If <code>true</code>, this component will render a search input element in the list header.
   */
  searchable?: boolean,

  /**
   * If provided, list properties (page number, columns, filters, etc) will be stored in the passed storage element
   * and rehydrated each time the component is mounted. This is useful in order to persist filters, searches, and
   * other properties when a user navigates away from the list.
   */
  session?: {
    key: string,
    storage: typeof sessionStorage
  }
};

type State = {
  count: number,
  error: ?any,
  filters: any,
  items: Array<any>,
  loading: boolean,
  page: number,
  pages: number,
  perPage: number,
  saved: boolean,
  search: ?string,
  sortColumn: ?string,
  sortDirection: ?string
};

const SORT_ASCENDING = 'ascending';
const SORT_DESCENDING = 'descending';

/**
 * Returns a function to wrap the passed component as a DataList. The DataList component is intended to be used to load
 * records from an API and display them using the wrapped component. This HOC will handle calling the API, pagination,
 * storing search, filters, and sorting.
 *
 * @param WrappedComponent
 */
const useDataList = (WrappedComponent: ComponentType<any>) => (
  class extends Component<Props, State> {
    // Default props
    static defaultProps = {
      filters: {},
      searchable: true
    };

    // Polling
    pollingInterval: any;

    /**
     * Constructs a new DataList component.
     *
     * @param props
     */
    constructor(props: Props) {
      super(props);

      this.state = this.initializeState(props);
    }

    /**
     * Sets up the polling interval.
     */
    componentDidMount() {
      if (this.props.polling) {
        this.pollingInterval = setInterval(this.fetchData.bind(this), this.props.polling);
      }
    }

    /**
     * Sets the saved prop on the state (if changed) and fetches the data. This can provide as a way to manually toggle
     * a save event outside of the DataList context.
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps: Props) {
      if (prevProps.saved !== this.props.saved && this.props.saved) {
        this.setState({ saved: this.props.saved }, this.fetchData.bind(this));
      }
    }

    /**
     * Tears down the polling interval.
     */
    componentWillUnmount() {
      if (this.pollingInterval) {
        clearInterval(this.pollingInterval);
      }
    }

    /**
     * Resets the page number and reloads the data.
     *
     * @returns {void|any|Promise<State>}
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
     * Resets the page number and reloads the data.
     */
    afterDeleteAll() {
      this.setState({ page: 1 }, this.fetchData.bind(this));
    }

    /**
     * Calls the onLoad prop to populate the array of items in the state.
     */
    fetchData() {
      // Store the session information before fetching the data.
      this.setSession();

      // Set the loading indicator and fetch the data.
      this.setState({ loading: true }, () => {
        const {
          page,
          perPage,
          search,
          sortColumn,
          sortDirection
        } = this.state;

        const params = {
          ...this.state.filters,
          page,
          search,
          per_page: perPage,
          sort_by: sortColumn,
          sort_direction: sortDirection
        };

        this.props
          .onLoad(params)
          .then(({ data }) => {
            const items = data[this.props.collectionName];
            const { pages, count } = data.list;

            this.setState({
              count,
              items,
              page,
              pages,
              loading: false
            });
          });
      });
    }

    /**
     * Returns the default filters from the "filter" prop. This method will merge the default filter with the actual
     * filter and assign a UID value.
     *
     * @param props
     *
     * @returns {{filters: []}}
     */
    getDefaultFilters(props) {
      const filters = [];

      if (props.filters && props.filters.defaults) {
        _.each(props.filters.defaults.filters, (f) => {
          const filter = _.findWhere(props.filters.props.filters, { key: f.key });

          if (filter) {
            filters.push(this.onCreateFilter({ ...filter, ...f }));
          }
        });
      }

      return { filters };
    }

    /**
     * Initializes the state based on the passed props.
     *
     * @param props

     * @returns {{search: string, sortColumn: string, sortDirection: string, pages: number, perPage: (number|*),
     * saved: boolean, count: number, filters: (*|{}), page: number, error: null, loading: boolean, items: *[]}}
     */
    initializeState(props: Props) {
      const { key, storage } = props.session || {};
      const session = ListSessionUtils.restoreSession(key, storage) || {};

      const filters = session.filters || this.getDefaultFilters(props);
      const page = session.page || 1;
      const perPage = session.perPage || props.defaultPerPage || _.first(props.perPageOptions);
      const search = session.search || props.defaultSearch || null;
      const sortColumn = session.sortColumn || props.defaultSort || null;
      const sortDirection = session.sortDirection || props.defaultSortDirection || null;

      return {
        count: 0,
        error: null,
        filters,
        items: [],
        loading: false,
        page,
        pages: 1,
        perPage,
        saved: props.saved || false,
        search,
        sortColumn,
        sortDirection
      };
    }

    /**
     * Returns true if any filters have been set.
     *
     * @returns {boolean}
     */
    isFilterActive() {
      let isActive = false;

      _.each(_.values(this.state.filters), (value) => {
        if (!ObjectUtils.isEmpty(value)) {
          isActive = true;
        }
      });

      return isActive;
    }

    /**
     * Clears the existing search.
     *
     * @param e
     */
    onClearSearch(e) {
      // Clear the current search
      this.onSearchChange(e, { value: '' });

      // Focus on the search input
      this.searchRef?.inputRef?.current?.focus();

      // Set the timer to execute a new search
      this.onSearch();
    }

    /**
     * Returns the passed filter with a "uid" property assigned.
     *
     * @param filter
     *
     * @returns {*&{uid: string}}
     */
    onCreateFilter(filter) {
      return {
        ...filter,
        uid: uuid()
      };
    }

    /**
     * Calls the onDelete prop.
     *
     * @param selectedItem
     *
     * @returns {Q.Promise<any> | Promise<R> | Promise<any> | void | *}
     */
    onDelete(selectedItem: any) {
      if (!this.props.onDelete) {
        return Promise.resolve();
      }

      return this.props
        .onDelete(selectedItem)
        .then(this.afterDelete.bind(this))
        .catch(this.onError.bind(this));
    }

    /**
     * Calls the onDeleteAll prop.
     *
     * @returns {Q.Promise<any> | Promise<R> | Promise<any> | void | *}
     */
    onDeleteAll() {
      if (!this.props.onDeleteAll) {
        return Promise.resolve();
      }

      return this.props
        .onDeleteAll()
        .then(this.afterDeleteAll.bind(this));
    }

    /**
     * Sets the error on the state if the component is configured to display errors.
     *
     * @param error
     *
     * @returns {*|void|Promise<State>}
     */
    onError(error: any) {
      return this.props.resolveErrors && this.setState({ error });
    }

    /**
     * Updates the state with the passed filters.
     *
     * @param filters
     *
     * @returns {Promise<R>}
     */
    onFilterChange(filters: any) {
      return new Promise<void>((resolve) => {
        // Call the custom onChange prop
        if (this.props.filters && this.props.filters.onChange) {
          this.props.filters.onChange(filters);
        }

        // Set the filters and re-fetch the data
        this.setState({ filters, page: 1 }, () => {
          this.fetchData();
          resolve();
        });
      });
    }

    /**
     * When no columns are sortable, load data as is
     *
     */
    onInit(page?: number = 1) {
      this.setState({ sortColumn: '', sortDirection: '', page }, this.fetchData.bind(this));
    }

    /**
     * Sets the new active page and reloads the data.
     *
     * @param e
     * @param activePage
     */
    onPageChange(e: Event, { activePage }: { activePage: number }) {
      this.setState({ page: activePage }, this.fetchData.bind(this));
    }

    /**
     * Sets the perPage value and reloads the data.
     *
     * @param e
     * @param value
     */
    onPerPageChange(e: Event, { value }: { value: number }) {
      this.setState({ perPage: value }, this.fetchData.bind(this));
    }

    /**
     * Calls the onSave prop and reloads the data.
     *
     * @param item
     *
     * @returns {Q.Promise<any> | Promise<R> | Promise<any> | void | *}
     */
    onSave(item: any) {
      if (!this.props.onSave) {
        return Promise.resolve();
      }

      return Promise.resolve(this.props.onSave(item))
        .then(() => this.setState({ saved: true }, this.fetchData.bind(this)));
    }

    /**
     * Resets the page and reloads the data.
     */
    onSearch() {
      this.setState({ page: 1 }, this.fetchData.bind(this));
    }

    /**
     * Updates the search value on the state.
     *
     * @param e
     * @param value
     */
    onSearchChange(e: Event, { value }: { value: any }) {
      this.setState({ search: value });
    }

    /**
     * Updates the sortColumn and sortDirection props on the state.
     *
     * @param sortColumn
     * @param direction
     * @param page
     */
    onSort(sortColumn: string, direction?: string, page?: number = 1) {
      let sortDirection = direction;

      if (!sortDirection) {
        sortDirection = this.state.sortColumn === sortColumn && this.state.sortDirection === SORT_ASCENDING
          ? SORT_DESCENDING : SORT_ASCENDING;
      }

      this.setState({ sortColumn, sortDirection, page }, this.fetchData.bind(this));
    }

    /**
     * Renders the DataList component.
     *
     * @returns {*}
     */
    render() {
      const { filters = {} } = this.props;
      const { component, props, showLabels } = filters;

      return (
        <>
          <WrappedComponent
            {...this.props}
            count={this.state.count}
            filters={{
              active: this.isFilterActive(),
              component,
              onChange: this.onFilterChange.bind(this),
              showLabels,
              props: {
                ...props,
                onCreateFilter: this.onCreateFilter.bind(this),
                item: this.state.filters
              }
            }}
            items={this.state.items}
            loading={this.state.loading}
            page={this.state.page}
            pages={this.state.pages}
            perPage={this.state.perPage}
            onDelete={this.onDelete.bind(this)}
            onDeleteAll={this.onDeleteAll.bind(this)}
            onPageChange={this.onPageChange.bind(this)}
            onPerPageChange={this.onPerPageChange.bind(this)}
            onSave={this.onSave.bind(this)}
            onSort={this.onSort.bind(this)}
            onInit={this.onInit.bind(this)}
            renderSearch={this.renderSearch.bind(this)}
            sortColumn={this.state.sortColumn}
            sortDirection={this.state.sortDirection}
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
          { this.state.error && (
            <Toaster
              onDismiss={() => this.setState({ error: false })}
              timeout={0}
              type={Toaster.MessageTypes.negative}
            >
              <Message.Header
                content={i18n.t('Common.messages.error.header')}
              />
              <Message.List
                items={this.props.resolveErrors && this.props.resolveErrors(this.state.error)}
              />
            </Toaster>
          )}
        </>
      );
    }

    /**
     * Renders the search input component.
     *
     * @returns {null|*}
     */
    renderSearch() {
      if (!this.props.searchable) {
        return null;
      }

      return (
        <Input
          aria-label='Search'
          type='text'
          icon={(
            <Icon
              link={!_.isEmpty(this.state.search)}
              name={_.isEmpty(this.state.search) ? 'search' : 'times'}
              onClick={this.onClearSearch.bind(this)}
            />
          )}
          input={{
            'aria-label': 'search'
          }}
          ref={(ref) => {
            this.searchRef = ref;
          }}
          loading={this.state.loading}
          onKeyDown={Timer.clearSearchTimer.bind(this)}
          onKeyUp={Timer.setSearchTimer.bind(this, this.onSearch.bind(this))}
          onChange={this.onSearchChange.bind(this)}
          size='small'
          value={this.state.search || ''}
        />
      );
    }

    /**
     * Sets the DataList session object.
     */
    setSession() {
      const { key, storage } = this.props.session || {};

      if (!key) {
        return;
      }

      const {
        filters,
        page,
        perPage,
        search,
        sortColumn,
        sortDirection
      } = this.state;

      ListSessionUtils.setSession(key, storage, {
        filters,
        page,
        perPage,
        search,
        sortColumn,
        sortDirection
      });
    }
  }
);

export default useDataList;

export {
  SORT_ASCENDING,
  SORT_DESCENDING
};

export type {
  Props
};
