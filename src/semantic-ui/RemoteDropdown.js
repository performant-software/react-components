// @flow

import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import './RemoteDropdown.css';

type Option = {
  key: number,
  value: number,
  text: string
};

type Props = {
  allowAdditions?: boolean,
  className?: string,
  fluid?: boolean,
  multiple?: boolean,
  onAddItem?: (e: Event, data: any) => Promise<any>,
  onLoad: () => Promise<Array<Option>>,
  onSelection: (value: string) => void,
  placeholder?: string,
  value: string
};

type State = {
  loading: boolean,
  options: Array<Option>
};

class RemoteDropdown extends Component<Props, State> {
  static defaultProps: any;

  /**
   * Constructs a new AutocompleteDropdown component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      loading: true,
      options: []
    };
  }

  /**
   * Loads the options and sets the values on the state.
   */
  componentDidMount() {
    this.onLoad();
  }

  /**
   * Returns the dropdown class name(s).
   *
   * @returns {string}
   */
  getClassNames() {
    const classNames = ['autocomplete-dropdown'];
    if (this.props.className) {
      classNames.push(this.props.className);
    }

    return classNames.join(' ');
  }

  /**
   * Calls the onAddItem prop function and reloads the options.
   *
   * @param e
   * @param data
   *
   * @returns {*|Q.Promise<any>|Promise<R>|Promise<any>|void}
   */
  onAddItem(e: Event, data: any) {
    return this.props.onAddItem && this.props.onAddItem(e, data).then(this.onLoad.bind(this));
  }

  /**
   * Loads the dropdown options.
   */
  onLoad() {
    this.props
      .onLoad()
      .then((options) => this.setState({ options, loading: false }));
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
   * Renders the AutocompleteDropdown component.
   *
   * @returns {*}
   */
  render() {
    return (
      <Dropdown
        allowAdditions={this.props.allowAdditions}
        className={this.getClassNames()}
        clearable
        deburr
        fluid={this.props.fluid}
        loading={this.state.loading}
        multiple={this.props.multiple}
        onAddItem={this.onAddItem.bind(this)}
        onChange={this.onOptionSelection.bind(this)}
        options={this.state.options}
        placeholder={this.props.placeholder}
        scrolling
        search
        selectOnBlur={false}
        selection
        value={this.props.value}
      />
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
