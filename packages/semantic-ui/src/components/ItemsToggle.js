// @flow

import React, { Component, type ComponentType } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import _ from 'underscore';
import { SORT_ASCENDING } from './DataList';

type Sort = {
  key: string,
  text: string,
  value: string,
  direction?: ?string
};

type Props = {
  basic?: boolean,
  defaultView?: number,
  hideToggle?: boolean,
  onSort?: (sortColumn: string, sortDirection?: ?string) => void,
  renderListHeader?: () => JSX.Element,
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
  grid: 1
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

      this.state = {
        view: props.defaultView || Views.list
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
