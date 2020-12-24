// @flow

import React, { Component, createRef, type Element } from 'react';
import {
  Button,
  Ref,
  Popup,
  Table
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import ColumnResize from './ColumnResize';
import useList from './List';
import useColumnSelector from './DataTableColumnSelector';
import './DataTable.css';

import type { Action } from './List';

type Column = {
  className?: string,
  hidden?: boolean,
  label?: string,
  name: string,
  render?: (item: any) => void,
  renderHeader?: (item: any) => void,
  resolve?: (item: any) => void
};

type Props = {
  actions: Array<Action>,
  className: string,
  columns: Array<Column>,
  items: ?Array<any>,
  onColumnClick: (column: Column) => void,
  renderEmptyMessage: () => Element<any>,
  renderEmptyRow?: () => void,
  renderItem?: (item: any, index: number, children?: any) => Element<any>,
  sortColumn?: string,
  sortDirection?: string,
  t: (key: string) => string,
  tableProps: any
};

type State = {
  resize: ?{
    columnRef: typeof Ref,
    offset: number
  }
};

class DataTable extends Component<Props, State> {
  static defaultProps: any;

  columnRefs: any;
  onClick: (e: Event) => void;
  onMouseMove: (e: Event) => void;
  onMouseUp: (e: Event) => void;

  /**
   * Constructs a new DataTable component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      resize: null
    };

    this.initializeColumnRefs();

    this.onClick = this.onPreventClick.bind(this);
    this.onMouseMove = this.onColumnResize.bind(this);
    this.onMouseUp = this.afterColumnResize.bind(this);
  }

  /**
   * If the resize object is present on the state, sets the capture click handler on the document and
   * clears the resize object on the state.
   */
  afterColumnResize() {
    if (this.state.resize) {
      document.addEventListener('click', this.onClick, true);
      this.setState({ resize: undefined });
    }
  }

  /**
   * Initializes a ref for each table column.
   */
  initializeColumnRefs() {
    this.columnRefs = {};

    _.each(this.props.columns, (c) => {
      this.columnRefs[c.name] = createRef();
    });
  }

  /**
   * Adds the mousemove and mouseup event listeners for dynamic column resizing.
   */
  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  /**
   * Removes the mousemove and mouseup event listeners.
   */
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  /**
   * Returns the actual column count. This will be the number of columns +1 if the table allows actions.
   *
   * @returns {number}
   */
  getColumnCount() {
    let columnCount = this.props.columns.length;

    if (this.props.actions && this.props.actions.length) {
      columnCount += 1;
    }

    return columnCount;
  }

  /**
   * Resizes the current column based on the user's mouse position.
   *
   * @param e
   */
  onColumnResize(e: MouseEvent) {
    const { resize } = this.state;

    if (resize) {
      const { columnRef, offset } = resize;
      columnRef.current.style.width = `${offset + e.pageX}px`;
    }
  }

  /**
   * Stops progagation of the onclick event. The column resizing seems to trigger the 'click' event on the <th>
   * containing the <div> used to resize the column. Since the <th> already provides a 'click' event, this makes for
   * an awkward user experience because it will trigger a column sort each time a column is resized.
   *
   * This function will capture the onclick prior to it bubbling to the <th> element and prevent it from happening. It
   * will also remove the event listener from the document so that clicks elsewhere in the document are not prevented.
   *
   * @param e
   */
  onPreventClick(e: Event) {
    e.stopPropagation();
    document.removeEventListener('click', this.onClick, true);
  }

  /**
   * Renders the DataTable component.
   *
   * @returns {*}
   */
  render() {
    return (
      <Table
        {...this.props.tableProps}
      >
        <Table.Header>
          <Table.Row>
            { this.props.columns.map(this.renderHeaderCell.bind(this)) }
            { this.renderActionsHeader() }
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { this.props.items && this.props.items.map(this.renderItem.bind(this)) }
          { this.renderEmptyTableRow() }
        </Table.Body>
      </Table>
    );
  }

  /**
   * Renders the action button for the passed item and action.
   *
   * @param item
   * @param action
   * @param index
   *
   * @returns {*}
   */
  renderActionButton(item: any, index: number, action: Action) {
    // If the action specified its own render function, return the result of the function call
    if (action.render) {
      return action.render(item, index);
    }

    const actionButton = (
      <Button
        basic
        compact
        color={action.color}
        icon={action.icon}
        key={`${action.name}-${index}`}
        onClick={action.onClick && action.onClick.bind(this, item)}
        title={action.title}
      />
    );

    // Wrap the button in a popup if the action specifies a popup attribute
    if (action.popup) {
      const { content, title } = action.popup;

      return (
        <Popup
          content={content}
          header={title}
          hideOnScroll
          mouseEnterDelay={500}
          position='top right'
          trigger={actionButton}
        />
      );
    }

    // Otherwise, simply return the button
    return actionButton;
  }

  /**
   * Renders the actions for the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {null|*}
   */
  renderActions(item: any, index: number) {
    if (!(this.props.actions && this.props.actions.length)) {
      return null;
    }

    const actions = this.props.actions
      .filter((action) => !action.accept || action.accept(item))
      .map((action) => {
        let defaults = {};

        if (action.name === 'edit') {
          defaults = {
            popup: {
              title: i18n.t('DataTable.actions.edit.title'),
              content: i18n.t('DataTable.actions.edit.content')
            }
          };
        } else if (action.name === 'copy') {
          defaults = {
            popup: {
              title: i18n.t('DataTable.actions.copy.title'),
              content: i18n.t('DataTable.actions.copy.content')
            }
          };
        } else if (action.name === 'delete') {
          defaults = {
            popup: {
              title: i18n.t('DataTable.actions.delete.title'),
              content: i18n.t('DataTable.actions.delete.content')
            }
          };
        }

        return _.defaults(action, defaults);
      });

    return (
      <Table.Cell
        className='actions-cell'
        key={index}
      >
        { actions.map(this.renderActionButton.bind(this, item, index)) }
      </Table.Cell>
    );
  }

  /**
   * Renders the action list header.
   *
   * @returns {null|*}
   */
  renderActionsHeader() {
    if (!(this.props.actions && this.props.actions.length)) {
      return null;
    }

    return (
      <Table.HeaderCell>
        { i18n.t('DataTable.columns.actions') }
      </Table.HeaderCell>
    );
  }

  /**
   * Renders the table cell for the passed item/column.
   *
   * @param item
   * @param column
   *
   * @returns {*}
   */
  renderCell(item: any, column: Column) {
    if (column.hidden) {
      return null;
    }

    let value;

    if (column.render) {
      value = column.render(item);
    } else if (column.resolve) {
      value = column.resolve(item);
    } else {
      value = item[column.name];
    }

    return (
      <Table.Cell
        key={`${item.id}-${column.name}`}
        className={column.className}
      >
        { value }
      </Table.Cell>
    );
  }

  // /**
  //  * Renders the list configuration button.
  //  *
  //  * @returns {*}
  //  */
  // renderConfigureButton() {
  //   return (
  //     <Dropdown
  //       basic
  //       button
  //       icon='cog'
  //       className='icon configure-button open-right'
  //       simple
  //     >
  //       <Dropdown.Menu>
  //         { this.state.columns
  //           .filter((c) => c.label && c.label.length)
  //           .map((c, index) => (
  //             <Draggable
  //               id={c.name}
  //               index={index}
  //               key={c.name}
  //               onDrag={this.onDrag.bind(this)}
  //             >
  //               <Dropdown.Item>
  //                 <Icon
  //                   name='bars'
  //                 />
  //                 <Checkbox
  //                   checked={!c.hidden}
  //                   label={c.label}
  //                   onClick={this.onColumnCheckbox.bind(this, c)}
  //                 />
  //               </Dropdown.Item>
  //             </Draggable>
  //           ))}
  //       </Dropdown.Menu>
  //     </Dropdown>
  //   );
  // }

  /**
   * Renders the empty table row.
   *
   * @returns {null|*}
   */
  renderEmptyTableRow() {
    if (this.props.items && this.props.items.length) {
      return null;
    }

    if (this.props.renderEmptyRow) {
      return this.props.renderEmptyRow();
    }

    return (
      <Table.Row>
        <Table.Cell
          colSpan={this.getColumnCount()}
          textAlign='center'
        >
          <div className='empty-container'>
            { this.props.renderEmptyMessage() }
          </div>
        </Table.Cell>
      </Table.Row>
    );
  }

  /**
   * Renders the table header cell for the passed column.
   *
   * @param column
   *
   * @returns {*}
   */
  renderHeaderCell(column: Column) {
    if (column.hidden) {
      return null;
    }

    if (column.renderHeader) {
      return column.renderHeader();
    }

    return (
      <Ref
        innerRef={this.columnRefs[column.name]}
      >
        <Table.HeaderCell
          key={column.name}
          sorted={this.props.sortColumn === column.name ? this.props.sortDirection : null}
          onClick={this.props.onColumnClick.bind(this, column)}
        >
          { column.label }
          <ColumnResize
            onMouseDown={(e: MouseEvent) => {
              const columnRef = this.columnRefs[column.name];
              const offset = columnRef.current.offsetWidth - e.pageX;
              this.setState({ resize: { columnRef, offset } });
            }}
          />
        </Table.HeaderCell>
      </Ref>
    );
  }

  /**
   * Renders the table row for the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {*}
   */
  renderItem(item: any, index: number) {
    const children = [
      this.props.columns.map(this.renderCell.bind(this, item)),
      this.renderActions(item, index)
    ];

    if (this.props.renderItem) {
      return this.props.renderItem(item, index, children);
    }

    return (
      <Table.Row
        key={index}
      >
        { children }
      </Table.Row>
    );
  }
}

DataTable.defaultProps = {
  actions: undefined,
  addButton: {
    location: 'top',
    color: 'green'
  },
  buttons: [],
  className: '',
  filters: undefined,
  items: [],
  loading: false,
  modal: undefined,
  page: 1,
  pages: 1,
  onColumnClick: () => {},
  onCopy: undefined,
  onPageChange: () => {},
  renderDeleteModal: undefined,
  renderEmptyRow: undefined,
  renderSearch: undefined,
  renderItem: undefined,
  sortColumn: undefined,
  sortDirection: undefined
};

export default useColumnSelector(useList(DataTable));

export type {
  Column
};
