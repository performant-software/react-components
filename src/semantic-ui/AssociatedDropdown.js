// @flow

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Button, Dropdown } from 'semantic-ui-react';
import _ from 'underscore';
import EditModal from './EditModal';
import i18n from '../i18n/i18n';
import Timer from '../utils/Timer';
import './AssociatedDropdown.css';

type Option = {
  key: number,
  value: number,
  text: string
};

type Props = {
  className?: string,
  collectionName: string,
  modal?: {
    component: Component,
    props: any,
    onSave: (item: any) => void,
    state: any
  },
  onSearch: () => void,
  onSelection: () => void,
  placeholder?: string,
  renderOption: (option: any) => Option,
  required?: boolean,
  searchQuery: string,
  value: number,
  t: () => string,
  upward?: boolean
};

type State = {
  items: Array<any>,
  loading: boolean,
  modalAdd: boolean,
  options: Array<Option>,
  searchQuery: string,
  value: number
};

const TIMEOUT = 500;

class AssociatedDropdown extends Component<Props, State> {
  /**
   * Constructs a new AssociatedDropdown component.
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      loading: false,
      modalAdd: false,
      options: [],
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
  componentDidUpdate(prevProps) {
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
  onOptionSelection(e, { value }) {
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
    this.props
      .onSearch(this.state.searchQuery)
      .then(({ data }) => {
        const items = data[this.props.collectionName];
        const options = items.map(this.props.renderOption.bind(this));

        this.setState({ items, options });
      });
  }

  /**
   * Sets the search query on the state.
   *
   * @param e
   * @param searchQuery
   */
  onSearchChange(e, { searchQuery }) {
    this.setState({ searchQuery });
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
        <Dropdown
          className={`inline-dropdown ${this.props.className}`}
          disabled={this.state.loading}
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
        <Button.Group
          className='buttons'
        >
          { this.renderAddButton() }
          { this.renderClearButton() }
        </Button.Group>
        { this.renderAddModal() }
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
   * Renders the add association button.
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
        component={component}
        onClose={() => this.setState({ modalAdd: false })}
        onSave={(item) => onSave(item)
          .then((record) => {
            this.props.onSelection(record);
            this.setState({ modalAdd: false });
          })}
        {...props}
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
