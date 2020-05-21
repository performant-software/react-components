// @flow

import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import './AutocompleteDropdown.css';

type Option = {
  key: number,
  value: number,
  text: string
};

type Props = {
  className?: string,
  fluid?: boolean,
  multiple?: boolean,
  onLoad: () => Promise<Array<Option>>,
  onSelection: (value: string) => void,
  placeholder?: string,
  value: string
};

type State = {
  loading: boolean,
  options: Array<Option>
};

class AutocompleteDropdown extends Component<Props, State> {
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
    this.props
      .onLoad()
      .then((options) => this.setState({ options, loading: false }));
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
        className={this.getClassNames()}
        clearable
        deburr
        fluid={this.props.fluid}
        loading={this.state.loading}
        multiple={this.props.multiple}
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

AutocompleteDropdown.defaultProps = {
  className: '',
  fluid: false,
  multiple: false,
  placeholder: null
};

export default AutocompleteDropdown;
