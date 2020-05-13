// @flow

import React, { Component } from 'react';
import { Form, Segment, Transition } from 'semantic-ui-react';
import Keyboard from '../common/Keyboard';
import i18n from '../i18n/i18n';
import LinkLabel from './LinkLabel';
import './KeyboardField.css';

type Props = {
  autoFocus?: boolean,
  children: Component,
  className?: string,
  error?: boolean,
  id?: string,
  label: string,
  layout: any,
  name: string,
  onChange: (e: Event, { value: string }) => void,
  required: boolean,
  t: (key: string) => string,
  value: string,
  visible: boolean
};

type State = {
  showKeyboard: boolean
};

class KeyboardField extends Component<Props, State> {
  /**
   * Constructs a new KeyboardField component.
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      showKeyboard: false
    };
  }

  /**
   * Hides the keyboard when the parent component is no longer visible.
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps) {
    if (prevProps.visible && !this.props.visible) {
      this.setState({ showKeyboard: false });
    }
  }

  /**
   * Triggers the text input change.
   *
   * @param e
   * @param value
   */
  onInputChange(e, value) {
    this.props.onChange(e, value);
  }

  /**
   * Triggers the keyboard input change.
   *
   * @param value
   */
  onKeyboardChange(value) {
    this.props.onChange(null, { value });
  }

  /**
   * Renders the KeyboardField component.
   *
   * @returns {*}
   */
  render() {
    return (
      <Form.Field
        className='keyboard-field'
      >
        <Form.Input
          autoFocus={this.props.autoFocus}
          className={this.props.className}
          error={this.props.error}
          id={this.props.id}
          input={{
            'aria-label': this.props.name
          }}
          label={this.renderLabel()}
          name={this.props.name}
          onChange={this.onInputChange.bind(this)}
          required={this.props.required}
          value={this.props.value}
        >
          { this.props.children }
        </Form.Input>
        <Transition
          duration={{
            hide: 50,
            show: 500
          }}
          visible={this.state.showKeyboard}
        >
          <Segment>
            <Keyboard
              layout={this.props.layout}
              onChange={this.onKeyboardChange.bind(this)}
              value={this.props.value}
            />
          </Segment>
        </Transition>
      </Form.Field>
    );
  }

  /**
   * Renders the input label.
   *
   * @returns {*}
   */
  renderLabel() {
    return (
      <LinkLabel
        content={this.state.showKeyboard
          ? i18n.t('KeyboardField.labels.hideKeyboard')
          : i18n.t('KeyboardField.labels.showKeyboard')}
        htmlFor={this.props.name}
        label={this.props.label}
        onClick={() => this.setState((state) => ({ showKeyboard: !state.showKeyboard }))}
      />
    );
  }
}

KeyboardField.defaultProps = {
  autoFocus: false,
  className: '',
  error: false,
  id: ''
};

export default KeyboardField;
