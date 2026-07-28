// @flow

import { Timer } from '@performant-software/shared-components';
import React, { Component, createRef, type ComponentType } from 'react';
import {
  Button,
  Dropdown,
  Message,
  type ButtonProps
} from 'semantic-ui-react';
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
  buttons?: Array<ButtonProps>,
  className?: string,
  collectionName: string,
  header?: ComponentType<any>,
  modal?: {
    component: ComponentType<any>,
    props: any,
    onSave: (item: any) => Promise<any>,
    state: any
  },
  onSearch: (search: string, page: number) => Promise<any>,
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
  loadingMore: boolean,
  modalAdd: boolean,
  options: Array<Option>,
  page: number,
  pages: number,
  saved: boolean,
  searchQuery: string,
  value: ?number | ?string
};

const BUTTON_ADD = 'add';
const BUTTON_CLEAR = 'clear';
const BUTTON_EDIT = 'edit';

const TIMEOUT = 500;

// distance (px) from the bottom of the menu to start loading the next pg of results
const SCROLL_OFFSET = 10;
const LOADING_OPTION = '__loading__';

class AssociatedDropdown extends Component<Props, State> {
  static defaultProps: any;

  container: { current: null | HTMLDivElement };

  handleMenuScroll: (e: Event) => void;

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
      loadingMore: false,
      modalAdd: false,
      modalEdit: false,
      options: [],
      page: 1,
      pages: 1,
      saved: false,
      searchQuery: props.searchQuery || '',
      value: props.value || ''
    };

    this.container = createRef();
    this.handleMenuScroll = this.onMenuScroll.bind(this);
    this.timeout = null;
  }

  /**
   * Adds a scroll listener to lazy-load additional pages of results.
   */
  componentDidMount() {
    if (this.container.current) {
      this.container.current.addEventListener('scroll', this.handleMenuScroll, true);
    }
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

    if (prevProps.onSearch !== this.props.onSearch) {
      this.onSearch();
    }
  }

  /**
   * Removes the scroll listener.
   */
  componentWillUnmount() {
    if (this.container.current) {
      this.container.current.removeEventListener('scroll', this.handleMenuScroll, true);
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

      return {
        searchQuery: option.text,
        value: option.value
      };
    });

    const item = _.findWhere(this.state.items, { id: value });
    this.props.onSelection(item);
  }

  /**
   * Returns the list of options to render, appending a disabled "loading" option while the next page of
   * results is loading.
   *
   * @returns {*[]}
   */
  getOptions() {
    const options = [...this.state.options];

    if (this.state.loadingMore) {
      options.push({
        key: LOADING_OPTION,
        value: LOADING_OPTION,
        disabled: true,
        text: i18n.t('Common.messages.loading')
      });
    }

    return options;
  }

  /**
   * Loads the next page of results when the menu is scrolled to the bottom.
   *
   * @param e
   */
  onMenuScroll(e: Event) {
    const menu = e.target;

    // only load more on scroll events originating from the dropdown
    if (!(menu instanceof HTMLElement) || !menu.classList.contains('menu')) {
      return;
    }

    const { scrollTop, clientHeight, scrollHeight } = menu;

    if ((scrollTop + clientHeight) >= (scrollHeight - SCROLL_OFFSET)) {
      this.onLoadMore();
    }
  }

  /**
   * Loads the next page of results and appends them to the current list.
   */
  onLoadMore() {
    const {
      loading,
      loadingMore,
      page,
      pages
    } = this.state;

    // bail if a request is already in progress, or all pages have loaded
    if (loading || loadingMore || page >= pages) {
      return;
    }

    this.setState((state) => ({ loadingMore: true, page: state.page + 1 }), this.search.bind(this));
  }

  /**
   * Executes the search to load the first page of options.
   */
  onSearch() {
    this.setState({ loading: true, page: 1, pages: 1 }, this.search.bind(this));
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
    const { page, searchQuery } = this.state;

    this.props
      .onSearch(searchQuery, page)
      .then(({ data }) => {
        const items = data[this.props.collectionName];
        const pages = data.list ? data.list.pages : 1;

        this.setState((state) => {
          // for the first page, replace the current result set
          if (page <= 1) {
            return {
              items,
              options: items.map(this.props.renderOption.bind(this)),
              pages,
              loading: false,
              loadingMore: false
            };
          }

          // for subsequent pages, append any new records (by id).
          const existingIds = new Set(_.pluck(state.items, 'id'));
          const newItems = _.filter(items, (item) => !existingIds.has(item.id));
          const newOptions = newItems.map(this.props.renderOption.bind(this));

          return {
            items: [...state.items, ...newItems],
            options: [...state.options, ...newOptions],
            // stop paginating if this page had nothing new
            pages: newItems.length ? pages : page,
            loading: false,
            loadingMore: false
          };
        });
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
        <div
          className='dropdown-container'
          ref={this.container}
        >
          <Dropdown
            className={`inline-dropdown ${this.props.className || ''}`}
            disabled={this.state.loading}
            header={this.props.header}
            loading={this.state.loading}
            onBlur={this.onBlur.bind(this)}
            onChange={this.onOptionSelection.bind(this)}
            onOpen={this.onOpen.bind(this)}
            onSearchChange={this.onSearchChange.bind(this)}
            options={this.getOptions()}
            placeholder={this.props.placeholder}
            scrolling
            search={() => this.getOptions()}
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
          { this.renderButtons() }
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

    return this.renderButton(BUTTON_ADD, {
      basic: true,
      content: i18n.t('Common.buttons.add'),
      icon: 'plus',
      onClick: () => this.setState({ modalAdd: true }),
      type: 'button'
    });
  }

  /**
   * Renders the button with the passed name using the provided props.
   *
   * @param name
   * @param defaults
   *
   * @returns {JSX.Element|null}
   */
  renderButton(name, defaults) {
    const button = _.findWhere(this.props.buttons, { name }) || {};

    if (button.accept && !button.accept()) {
      return null;
    }

    return (
      <Button
        {..._.defaults(_.omit(button, 'accept'), defaults)}
        key={name}
      />
    );
  }

  /**
   * Renders the extra buttons.
   *
   * @returns {*}
   */
  renderButtons() {
    const excludeButtons = [BUTTON_ADD, BUTTON_CLEAR, BUTTON_EDIT];
    const buttons = _.filter(this.props.buttons, (button) => !excludeButtons.includes(button.name));

    return _.map(buttons, (button) => this.renderButton(button.name, _.omit(button, 'name')));
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

    return this.renderButton(BUTTON_CLEAR, {
      basic: true,
      content: i18n.t('Common.buttons.clear'),
      icon: 'times',
      onClick: this.onClear.bind(this),
      type: 'button'
    });
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

    return this.renderButton(BUTTON_EDIT, {
      basic: true,
      content: i18n.t('Common.buttons.edit'),
      icon: 'pencil',
      onClick: () => this.setState({ modalEdit: true }),
      type: 'button'
    });
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
