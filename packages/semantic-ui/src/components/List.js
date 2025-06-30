// @flow

import React, { Component, type ComponentType, type Element } from 'react';
import { Trans } from 'react-i18next';
import {
  Button,
  Confirm,
  Grid,
  Header,
  Icon,
  Menu,
  Pagination
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import DropdownButton from './DropdownButton';
import EditModal from './EditModal';
import FilterLabels from './FilterLabels';
import './List.css';

type Action = {
  accept: (item: any) => boolean,
  as: ComponentType,
  asProps: () => any,
  color?: string,
  icon?: string,
  name: string,
  onClick?: (item: any) => void,
  popup: {
    content: string,
    title: string
  },
  render?: (item: any, index: number) => Element<any>,
  title?: string
};

type ListButton = {
  accept?: () => boolean,
  render: (index?: number) => Element<any>
};

type Props = {
  /**
   * A list of actions to render for each element in the row. Actions with the names "edit" and "delete" will be
   * handled specially by the <code>List</code> higher-order component.
   */
  actions?: Array<Action>,

  /**
   * If provided, a button will display in the list header allowing the addition of items to the list. When clicked,
   * the <code>modal</code> prop will be rendered.
   */
  addButton?: {
    basic: boolean,
    color: string,
    content?: string,
    inverted?: boolean,
    location: string,
    onClick?: () => void,
    secondary?: boolean
  },

  /**
   * A list of arbitrary buttons to the display in the list header. All actions will be handled by the consuming
   * component.
   * <br />
   * <br />
   *
   * In addition to the props listed here for each button, buttons will also accept any of the Semantic UI
   * <a href="https://react.semantic-ui.com/elements/button/" target="_blank">Button</a> props.
   */
  buttons?: Array<ListButton>,

  /**
   * The number of total records in the list (not just the current page).
   */
  count?: number,

  /**
   * CSS class name to append to the <code>div</code> container.
   */
  className?: string,

  /**
   * If provided, a CSV export button will be rendered in the list header.
   */
  csvExportButton?: {
    basic: boolean,
    color: string,
    location: string,
    onClick?: () => void
  },

  /**
   * If provided, a "delete all" button will be rendered in the list header.
   */
  deleteButton?: {
    color: string,
    location: string,
    onClick?: () => void
  },

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
    active: boolean,
    component: Component<{}>,
    props?: any,
    state?: any,
    onChange: (params: any) => Promise<any>,
    showLabels?: boolean
  },

  /**
   * If provided, the passed modal will be rendered when the "add" button is clicked.
   */
  modal?: {
    component: ComponentType<any>,
    props: any,
    state: any
  },

  /**
   * If provided, this callback is fired when the "copy" action is clicked for an item. The consuming component
   * should generate a copy of the selected item and return that value. The return value is then set at the
   * current item in the edit modal.
   */
  onCopy?: (item: any) => any,

  /**
   * Callback fired when the "delete" action is clicked for an item.
   */
  onDelete?: (item: any) => void,

  /**
   * Callback fired when the delete all button is clicked. This prop expects a Promise as the return value.
   */
  onDeleteAll?: () => Promise<any>,

  /**
   * Callback fired when the page is changed via the pagination component.
   */
  onPageChange?: () => void,

  /**
   * Callback fired when the per page value is changed.
   */
  onPerPageChange?: () => void,

  /**
   * Callback fired when the save button is clicked in the add/edit modal. This function expects a Promise as the
   * return value.
   */
  onSave?: (item: any) => Promise<any>,

  /**
   * Current page number.
   */
  page?: number,

  /**
   * Number of pages in the list.
   */
  pages?: number,

  /**
   * The number of records to display per page.
   */
  perPage?: number,

  /**
   * The options to display in the dropdown for the per page selector.
   */
  perPageOptions?: Array<number>,

  /**
   * Custom render function for the modal that appears on the "delete" action.
   */
  renderDeleteModal?: ({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Element<any>,

  /**
   * If provided, this function will return a JSX element that will prepend to the list header.
   */
  renderListHeader?: () => ?Element<any>,

  /**
   * If provided, this function will return a JSX element that will replace the default search input.
   */
  renderSearch?: () => Element<any>,

  /**
   * Returns true if the renderSearch prop should be used to render a search input element.
   */
  searchable?: boolean,

  /**
   * If set to <code>true</code>, checkboxes will render as the first table column, allowing each row to be selectable.
   * The consuming component is responsible for tracking the selected items.
   */
  selectable?: boolean,

  /**
   * If <code>true</code>, the total number of records will display in the list header.
   */
  showRecordCount?: boolean
};

type State = {
  modalDelete: boolean,
  modalDeleteAll: boolean,
  modalEdit: boolean,
  modalFilter: boolean,
  selectedItem: any
};

const BUTTON_KEY_ADD = 'add';
const BUTTON_KEY_CSV_EXPORT = 'csv-export';
const BUTTON_KEY_DELETE_ALL = 'delete-all';

/**
 * Renders a function to wrap the passed component in a List. This component will be used as the presentation for the
 * list, additional logic will be defined elsewhere. This component will render list header buttons, pagination,
 * search input, add/edit/delete modals, filter button, filter modal.
 *
 * @param WrappedComponent
 */
const useList = (WrappedComponent: ComponentType<any>) => (
  class extends Component<Props, State> {
    // Default props
    static defaultProps = {
      actions: [],
      addButton: {
        basic: true,
        color: 'green',
        location: 'top'
      },
      buttons: [],
      className: '',
      csvExportButton: undefined,
      filters: undefined,
      modal: undefined,
      page: 1,
      pages: 1,
      onColumnClick: () => {},
      onCopy: undefined,
      onPageChange: () => {},
      renderDeleteModal: undefined,
      renderSearch: undefined,
      sortColumn: undefined,
      sortDirection: undefined
    };

    /**
     * Constructs a new List component.
     *
     * @param props
     */
    constructor(props: Props) {
      super(props);

      this.state = {
        modalDelete: false,
        modalDeleteAll: false,
        modalEdit: false,
        modalFilter: false,
        selectedItem: null
      };
    }

    /**
     * Renders the list of buttons for the passed location.
     *
     * @param location
     */
    getButtons(location: string) {
      const buttons = [];

      const {
        addButton = {},
        csvExportButton = {},
        deleteButton = {},
        modal
      } = this.props;

      // Add the add button to the list if the location specified is the passed location.
      if (addButton.location === location && (addButton.onClick || modal)) {
        buttons.push({
          render: this.renderAddButton.bind(this)
        });
      }

      // Add the delete all button to the list if the location specified is the passed location.
      if (deleteButton.location === location && this.props.onDeleteAll) {
        buttons.push({
          render: this.renderDeleteAllButton.bind(this)
        });
      }

      // Add the CSV export button to the list if the csvExport prop is passed
      if (csvExportButton.location === location) {
        buttons.push({
          render: this.renderCsvExportButton.bind(this)
        });
      }

      // Resolve the array of other buttons
      buttons.push(..._.filter(this.props.buttons, (button) => {
        let include = false;

        /*
         * Include the button if the buttons specifies the passed location.
         * Include the button if no location is specified, but the add button is at the passed location.
         * Finally, include the button if the passed location is the top location.
         */
        if ((button.location || 'top') === location) {
          include = true;
        } else if (!button.location && addButton && addButton.location === location) {
          include = true;
        }

        return include;
      }));

      return buttons;
    }

    /**
     * Displays the add/edit modal.
     */
    onAddButton() {
      return this.props.addButton && this.props.addButton.onClick
        ? this.props.addButton.onClick()
        : this.setState({ modalEdit: true });
    }

    /**
     * Copies the selected item and displays the add/edit modal.
     *
     * @param selectedItem
     */
    onCopyButton(selectedItem: any) {
      const copy = this.props.onCopy
        ? this.props.onCopy(selectedItem)
        : _.omit(selectedItem, 'id', 'uid');

      this.setState({ selectedItem: copy, modalEdit: true });
    }

    /**
     * Generates and downloads a CSV file containing all
     * the data in the table.
     *
     * @param items
     */
    onCsvExportButton() {
      const visibleColumns = _.filter(this.props.columns, (col) => !col.hidden);

      let csv = `${_.map(visibleColumns, (col) => `"${col.label}"`).join(',')}\n`;

      _.each(this.props.items, (item) => {
        csv = csv.concat(`${visibleColumns.map((col) => {
          if (col.resolve) {
            return `"${col.resolve(item)}"`;
          }

          if (item[col.name]) {
            return `"${item[col.name]}"`;
          }

          return '';
        }).join(',')}\n`);
      });

      const element = document.createElement('a');
      element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(csv)}`);
      element.setAttribute('download', `${this.props.collectionName || 'table'}.csv`);

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);
    }

    /**
     * Deletes the currently selected item and clears the state.
     *
     * @returns {*}
     */
    onDelete() {
      const { selectedItem } = this.state;
      this.setState({ selectedItem: null, modalDelete: false });

      return this.props.onDelete(selectedItem);
    }

    /**
     * Deletes all items in the current list and resets the state.
     *
     * @returns {*}
     */
    onDeleteAll() {
      this.setState({ modalDeleteAll: false });
      return this.props.onDeleteAll && this.props.onDeleteAll();
    }

    /**
     * Displays the delete all confirmation modal.
     */
    onDeleteAllButton() {
      this.setState({ modalDeleteAll: true });
    }

    /**
     * Displays the delete confirmation modal for the selected item.
     *
     * @param selectedItem
     */
    onDeleteButton(selectedItem: any) {
      this.setState({ selectedItem, modalDelete: true });
    }

    /**
     * Displays the add/edit modal for the selected item.
     *
     * @param selectedItem
     */
    onEditButton(selectedItem: any) {
      this.setState({ selectedItem, modalEdit: true });
    }

    /**
     * Opens the filters modal.
     */
    onFilterButton() {
      this.setState({ modalFilter: true });
    }

    /**
     * Calls the filter onChange function with the passed filter removed.
     *
     * @param filter
     *
     * @returns {*}
     */
    onRemoveFilter(filter) {
      const { onChange, props: { item } } = this.props.filters;
      return onChange({ filters: _.filter(item.filters, (f) => f.uid !== filter.uid) });
    }

    /**
     * Saves the passed item and closes the add/edit modal.
     *
     * @param item
     *
     * @returns {*}
     */
    onSave(item: any) {
      return this.props
        .onSave(item)
        .then(() => this.setState({ modalEdit: false, selectedItem: null }));
    }

    /**
     * Calls the filters onChange prop and closes the modal.
     *
     * @param filters
     *
     * @returns {Q.Promise<any> | Promise<R> | Promise<any> | void | *}
     */
    onSaveFilter(filters: any) {
      if (!this.props.filters) {
        return null;
      }

      return this.props.filters
        .onChange(filters)
        .then(() => this.setState({ modalFilter: false }));
    }

    /**
     * Renders the DataTable component.
     *
     * @returns {*}
     */
    render() {
      return (
        <div
          className={`list ${this.props.className}`}
        >
          { this.renderHeader() }
          <WrappedComponent
            {...this.props}
            actions={this.getActions()}
            renderEmptyMessage={this.renderEmptyMessage.bind(this)}
          />
          { this.renderFooter() }
          { this.renderEditModal() }
          { this.renderDeleteModal() }
          { this.renderDeleteAllModal() }
          { this.renderFilterModal() }
        </div>
      );
    }

    /**
     * Returns the list of actions with pre-populated defaults for edit, copy, and delete.
     *
     * @returns {*}
     */
    getActions() {
      return _.map(this.props.actions, (action) => {
        let defaults = {};

        if (action.name === 'edit') {
          defaults = {
            icon: 'edit outline',
            onClick: this.onEditButton.bind(this),
            popup: {
              title: i18n.t('Common.actions.edit.title'),
              content: i18n.t('Common.actions.edit.content')
            }
          };
        } else if (action.name === 'copy') {
          defaults = {
            icon: 'copy outline',
            onClick: this.onCopyButton.bind(this),
            popup: {
              title: i18n.t('Common.actions.copy.title'),
              content: i18n.t('Common.actions.copy.content')
            }
          };
        } else if (action.name === 'delete') {
          defaults = {
            icon: 'times circle outline',
            onClick: this.onDeleteButton.bind(this),
            popup: {
              title: i18n.t('Common.actions.delete.title'),
              content: i18n.t('Common.actions.delete.content')
            }
          };
        }

        return _.defaults(action, defaults);
      });
    }

    /**
     * Renders the add button.
     *
     * @returns {*}
     */
    renderAddButton() {
      if (!this.props.addButton) {
        return null;
      }

      return (
        <Button
          basic={this.props.addButton.basic !== false}
          color={this.props.addButton.color}
          key={BUTTON_KEY_ADD}
          inverted={this.props.addButton.inverted}
          onClick={this.onAddButton.bind(this)}
          secondary={this.props.addButton.secondary}
        >
          <Icon name='plus' />
          { this.props.addButton.content || i18n.t('List.buttons.add') }
        </Button>
      );
    }

    /**
     * Renders the passed button. If a render function is provided, call the render function. Otherwise, assume
     * button props.
     *
     * @param button
     * @param index
     *
     * @returns {*}
     */
    renderButton(button: any, index: number) {
      if (button.render) {
        return button.render(index);
      }

      if (button.accept && !button.accept()) {
        return null;
      }

      return (
        <Button
          key={index}
          {..._.omit(button, 'accept')}
        />
      );
    }

    /**
   * Renders the CSV export button.
   *
   * @returns {null|*}
   */
    renderCsvExportButton() {
      if (!this.props.csvExportButton) {
        return null;
      }

      return (
        <Button
          basic={this.props.csvExportButton.basic}
          color={this.props.csvExportButton.color}
          key={BUTTON_KEY_CSV_EXPORT}
          onClick={this.onCsvExportButton.bind(this)}
        >
          <Icon name='download' />
          { i18n.t('List.buttons.csvExport') }
        </Button>
      );
    }

    /**
     * Renders the delete all button.
     *
     * @returns {null|*}
     */
    renderDeleteAllButton() {
      if (!this.props.deleteButton) {
        return null;
      }

      return (
        <Button
          basic
          color={this.props.deleteButton.color}
          key={BUTTON_KEY_DELETE_ALL}
          onClick={this.onDeleteAllButton.bind(this)}
        >
          <Icon name='times' />
          { i18n.t('List.buttons.deleteAll') }
        </Button>
      );
    }

    /**
     * Renders the delete all modal if visible.
     *
     * @returns {null|*}
     */
    renderDeleteAllModal() {
      if (!this.state.modalDeleteAll) {
        return null;
      }

      return (
        <Confirm
          content={i18n.t('List.deleteAllContent')}
          header={<Header icon='trash alternate outline' content={i18n.t('List.deleteAllHeader')} />}
          onCancel={() => this.setState({ modalDeleteAll: false })}
          onConfirm={this.onDeleteAll.bind(this)}
          open
        />
      );
    }

    /**
     * Renders the delete modal if visible.
     *
     * @returns {null|*}
     */
    renderDeleteModal() {
      if (!this.state.modalDelete) {
        return null;
      }

      const { selectedItem } = this.state;
      const onCancel = () => this.setState({ selectedItem: null, modalDelete: false });
      const onConfirm = this.onDelete.bind(this);

      if (this.props.renderDeleteModal) {
        return this.props.renderDeleteModal({ selectedItem, onConfirm, onCancel });
      }

      return (
        <Confirm
          content={i18n.t('List.deleteContent')}
          header={<Header icon='trash alternate outline' content={i18n.t('List.deleteHeader')} />}
          onCancel={onCancel}
          onConfirm={onConfirm}
          open
        />
      );
    }

    /**
     * Renders the edit modal if visible.
     *
     * @returns {null|*}
     */
    renderEditModal() {
      if (!this.props.modal || !this.state.modalEdit) {
        return null;
      }

      const { component, props } = this.props.modal;

      return (
        <EditModal
          component={component}
          onClose={() => this.setState({ selectedItem: null, modalEdit: false })}
          onSave={this.onSave.bind(this)}
          item={this.state.selectedItem}
          {...props}
        />
      );
    }

    /**
     * Renders the empty message text/component. The message content is based on whether or not records can be added
     * to this data table.
     *
     * @returns {*}
     */
    renderEmptyMessage() {
      const { addButton = {}, modal } = this.props;
      if (!(addButton.onClick || modal)) {
        return i18n.t('List.emptyList');
      }

      return (
        <Trans i18nKey='List.emptyListAdd'>
          You haven&apos;t added any yet. Click
          <div className='empty-button'>
            { this.renderAddButton() }
          </div>
          to get started.
        </Trans>
      );
    }

    /**
     * Renders the filter button component.
     *
     * @returns {null|*}
     */
    renderFilterButton() {
      if (!(this.props.filters && this.props.filters.component)) {
        return null;
      }

      return (
        <Button
          active={this.props.filters.active}
          aria-label='Filter'
          basic
          icon='filter'
          onClick={this.onFilterButton.bind(this)}
        />
      );
    }

    /**
     * Renders the filter modal if visible.
     *
     * @returns {null|*}
     */
    renderFilterModal() {
      if (!this.props.filters || !this.state.modalFilter) {
        return null;
      }

      const { component, props } = this.props.filters;

      return (
        <EditModal
          {...props}
          component={component}
          onClose={() => this.setState({ modalFilter: false })}
          onSave={this.onSaveFilter.bind(this)}
        />
      );
    }

    /**
     * Renders the list footer.
     *
     * @returns {null|*}
     */
    renderFooter() {
      let renderFooter = false;

      const buttons = this.getButtons('bottom');
      if (buttons && buttons.length) {
        renderFooter = true;
      }

      const hasPages = this.props.pages && this.props.pages > 1;
      if (hasPages) {
        renderFooter = true;
      }

      const showCount = this.props.count && this.props.showRecordCount;
      if (showCount) {
        renderFooter = true;
      }

      if (!renderFooter) {
        return null;
      }

      return (
        <div className='footer'>
          <Grid
            columns={2}
          >
            <Grid.Column
              textAlign='left'
            >
              { showCount ? this.renderRecordCount() : '' }
              { _.map(buttons, (button) => button.render()) }
            </Grid.Column>
            <Grid.Column
              textAlign='right'
            >
              { hasPages ? this.renderPagination() : ''}
            </Grid.Column>
          </Grid>
        </div>
      );
    }

    /**
     * Renders the table header.
     *
     * @returns {null|*}
     */
    renderHeader() {
      let renderHeader = false;

      const buttons = this.getButtons('top');

      if (buttons && buttons.length) {
        renderHeader = true;
      }

      const {
        filters,
        perPageOptions,
        renderListHeader,
        renderSearch,
        searchable
      } = this.props;

      const hasFilters = filters && filters.component;
      const hasSearch = searchable && renderSearch;
      const headerContent = renderListHeader && renderListHeader();

      if (hasFilters || perPageOptions || headerContent || hasSearch) {
        renderHeader = true;
      }

      const hasLabels = filters && filters.showLabels && !_.isEmpty(filters.props.item.filters);

      if (!renderHeader) {
        return null;
      }

      return (
        <div
          className='header'
        >
          <Grid
            className={hasLabels ? 'filter-labels' : undefined}
            verticalAlign='top'
          >
            <Grid.Row
              columns={2}
            >
              <Grid.Column
                textAlign='left'
              >
                { _.map(buttons, this.renderButton.bind(this)) }
              </Grid.Column>
              <Grid.Column
                textAlign='right'
              >
                <Menu
                  compact
                  borderless
                  secondary
                  className='flex-end-menu'
                >
                  { headerContent && (
                    <Menu.Menu className='list-header-menu'>
                      { headerContent }
                    </Menu.Menu>
                  )}
                  <Menu.Menu>
                    { filters && this.renderFilterButton() }
                  </Menu.Menu>
                  { perPageOptions && (
                    <Menu.Menu className='per-page-menu'>
                      { this.renderPerPage() }
                    </Menu.Menu>
                  )}
                  <Menu.Menu>
                    { renderSearch && renderSearch() }
                  </Menu.Menu>
                </Menu>
              </Grid.Column>
            </Grid.Row>
            { hasLabels && (
              <Grid.Row
                columns={1}
              >
                <Grid.Column>
                  <FilterLabels
                    filters={filters.props.item.filters}
                    onClear={() => filters.onChange({ filters: [] })}
                    onClick={(filter) => this.onRemoveFilter(filter)}
                  />
                </Grid.Column>
              </Grid.Row>
            )}
          </Grid>
        </div>
      );
    }

    /**
     * Renders the pagination component.
     *
     * @returns {null|*}
     */
    renderPagination() {
      return (
        <Pagination
          activePage={this.props.page}
          firstItem={null}
          lastItem={null}
          onPageChange={this.props.onPageChange.bind(this)}
          size='mini'
          totalPages={this.props.pages}
        />
      );
    }

    /**
     * Renders the per page selector.
     *
     * @returns {JSX.Element}
     */
    renderPerPage() {
      const { perPage } = this.props;

      return (
        <DropdownButton
          basic
          icon='list'
          onChange={this.props.onPerPageChange.bind(this)}
          options={_.map(this.props.perPageOptions, (count) => ({
            key: count,
            value: count,
            text: count
          }))}
          text={i18n.t('List.labels.perPage', { perPage })}
          value={perPage}
        />
      );
    }

    /**
     * Renders the record count component.
     *
     * @returns {null|*}
     */
    renderRecordCount() {
      const { count } = this.props;
      return (
        <p className='record-count'>
          {`${Number(count).toLocaleString()} ${i18n.t('List.record', { count })}`}
        </p>
      );
    }
  }
);

export default useList;

export type {
  Action,
  Props
};
