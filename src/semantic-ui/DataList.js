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
    props: any
  },
  onDelete: (item: any) => Promise<any>,
  onDeleteAll: () => Promise<any>,
  onLoad: (params: any) => Promise<any>,
  onSave: (item: any) => Promise<any>,
  polling: number,
  saved?: boolean,
  searchable: boolean
};

type State = {
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

const SORT_ASCENDING = 'ascending';
const SORT_DESCENDING = 'descending';

const useDataList = (WrappedComponent: ComponentType<any>) => (
  class extends Component<Props, State> {
    pollingInterval: IntervalID;

    constructor(props: Props) {
      super(props);

      this.state = {
        filters: (props.filters && props.filters.props) || {},
        items: [],
        loading: false,
        page: 1,
        pages: 1,
        saved: props.saved || false,
        search: null,
        sortColumn: null,
        sortDirection: null
      };
    }

    componentDidMount() {
      if (this.props.polling) {
        this.pollingInterval = setInterval(this.fetchData.bind(this), this.props.polling);
      }
    }

    componentWillUnmount() {
      if (this.pollingInterval) {
        clearInterval(this.pollingInterval);
      }
    }

    afterDelete() {
      if (this.state.items.length === 1) {
        return this.setState((state) => ({
          page: (state.page - 1) > 1 ? state.page - 1 : 1
        }), this.fetchData.bind(this));
      }

      return this.fetchData();
    }

    afterDeleteAll() {
      this.setState({ page: 1 }, this.fetchData.bind(this));
    }

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

    isFilterActive() {
      if (!(this.props.filters && this.props.filters.props)) {
        return false;
      }

      const { props } = this.props.filters || {};
      return !_.isEqual(_.pick(this.state.filters, _.keys(props)), props);
    }

    onDelete(selectedItem: any) {
      return this.props
        .onDelete(selectedItem)
        .then(this.afterDelete.bind(this));
    }

    onDeleteAll() {
      return this.props
        .onDeleteAll()
        .then(this.afterDeleteAll.bind(this));
    }

    onFilterChange(filters: any) {
      return new Promise((resolve) => {
        this.setState({ filters, page: 1 }, () => {
          this.fetchData();
          resolve();
        });
      });
    }

    onPageChange(e: Event, { activePage }: { activePage: number }) {
      this.setState({ page: activePage }, this.fetchData.bind(this));
    }

    onSave(item: any) {
      return this.props
        .onSave(item)
        .then(() => this.setState({ saved: true }, this.fetchData.bind(this)));
    }

    onSearch() {
      this.setState({ page: 1 }, this.fetchData.bind(this));
    }

    onSearchChange(e: Event, { value }: { value: any }) {
      this.setState({ search: value });
    }

    onSort(sortColumn: string) {
      this.setState((state) => ({
        sortColumn,
        sortDirection: (state.sortColumn === sortColumn && state.sortDirection === SORT_ASCENDING)
          ? SORT_DESCENDING : SORT_ASCENDING
      }), this.fetchData.bind(this));
    }

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
        </>
      );
    }

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
  }
);

export default useDataList;
