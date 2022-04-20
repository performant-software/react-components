// @flow

import { Timer } from '@performant-software/shared-components';
import React, { Component, createRef } from 'react';
import { Dropdown, DropdownSearchInput, Icon } from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import './RemoteDropdown.css';

type Option = {
  key: string,
  value: string,
  text: any
};

type ApiResponse = {
  data: {
    items: Array<any>,
    list: {
      pages: number
    }
  }
};

type Props = {
  allowAdditions?: boolean,
  className?: string,
  collectionName: string,
  fluid?: boolean,
  multiple?: boolean,
  onAddItem?: (value: string) => Promise<any>,
  onLoad: ({ search: string, page: number}) => Promise<ApiResponse>,
  onSelection: (value: string) => void,
  placeholder?: string,
  renderOption: (item: any) => Option,
  value: string
};

type State = {
  loading: boolean,
  options: Array<Option>,
  page: number,
  pages: number,
  search: string
};

class RemoteDropdown extends Component<Props, State> {
  static defaultProps: any;
  dropdown: DropdownSearchInput;

  /**
   * Constructs a new RemoteDropdown component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: false,
      options: [],
      page: 1,
      pages: 1,
      search: ''
    };

    this.dropdown = createRef();
  }

  /**
   * Resets the component.
   */
  componentDidMount() {
    this.onReset();
  }

  /**
   * Resets the state and executes the search.
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps: Props) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        page: 1,
        pages: 1,
        search: ''
      }, this.onSearch.bind(this));
    }
  }

  /**
   * Returns the dropdown class name(s).
   *
   * @returns {string}
   */
  getClassNames() {
    const classNames = ['remote-dropdown'];
    if (this.props.className) {
      classNames.push(this.props.className);
    }

    return classNames.join(' ');
  }

  /**
   * Returns the dropdown value as an array.
   *
   * @returns {[]}
   */
  getValues() {
    let values = [];
    const { value } = this.props;

    if (value && value.length) {
      values = Array.isArray(value) ? value : [value];
    }

    return values;
  }

  /**
   * Returns the passed value as a dropdown option.
   *
   * @param value
   *
   * @returns {{text: *, value: *, key: *}}
   */
  getOption(value: string) {
    return {
      key: value,
      text: value,
      value
    };
  }

  /**
   * Returns the complete list of dropdown options. If applicable, the "Add" and "Load more" options are added to the
   * end of the list.
   *
   * @returns {*[]}
   */
  getOptions() {
    const options = [...this.state.options];

    /*
     * Add the current dropdown value to the list. Since the value doesn't render unless it exists in the list of
     * options, we'll need to add the value to the list of options if it exists of another page.
     */
    _.each(this.getValues(), (value) => {
      if (!_.findWhere(options, { value })) {
        options.push(this.getOption(value));
      }
    });

    /*
     * Add the "Add" option if the dropdown allows additions and the search query does not already exist in the list
     * of options.
     */
    const { search } = this.state;

    if (this.props.allowAdditions && search && !_.findWhere(options, { text: search })) {
      options.push({
        key: 'add',
        value: 'add',
        text: this.renderAddOption(),
        onClick: this.onAddItem.bind(this)
      });
    }

    /*
     * Add the "Load more" option if the dropdown is paginated and contains more pages.
     */
    if (this.state.page < this.state.pages) {
      options.push({
        key: 'more',
        value: 'more',
        text: this.renderLoadMoreOption(),
        onClick: () => this.setState((state) => ({ page: state.page + 1 }), this.onSearch.bind(this))
      });
    }

    return options;
  }

  /**
   * Returns the list of options to display for the search. This list will include the options that match the search
   * criteria with the current value(s) excluded.
   *
   * @returns {*}
   */
  getSearchOptions() {
    return _.filter(this.getOptions(), (option) => !this.getValues().includes(option.value));
  }

  /**
   * Adds the current search query as a new dropdown option.
   *
   * @param e
   *
   * @returns {*|Q.Promise<any>|Promise<R>|Promise<any>|void}
   */
  onAddItem(e: Event) {
    return this.props.onAddItem && this.props
      .onAddItem(this.state.search)
      .then(() => {
        // Resolve the new value. If multiple are allowed, append the new value to the existing list.
        let value = this.state.search;
        if (this.props.multiple) {
          value = [
            ...this.props.value,
            this.state.search
          ];
        }

        // Set the new value
        this.onOptionSelection(e, { value });

        // Close the dropdown (single select only)
        if (!this.props.multiple) {
          this.dropdown.current.close();
        }
      });
  }

  /**
   * Selects the passed value.
   *
   * @param e
   * @param value
   */
  onOptionSelection(e: Event, { value }: any) {
    this.props.onSelection(value);
  }

  /**
   * Resets the dropdown state.
   */
  onReset() {
    this.setState({
      options: _.map(this.getValues(), this.getOption.bind(this)),
      page: 1,
      pages: 1,
      search: ''
    });
  }

  /**
   * Executes the search and sets the rendered options on the state.
   */
  onSearch() {
    const { page, search } = this.state;

    this.setState({
      loading: true
    }, () => {
      this.props
        .onLoad({ page, search })
        .then(({ data }) => {
          const options = _.map(data[this.props.collectionName], this.props.renderOption.bind(this));
          const { pages } = data.list;

          this.setState((state) => ({
            loading: false,
            options: [
              ...page > 1 ? (state.options || []) : [],
              ...options
            ],
            page,
            pages
          }));
        });
    });
  }

  /**
   * Sets the search on the state and re-sets the page counts.
   *
   * @param e
   * @param searchQuery
   */
  onSearchChange(e: Event, { searchQuery }: any) {
    this.setState({
      page: 1,
      pages: 1,
      search: searchQuery
    });
  }

  /**
   * Renders the RemoteDropdown component.
   *
   * @returns {*}
   */
  render() {
    return (
      <Dropdown
        className={this.getClassNames()}
        clearable
        fluid={this.props.fluid}
        loading={this.state.loading}
        multiple={this.props.multiple}
        onBlur={this.onReset.bind(this)}
        onClose={this.onReset.bind(this)}
        onChange={this.onOptionSelection.bind(this)}
        onOpen={this.onSearch.bind(this)}
        onSearchChange={this.onSearchChange.bind(this)}
        options={this.getOptions()}
        placeholder={this.props.placeholder}
        ref={this.dropdown}
        scrolling
        search={() => this.getSearchOptions()}
        searchInput={{
          className: 'remote-dropdown-search-input',
          onKeyDown: Timer.clearSearchTimer.bind(this),
          onKeyUp: Timer.setSearchTimer.bind(this, this.onSearch.bind(this))
        }}
        searchQuery={this.state.search}
        selectOnBlur={false}
        selection
        value={this.props.value}
      />
    );
  }

  /**
   * Renders the "Add" dropdown option.
   *
   * @returns {*}
   */
  renderAddOption() {
    return (
      <div
        className='extra-option'
      >
        <Icon name='plus circle' />
        {`${i18n.t('RemoteDropdown.labels.add')} ${this.state.search}`}
      </div>
    );
  }

  /**
   * Renders the "Load more" dropdown option.
   *
   * @returns {*}
   */
  renderLoadMoreOption() {
    return (
      <div
        className='extra-option'
      >
        <Icon name='refresh' />
        { i18n.t('RemoteDropdown.labels.loadMore') }
      </div>
    );
  }
}

RemoteDropdown.defaultProps = {
  allowAdditions: false,
  className: '',
  fluid: false,
  multiple: false,
  onAddItem: undefined,
  placeholder: null
};

export default RemoteDropdown;
