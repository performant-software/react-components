// @flow

import { Timer } from '@performant-software/shared-components';
import React, { Component, type ComponentType } from 'react';
import { Button, Dropdown, Message } from 'semantic-ui-react';
import _ from 'underscore';
import EditModal from './EditModal';
import i18n from '../i18n/i18n';
import Toaster from './Toaster';
import './AssociatedDropdown.css';

type Option = {
  key: number | string,
  value: number | string,
  text: string
};

type Props = {
  className?: string,
  collectionName: string,
  header?: ComponentType<any>,
  modal?: {
    component: ComponentType<any>,
    props: any,
    onSave: (item: any) => Promise<any>,
    state: any
  },
  onSearch: (search: string) => Promise<any>,
  onSelection: (item: any) => void,
  placeholder?: string,
  renderOption: (option: any) => Option,
  required?: boolean,
  searchQuery: string,
  value: ?number,
  upward?: boolean
};

type State = {
  items: Array<any>,
  loading: boolean,
  modalAdd: boolean,
  options: Array<Option>,
  saved: boolean,
  searchQuery: string,
  value: ?number | ?string
};

const TIMEOUT = 500;

class AssociatedDropdown extends Component<Props, State> {
  static defaultProps: any;

  timeout: ?TimeoutID;

  /**
   * Constructs a new AssociatedDropdown component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      items: [],
      loading: false,
      modalAdd: false,
      modalEdit: false,
      options: [],
      saved: false,
      searchQuery: props.searchQuery || '',
      value: props.value || ''
    };

    this.timeout = null;
  }

  /**
   * Sets the new search query and value on the state.
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps: Props) {
    if (prevProps.value !== this.props.value) {
      const { searchQuery, value } = this.props;
      this.setState({ searchQuery, value });
    }
  }

  /**
   * Clears the search timer.
   */
  clearSearchTimer() {
    clearTimeout(this.timeout);
  }

  /**
   * Clears the search query value if an option was not selected.
   */
  onBlur() {
    this.setState((state) => {
      let searchQuery = '';

      if (state.value) {
        searchQuery = this.props.searchQuery;
      }

      return { searchQuery };
    });
  }

  /**
   * Clears the search query and value.
   */
  onClear() {
    this.setState({ searchQuery: '', value: '' }, () => {
      this.props.onSelection(this.state.value);
    });
  }

  /**
   * Clears the search query and executes the search.
   */
  onOpen() {
    this.setState({ searchQuery: '' }, this.onSearch.bind(this));
  }

  /**
   * Resets the search query and value on the state.
   *
   * @param e
   * @param value
   */
  onOptionSelection(e: Event, { value }: { value: any }) {
    this.setState((state) => {
      const option = _.findWhere(state.options, { value }) || {};
      this.setState({ searchQuery: option.text, value: option.value });
    });

    const item = _.findWhere(this.state.items, { id: value });
    this.props.onSelection(item);
  }

  /**
   * Executes the search to load the options.
   */
  onSearch() {
    this.setState({ loading: true }, this.search.bind(this));
  }

  /**
   * Sets the search query on the state.
   *
   * @param e
   * @param searchQuery
   */
  onSearchChange(e: Event, { searchQuery }: { searchQuery: string }) {
    this.setState({ searchQuery });
  }

  search() {
    this.props
      .onSearch(this.state.searchQuery)
      .then(({ data }) => {
        const items = data[this.props.collectionName];
        const options = items.map(this.props.renderOption.bind(this));

        this.setState({ items, options, loading: false });
      });
  }

  /**
   * Renders the AssociatedDropdown component.
   *
   * @returns {*}
   */
  render() {
    return (
      <div
        className='association-dropdown'
      >
        <div className='dropdown-container'>
          <Dropdown
            className={`inline-dropdown ${this.props.className || ''}`}
            disabled={this.state.loading}
            header={this.props.header}
            loading={this.state.loading}
            onBlur={this.onBlur.bind(this)}
            onChange={this.onOptionSelection.bind(this)}
            onOpen={this.onOpen.bind(this)}
            onSearchChange={this.onSearchChange.bind(this)}
            options={this.state.options}
            placeholder={this.props.placeholder}
            search={() => this.state.options}
            searchInput={{
              'aria-label': this.props.collectionName,
              className: 'dropdown-search-input',
              onKeyDown: Timer.clearSearchTimer.bind(this),
              onKeyUp: Timer.setSearchTimer.bind(this, this.onSearch.bind(this))
            }}
            searchQuery={this.state.searchQuery}
            selectOnBlur={false}
            selection
            upward={this.props.upward}
            value={this.state.value}
          />
        </div>
        <Button.Group
          className='buttons'
        >
          { this.renderEditButton() }
          { this.renderAddButton() }
          { this.renderClearButton() }
        </Button.Group>
        { this.renderModal() }
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
      </div>
    );
  }

  /**
   * Renders the add button (if applicable).
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
        content={i18n.t('Common.buttons.add')}
        icon='plus'
        onClick={() => this.setState({ modalAdd: true })}
        type='button'
      />
    );
  }

  /**
   * Renders the clear button.
   *
   * @returns {*}
   */
  renderClearButton() {
    if (this.props.required) {
      return null;
    }

    return (
      <Button
        basic
        content={i18n.t('Common.buttons.clear')}
        icon='times'
        onClick={this.onClear.bind(this)}
        type='button'
      />
    );
  }

  /**
   * Renders the edit button (if applicable).
   *
   * @returns {null|*}
   */
  renderEditButton() {
    if (!this.props.modal || !this.props.modal.props || !this.props.modal.props.onInitialize || !this.state.value) {
      return null;
    }

    return (
      <Button
        basic
        content={i18n.t('Common.buttons.edit')}
        icon='pencil'
        onClick={() => this.setState({ modalEdit: true })}
        type='button'
      />
    );
  }

  /**
   * Renders the add association button.
   *
   * @returns {null|*}
   */
  renderModal() {
    if (!((this.state.modalAdd || this.state.modalEdit) && this.props.modal)) {
      return null;
    }

    const { component, props, onSave } = this.props.modal;

    // If we're editing the existing record, pass the ID to the modal in order to retrieve the full record.
    let item;

    if (this.state.modalEdit) {
      item = {
        id: this.state.value
      };
    }

    return (
      <EditModal
        component={component}
        item={item}
        onClose={() => this.setState({ modalAdd: false, modalEdit: false })}
        onSave={(data) => onSave(data)
          .then((record) => {
            this.props.onSelection(record);
            this.setState({ modalAdd: false, modalEdit: false, saved: true });
          })}
        {...props}
      />
    );
  }

  /**
   * Sets the search timer.
   */
  setSearchTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.onSearch.bind(this), TIMEOUT);
  }
}

AssociatedDropdown.defaultProps = {
  className: '',
  modal: null,
  placeholder: null,
  required: false,
  upward: false
};

export default AssociatedDropdown;
