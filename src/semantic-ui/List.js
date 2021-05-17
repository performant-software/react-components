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
import EditModal from './EditModal';
import './List.css';

type Action = {
  accept: (item: any) => boolean,
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
  render: (index?: number) => Element<any>
};

type Props = {
  actions: Array<Action>,
  addButton: {
    basic: boolean,
    color: string,
    location: string,
    onClick?: () => void
  },
  buttons: Array<ListButton>,
  className: string,
  configurable: boolean,
  deleteButton?: {
    color: string,
    location: string,
    onClick?: () => void
  },
  filters?: {
    active: boolean,
    component: Component<{}>,
    props?: any,
    state?: any,
    onChange: (params: any) => Promise<any>
  },
  items: ?Array<any>,
  loading?: boolean,
  modal?: {
    component: Element<any>,
    props: any,
    state: any
  },
  page: number,
  pages: number,
  onCopy?: (item: any) => any,
  onDelete: (item: any) => void,
  onDeleteAll?: () => Promise<any>,
  onPageChange: () => void,
  onSave: (item: any) => Promise<any>,
  renderDeleteModal?: ({ selectedItem: any, onCancel: () => void, onConfirm: () => void }) => Element<any>,
  renderEmptyRow?: () => void,
  renderItem?: (item: any, index: number, children?: any) => Element<any>,
  renderListHeader?: () => Element<any>,
  renderSearch?: () => Element<any>,
  t: (key: string) => string,
  onRowSelect: (Array<{id: number}>) => void
};

type State = {
  modalDelete: boolean,
  modalDeleteAll: boolean,
  modalEdit: boolean,
  modalFilter: boolean,
  selectedItem: ?{id: number},
  selectedRows: Array<any>
};

const BUTTON_KEY_ADD = 'add';
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
        selectedItem: null,
        selectedRows: []
      };
    }

    /**
     * Renders the list of buttons for the passed location.
     *
     * @param location
     */
    getButtons(location: string) {
      const buttons = [];

      const { addButton = {}, deleteButton = {}, modal } = this.props;

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
            isRowSelected={this.getIsRowSelected.bind(this)}
            onRowSelection={this.onRowSelection.bind(this)}
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
            onClick: this.onEditButton.bind(this)
          };
        } else if (action.name === 'copy') {
          defaults = {
            icon: 'copy outline',
            onClick: this.onCopyButton.bind(this)
          };
        } else if (action.name === 'delete') {
          defaults = {
            icon: 'times circle outline',
            onClick: this.onDeleteButton.bind(this)
          };
        }

        return _.defaults(action, defaults);
      });
    }

    /**
     * Returns if item is selected.
     *
     * @returns {bool}
     */
    getIsRowSelected(item: {id: number}) {
      return this.state.selectedRows && this.state.selectedRows
        ? !!this.state.selectedRows.find((r) => r.id === item.id)
        : false;
    }

    /**
     * Returns the selected rows.
     *
     * @returns {*}
     */
    onRowSelection(item: {id: number}) {
      const selectedItem = this.state.selectedRows
        ? this.state.selectedRows.find((r) => r.id === item.id)
        : false;
      if (selectedItem) {
        this.setState((state) => ({
          ...state,
          selectedRows: state.selectedRows.filter((r) => r.id !== item.id)
        }), () => this.props.onRowSelect(this.state.selectedRows));
      } else {
        this.setState((state) => ({
          ...state,
          selectedRows: [...(state.selectedRows ? state.selectedRows : []), item]
        }), () => this.props.onRowSelect(this.state.selectedRows));
      }
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
          onClick={this.onAddButton.bind(this)}
        >
          <Icon name='plus' />
          { i18n.t('List.buttons.add') }
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

      return (
        <Button
          key={index}
          {...button}
        />
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
          component={component}
          onClose={() => this.setState({ modalFilter: false })}
          onSave={this.onSaveFilter.bind(this)}
          {...props}
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
              { _.map(buttons, (button) => button.render()) }
            </Grid.Column>
            <Grid.Column
              textAlign='right'
            >
              { hasPages && this.renderPagination() }
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

      const { filters, renderListHeader, renderSearch } = this.props;
      if (filters || renderListHeader || renderSearch) {
        renderHeader = true;
      }

      if (!renderHeader) {
        return null;
      }

      return (
        <div
          className='header'
        >
          <Grid
            columns={2}
            verticalAlign='bottom'
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
              >
                { renderListHeader && (
                  <Menu.Menu>
                    { renderListHeader() }
                  </Menu.Menu>
                )}
                <Menu.Menu>
                  { filters && this.renderFilterButton() }
                </Menu.Menu>
                <Menu.Menu>
                  { renderSearch && renderSearch() }
                </Menu.Menu>
              </Menu>
            </Grid.Column>
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
  }
);

export default useList;

export type {
  Action,
  Props
};
