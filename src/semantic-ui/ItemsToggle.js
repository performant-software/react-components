// @flow

import React, { Component, type ComponentType } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import _ from 'underscore';

type Sort = {
  key: string,
  text: string,
  value: string
};

type Props = {
  onSort: (sortColumn: string) => void,
  sort?: Array<Sort>,
  sortColumn: string,
  sortDirection: string
};

type State = {
  view: number
};

const Views = {
  list: 0,
  grid: 1
};

const SORT_ASCENDING = 'ascending';

const useListToggle = (WrappedComponent: ComponentType<any>) => (
  class ItemListToggle extends Component<Props, State> {
    static defaultProps = {
      sort: []
    };

    sortDropdown: typeof Dropdown;

    constructor(props: any) {
      super(props);

      this.state = {
        view: Views.list
      };
    }

    getSortValue() {
      const sort = _.find(this.props.sort, { value: this.props.sortColumn });
      return sort && sort.text;
    }

    onSort(sort: Sort) {
      this.props.onSort(sort.value);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          renderListHeader={this.renderHeader.bind(this)}
          view={this.state.view}
        />
      );
    }

    renderHeader() {
      return (
        <>
          <Button
            active={this.state.view === Views.list}
            basic
            icon='list'
            onClick={() => this.setState({ view: Views.list })}
          />
          <Button
            active={this.state.view === Views.grid}
            basic
            icon='grid layout'
            onClick={() => this.setState({ view: Views.grid })}
          />
          { this.props.sort && this.props.sort.length > 1 && (
            <Button.Group
              basic
              style={{
                fontSize: 'inherit'
              }}
            >
              <Button
                content={this.getSortValue()}
                icon={this.props.sortDirection === SORT_ASCENDING ? 'sort alphabet up' : 'sort alphabet down'}
                onClick={(e) => this.sortDropdown.handleClick(e)}
              />
              <Dropdown
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

export default useListToggle;

export {
  Views
};
