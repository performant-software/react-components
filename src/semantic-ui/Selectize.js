// @flow

import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  Message,
  Modal,
  Pagination,
  Table
} from 'semantic-ui-react';
import _ from 'underscore';
import EditModal from './EditModal';
import SelectizeHeader from './SelectizeHeader';
import Toaster from './Toaster';
import i18n from '../i18n/i18n';
import Timer from '../utils/Timer';
import './Selectize.css';

type Props = {
  centered: boolean,
  collectionName: string,
  modal?: {
    component: Component,
    onSave: (item: any) => Promise<any>,
    props: any,
    state: any,
  },
  onClose: () => void,
  onLoad: () => void,
  onSave: (selectedItems: Array<any>) => void,
  renderItem: () => any,
  selectedItems?: Array<any>,
  t: (key: string) => string,
  title: string
};

type State = {
  items: Array<any>,
  loading: boolean,
  page: number,
  pages: number,
  saved: boolean,
  searchQuery: string,
  selectedItem: any,
  selectedItems: Array<any>
};

class Selectize extends Component<Props, State> {
  /**
   * Constructs a new Selectize component.
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      loading: false,
      page: 1,
      pages: 1,
      saved: false,
      searchQuery: '',
      selectedItems: props.selectedItems,
      selectedItem: null
    };
  }

  /**
   * Loads the data after the component has mounted.
   */
  componentDidMount() {
    this.fetchData();
  }

  /**
   * Executes the search and sets the results on the state.
   */
  fetchData() {
    const { page, searchQuery } = this.state;

    this.setState({ loading: true }, () => {
      this.props
        .onLoad({ page, search: searchQuery })
        .then(({ data }) => {
          const items = data[this.props.collectionName] || [];
          const { pages = 1 } = data.list;
          this.setState({ items, pages, loading: false });
        });
    });
  }

  /**
   * Returns true if the passed item is selected.
   *
   * @param item
   *
   * @returns {boolean}
   */
  isSelected(item) {
    return !!_.findWhere(this.state.selectedItems, { id: item.id });
  }

  /**
   * Toggles the selection for the passed item.
   *
   * @param item
   */
  onItemSelection(item) {
    if (this.state.selectedItem === item) {
      this.setState({ selectedItem: null }, this.onSelect.bind(this, item));
    } else {
      this.setState({ selectedItem: item });
    }
  }

  /**
   * Sets the active page on the state and reloads the data.
   *
   * @param e
   * @param activePage
   */
  onPageChange(e, { activePage }) {
    this.setState({ page: activePage }, this.fetchData.bind(this));
  }

  /**
   * Sets the active page to "1" and reloads the data.
   *
   */
  onSearch() {
    this.setState({ page: 1 }, this.fetchData.bind(this));
  }

  /**
   * Sets the search query value on the state.
   *
   * @param e
   * @param value
   */
  onSearchChange(e, { value }) {
    this.setState({ searchQuery: value });
  }

  /**
   * Toggles the selection for the passed item.
   *
   * @param item
   */
  onSelect(item) {
    if (this.isSelected(item)) {
      this.setState((state) => ({
        selectedItems: _.filter(state.selectedItems, (i) => i.id !== item.id)
      }));
    } else {
      this.setState((state) => ({
        selectedItems: [
          ...state.selectedItems,
          item
        ]
      }));
    }
  }

  /**
   * Renders the Selectize component.
   *
   * @returns {*}
   */
  render() {
    return (
      <Modal
        as={Form}
        centered={this.props.centered}
        className='selectize'
        open
        noValidate
        size='small'
      >
        <Modal.Header>
          <Grid
            columns={2}
            verticalAlign='middle'
          >
            <Grid.Column
              textAlign='left'
            >
              <Header
                content={this.props.title}
              />
            </Grid.Column>
            <Grid.Column
              textAlign='right'
            >
              <Input
                autoFocus
                icon='search'
                onKeyDown={Timer.clearSearchTimer.bind(this)}
                onKeyUp={Timer.setSearchTimer.bind(this, this.onSearch.bind(this))}
                onChange={this.onSearchChange.bind(this)}
                size='mini'
                type='text'
                value={this.state.searchQuery}
              />
              { this.renderAddButton() }
            </Grid.Column>
          </Grid>
        </Modal.Header>
        <Modal.Content>
          <Grid>
            <Grid.Column
              textAlign='center'
            >
              <SelectizeHeader
                isSelected={(item) => this.state.selectedItem === item}
                items={this.state.selectedItems}
                onItemClick={this.onItemSelection.bind(this)}
                renderItem={this.props.renderItem.bind(this)}
              />
              { this.renderItems() }
              { this.renderPagination() }
              { this.renderEmpty() }
              { this.renderAddModal() }
            </Grid.Column>
          </Grid>
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
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={this.props.onSave.bind(this, this.state.selectedItems)}
            primary
            size='medium'
            type='submit'
          >
            { i18n.t('Common.buttons.save') }
          </Button>
          <Button
            inverted
            onClick={this.props.onClose.bind(this)}
            primary
            size='medium'
            type='button'
          >
            { i18n.t('Common.buttons.cancel') }
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

  /**
   * Renders the add button component.
   *
   * @returns {null|*}
   */
  renderAddButton() {
    if (!this.props.modal) {
      return null;
    }

    return (
      <Button
        basic
        className='add-button'
        content={i18n.t('Common.buttons.add')}
        icon='plus'
        onClick={() => this.setState({ modalAdd: true })}
      />
    );
  }

  /**
   * Renders the add modal component (if provided).
   *
   * @returns {null|*}
   */
  renderAddModal() {
    if (!(this.state.modalAdd && this.props.modal)) {
      return null;
    }

    const { component, props, onSave } = this.props.modal;

    return (
      <EditModal
        {...props}
        component={component}
        onClose={() => this.setState({ modalAdd: false })}
        onSave={(item) => onSave(item).then((saved) => {
          if (saved) {
            this.onSelect(saved);
          }

          this.setState({ modalAdd: false, searchQuery: '', saved: true }, this.fetchData.bind(this));
        })}
      />
    );
  }

  /**
   * Renders the checkmark if the passed item is selected.
   *
   * @param item
   *
   * @returns {null|*}
   */
  renderCheckmark(item) {
    if (!this.isSelected(item)) {
      return null;
    }

    return (
      <Icon
        color='green'
        name='check'
      />
    );
  }

  /**
   * Renders no results.
   *
   * @returns {null|*}
   */
  renderEmpty() {
    if (this.state.items.length || this.state.loading) {
      return null;
    }

    return (
      <Grid
        className='empty'
        padded='vertically'
      >
        <Grid.Column
          textAlign='center'
        >
          <Grid.Row>
            <Icon
              name='meh outline'
              size='huge'
            />
          </Grid.Row>
          <Grid.Row>
            { i18n.t('Selectize.noRecords') }
          </Grid.Row>
        </Grid.Column>
      </Grid>

    );
  }

  /**
   * Renders the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {*}
   */
  renderItem(item, index) {
    return (
      <Table.Row
        key={index}
        onClick={this.onSelect.bind(this, item)}
      >
        <Table.Cell>{ this.props.renderItem(item) }</Table.Cell>
        <Table.Cell>
          { this.renderCheckmark(item) }
        </Table.Cell>
      </Table.Row>
    );
  }

  /**
   * Renders the list of items on the state.
   *
   * @returns {null|*}
   */
  renderItems() {
    if (!this.state.items.length) {
      return null;
    }

    return (
      <Table
        basic
        padded
        selectable
      >
        <Table.Body>
          { this.state.items.map(this.renderItem.bind(this)) }
        </Table.Body>
      </Table>
    );
  }

  /**
   * Renders the pagination component.
   *
   * @returns {null|*}
   */
  renderPagination() {
    if (!this.state.items.length) {
      return null;
    }

    return (
      <Pagination
        activePage={this.state.page}
        firstItem={null}
        lastItem={null}
        onPageChange={this.onPageChange.bind(this)}
        size='mini'
        totalPages={this.state.pages}
      />
    );
  }
}

Selectize.defaultProps = {
  centered: false,
  modal: undefined,
  selectedItems: []
};

export default Selectize;
