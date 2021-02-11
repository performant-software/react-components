// @flow

import React, { Component, type ComponentType } from 'react';
import _ from 'underscore';
import { Input, Message } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import Toaster from './Toaster';
import Timer from '../utils/Timer';

type Props = {
  collectionName: string,
  filters?: {
    component: Component<{}>,
    props: any,
    onChange: (filter: any) => Promise<any>
  },
  onDelete: (item: any) => Promise<any>,
  onDeleteAll: () => Promise<any>,
  onLoad: (params: any) => Promise<any>,
  onSave: (item: any) => Promise<any>,
  polling: number,
  resolveErrors?: (error: any) => Array<string>,
  saved?: boolean,
  searchable: boolean,
  session?: {
    key: string,
    storage: typeof sessionStorage
  }
};

type State = {
  error: ?any,
  filters: any,
  items: Array<any>,
  loading: boolean,
  page: number,
  pages: number,
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
      if (prevProps.saved !== this.props.saved) {
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
     *
     * @returns {{search: (*|null), sortColumn: (string|string|null), sortDirection: (string|null), pages: number,
     * saved: (*|boolean), filters: ({component: Component<{}>, props: *,
     * onChange}|*|{}|boolean|PrettyError.Callback|PrettyError.Callback[]), page: (*|number), loading: boolean,
     * items: []}}
     */
    initializeState(props: Props) {
      const session = this.restoreSession();

      const filters = session.filters || (props.filters && props.filters.props) || {};
      const page = session.page || 1;
      const search = session.search || null;
      const sortColumn = session.sortColumn || null;
      const sortDirection = session.sortDirection || null;

      return {
        error: null,
        filters,
        items: [],
        loading: false,
        page,
        pages: 1,
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
      if (!(this.props.filters && this.props.filters.props)) {
        return false;
      }

      const { props } = this.props.filters || {};
      return !_.isEqual(_.pick(this.state.filters, _.keys(props)), props);
    }

    /**
     * Calls the onDelete prop.
     *
     * @param selectedItem
     *
     * @returns {Q.Promise<any> | Promise<R> | Promise<any> | void | *}
     */
    onDelete(selectedItem: any) {
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
      return this.props
        .onDeleteAll()
        .then(this.afterDeleteAll.bind(this));
    }

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
     * Calls the onSave prop and reloads the data.
     *
     * @param item
     *
     * @returns {Q.Promise<any> | Promise<R> | Promise<any> | void | *}
     */
    onSave(item: any) {
      return this.props
        .onSave(item)
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
      return (
        <>
          <WrappedComponent
            {...this.props}
            filters={{
              active: this.isFilterActive(),
              component: this.props.filters && this.props.filters.component,
              onChange: this.onFilterChange.bind(this),
              props: {
                defaults: this.props.filters && this.props.filters.props,
                item: this.state.filters
              }
            }}
            items={this.state.items}
            loading={this.state.loading}
            page={this.state.page}
            pages={this.state.pages}
            onDelete={this.onDelete.bind(this)}
            onDeleteAll={this.onDeleteAll.bind(this)}
            onPageChange={this.onPageChange.bind(this)}
            onSave={this.onSave.bind(this)}
            onSort={this.onSort.bind(this)}
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
        search,
        sortColumn,
        sortDirection
      } = this.state;

      sessionStorage.setItem(key, JSON.stringify({
        filters,
        page,
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
