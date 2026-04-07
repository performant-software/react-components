// @flow

import React, { Component, type ComponentType } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import _ from 'underscore';
import { SORT_ASCENDING } from './DataList';
import ListSessionUtils from '../utils/ListSession';

type Sort = {
  key: string,
  text: string,
  value: string,
  direction?: ?string
};

type Props = {
  basic?: boolean,
  columns?: Array<any>,
  defaultView?: number,
  hideToggle?: boolean,
  onSort?: (sortColumn: string, sortDirection?: ?string) => void,
  renderListHeader?: () => JSX.Element,
  session?: {
    key: string,
    storage: typeof sessionStorage
  },
  sort?: Array<Sort>,
  sortColor?: string,
  sortColumn?: string,
  sortDirection?: string
};

type State = {
  view: number
};

const Views = {
  list: 0,
  grid: 1,
  table: 2
};

/**
 * Returns a function to wrap the passed component in a ItemToggle. The ItemToggle component can be used to toggle a
 * list of records between list and grid views. It will also render a sort dropdown component if a list of sort
 * properties is provided.
 *
 * @param WrappedComponent
 */
const useItemsToggle = (WrappedComponent: ComponentType<any>) => (
  class extends Component<Props, State> {
    // Default props
    static defaultProps = {
      basic: true,
      hideToggle: false,
      sort: []
    };

    // Sort dropdown ref
    sortDropdown: typeof Dropdown;

    /**
     * Constructs a new ItemsToggle component.
     *
     * @param props
     */
    constructor(props: any) {
      super(props);

      // set view based on session storage if present
      const { key, storage } = props.session || {};
      const session = ListSessionUtils.restoreSession(key, storage) || {};

      this.state = {
        view: session.view  || props.defaultView || Views.list
      };
    }

    /**
     * Renders the sort value for the current option.
     *
     * @returns {*}
     */
    getSortValue() {
      const sort = _.find(this.props.sort, { value: this.props.sortColumn });
      return sort && sort.text;
    }

    /**
     * Returns true if the component should be hidden.
     *
     * @returns {boolean|*}
     */
    isHidden() {
      return this.props.hideToggle && _.isEmpty(this.props.sort) && !this.props.renderListHeader;
    }

    /**
     * Calls the onSort prop.
     *
     * @param sort
     *
     * @returns {*|void}
     */
    onSort(sort: Sort) {
      if (!this.props.onSort) {
        return;
      }

      let sortDirection;

      if (sort.value !== this.props.sortColumn) {
        sortDirection = sort.direction;
      }

      this.props.onSort(sort.value, sortDirection);
    }

    /**
     * Updates the session whenever the view state changes.
     *
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps: Props, prevState: State) {
      if (prevState.view !== this.state.view) {
        this.setSession();
      }
    }

    /**
     * Sets the view property on the session.
     */
    setSession() {
      const { key, storage } = this.props.session || {};

      if (!key) {
        return;
      }

      ListSessionUtils.setSession(key, storage, { view: this.state.view });
    }

    /**
     * Renders the ItemsToggle component.
     *
     * @returns {*}
     */
    render() {
      return (
        <WrappedComponent
          {...this.props}
          renderListHeader={this.renderHeader.bind(this)}
          view={this.state.view}
        />
      );
    }

    /**
     * Renders the list header icons:
     * <ul>
     *   <li>List/Grid view toggle</li>
     *   <li>Sort dropdown</li>
     * </ul>
     *
     * @returns {*}
     */
    renderHeader() {
      if (this.isHidden()) {
        return null;
      }

      return (
        <>
          { this.props.renderListHeader && this.props.renderListHeader() }
          { !this.props.hideToggle && (
            <>
              <Button
                active={this.state.view === Views.list}
                aria-label='List View'
                basic={this.props.basic}
                icon='list'
                onClick={() => this.setState({ view: Views.list })}
              />
              <Button
                active={this.state.view === Views.grid}
                aria-label='Grid View'
                basic={this.props.basic}
                icon='grid layout'
                onClick={() => this.setState({ view: Views.grid })}
              />
              { !_.isEmpty(this.props.columns) && (
                <Button
                  active={this.state.view === Views.table}
                  aria-label='Table View'
                  basic={this.props.basic}
                  icon='table'
                  onClick={() => this.setState({ view: Views.table })}
                />
              )}
            </>
          )}
          { !_.isEmpty(this.props.sort) && this.props.onSort && (
            <Button.Group
              basic={this.props.basic}
              color={this.props.sortColor}
              style={{
                fontSize: 'inherit'
              }}
            >
              <Button
                aria-label='Sort by'
                content={this.getSortValue()}
                icon={this.props.sortDirection === SORT_ASCENDING ? 'sort alphabet up' : 'sort alphabet down'}
                onClick={(e) => this.sortDropdown.handleClick(e)}
              />
              <Dropdown
                aria-label='Sort'
                className='button icon'
                floating
                options={_.map(this.props.sort, (sort) => ({
                  ...sort,
                  onClick: this.onSort.bind(this, sort)
                }))}
                ref={(sortDropdown) => {
                  this.sortDropdown = sortDropdown;
                }}
                trigger={<></>}
                value={this.props.sortColumn}
              />
            </Button.Group>
          )}
        </>
      );
    }
  }
);

export default useItemsToggle;

export {
  Views
};
