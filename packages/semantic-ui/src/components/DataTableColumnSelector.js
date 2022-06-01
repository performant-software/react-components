// @flow

import { Object as ObjectUtils } from '@performant-software/shared-components';
import React, { Component, type ComponentType, type Element } from 'react';
import { Checkbox, Dropdown, Icon } from 'semantic-ui-react';
import _ from 'underscore';
import Draggable from './Draggable';
import './DataTableColumnSelector.css';

import type { Column } from './DataTable';

type Props = {
  className: string,
  columns: Array<Column>,
  renderListHeader?: () => Element<any>
};

type State = {
  columns: Array<Column>
};

/**
 * Returns a function to wrap the passed component in a column selector. The ColumnSelector component will bind a
 * renderListHeader function, which can be used in the wrapped component to render a column selector dropdown button.
 *
 * @param WrappedComponent
 */
const useColumnSelector = (WrappedComponent: ComponentType<any>) => (
  class extends Component<Props, State> {
    static defaultProps = {
      className: ''
    };

    /**
     * Constructs a new DataTableColumnSelector component.
     *
     * @param props
     */
    constructor(props: Props) {
      super(props);

      this.state = {
        columns: props.columns
      };
    }

    /**
     * Reset the columns on the state when the props change.
     *
     * @param prevProps
     */
    componentDidUpdate(prevProps: Props): * {
      if (!ObjectUtils.isEqual(prevProps.columns, this.props.columns)) {
        this.setState({ columns: this.props.columns });
      }
    }

    /**
     * Toggles the hidden property for the passed column.
     *
     * @param column
     */
    onColumnCheckbox(column: Column) {
      this.setState((state) => ({
        columns: _.map(state.columns, (c) => (c.name === column.name ? { ...c, hidden: !c.hidden } : c))
      }));
    }

    /**
     * Drags/drops the column at the passed index to the new position.
     *
     * @param dragIndex
     * @param hoverIndex
     */
    onDrag(dragIndex: number, hoverIndex: number) {
      this.setState((state) => {
        const columns = [];
        const anchoredColumns = [];

        // Preserve the index of any unlabeled columns
        _.each(state.columns, (column, index) => {
          if (column.label && column.label.length) {
            columns.push(column);
          } else {
            anchoredColumns.push({ index, column });
          }
        });

        const column = columns[dragIndex];
        columns.splice(dragIndex, 1);
        columns.splice(hoverIndex, 0, column);

        // Add the unlabeled columns back in
        _.each(anchoredColumns, (c) => columns.splice(c.index, 0, c.column));

        return { columns };
      });
    }

    /**
     * Renders the DataTableColumnSelector component.
     *
     * @returns {*}
     */
    render() {
      return (
        <WrappedComponent
          {...this.props}
          className={`data-table-column-selector ${this.props.className}`}
          columns={this.state.columns}
          renderListHeader={this.renderHeader.bind(this)}
        />
      );
    }

    /**
     * Renders the dropdown column selector.
     *
     * @returns {*}
     */
    renderHeader() {
      return (
        <>
          { this.props.renderListHeader && this.props.renderListHeader() }
          <Dropdown
            aria-label='Select Columns'
            basic
            button
            icon='cog'
            className='icon configure-button open-right'
            closeOnBlur={false}
          >
            <Dropdown.Menu>
              { this.state.columns
                .filter((c) => c.label && c.label.length)
                .map((c, index) => (
                  <Draggable
                    id={c.name}
                    index={index}
                    key={c.name}
                    onDrag={this.onDrag.bind(this)}
                  >
                    <Dropdown.Item
                      aria-dropeffect='move'
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon
                        name='bars'
                      />
                      <Checkbox
                        aria-label='Select Column'
                        checked={!c.hidden}
                        label={c.label}
                        onClick={this.onColumnCheckbox.bind(this, c)}
                      />
                    </Dropdown.Item>
                  </Draggable>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </>
      );
    }
  }
);

export default useColumnSelector;
