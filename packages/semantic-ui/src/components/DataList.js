// @flow

import { Object as ObjectUtils, Timer } from '@performant-software/shared-components';
import React, { Component, type ComponentType } from 'react';
import _ from 'underscore';
import { Input, Message } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import Toaster from './Toaster';

type Props = {
  collectionName: string,
  defaultPerPage?: number,
  defaultSearch?: string,
  defaultSort?: string,
  defaultSortDirection?: string,
  filters?: {
    component: ComponentType<any>,
    defaults?: any,
    props?: any,
    onChange?: (filter: any) => Promise<any>
  },
  onDelete?: (item: any) => Promise<any>,
  onDeleteAll?: () => Promise<any>,
  onLoad: (params: any) => Promise<any>,
  onSave?: (item: any) => Promise<any>,
  perPageOptions?: Array<number>,
  polling?: number,
  resolveErrors?: (error: any) => Array<string>,
  saved?: boolean,
  searchable: boolean,
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

const SESSION_KEY = 'DataList';
const SESSION_DEFAULT = '{}';

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
     * Returns the session storage key for the current list.
     *
     * @returns {string|null}
     */
    getSessionKey() {
      if (!this.props.session) {
        return null;
      }

      return `${SESSION_KEY}.${this.props.session.key}`;
    }

    /**
     * Initializes the state based on the passed props.
     *
     * @param props

     * @returns {{search: string, sortColumn: string, sortDirection: string, pages: number, perPage: (number|*),
     * saved: boolean, count: number, filters: (*|{}), page: number, error: null, loading: boolean, items: *[]}}
     */
    initializeState(props: Props) {
      const session = this.restoreSession();

      const filters = session.filters || (props.filters && props.filters.defaults) || {};
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
     * When no columns are sortable, load data as is
     *
     */
    onInit(page?: number = 1) {
      this.setState({ sortColumn: '', sortDirection: '', page }, this.fetchData.bind(this));
    }

    /**
     * Renders the DataList component.
     *
     * @returns {*}
     */
    render() {
      const { filters = {} } = this.props;
      const { component, defaults, props } = filters;

      return (
        <>
          <WrappedComponent
            {...this.props}
            count={this.state.count}
            filters={{
              active: this.isFilterActive(),
              component,
              onChange: this.onFilterChange.bind(this),
              props: {
                ...props,
                defaults,
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
          icon='search'
          input={{
            'aria-label': 'search'
          }}
          loading={this.state.loading}
          onKeyDown={Timer.clearSearchTimer.bind(this)}
          onKeyUp={Timer.setSearchTimer.bind(this, this.onSearch.bind(this))}
          onChange={this.onSearchChange.bind(this)}
          size='small'
          value={this.state.search}
        />
      );
    }

    /**
     * Restores the DataList session object.
     */
    restoreSession() {
      const key = this.getSessionKey();

      if (!key) {
        return {};
      }

      const session = sessionStorage.getItem(key) || SESSION_DEFAULT;
      return JSON.parse(session);
    }

    /**
     * Sets the DataList session object.
     */
    setSession() {
      const key = this.getSessionKey();

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

      sessionStorage.setItem(key, JSON.stringify({
        filters,
        page,
        perPage,
        search,
        sortColumn,
        sortDirection
      }));
    }
  }
);

export default useDataList;

export {
  SORT_ASCENDING,
  SORT_DESCENDING
};
