// @flow

import { useEditContainer, type EditContainerProps } from '@performant-software/shared-components';
import React, { Component, type ComponentType } from 'react';
import {
  Dimmer,
  Form,
  Loader,
  Menu,
  Message,
  type MenuProps
} from 'semantic-ui-react';
import _ from 'underscore';
import CancelButton from './CancelButton';
import SaveButton from './SaveButton';
import Toaster from './Toaster';
import i18n from '../i18n/i18n';
import './EditPage.css';

type Props = EditContainerProps & {
  className?: string,
  component: ComponentType<any>,
  menu?: MenuProps,
  onClose: () => void,
  onSave: () => Promise<any>,
  showLoading: boolean
};

type State = {
  currentTab: string,
  showToaster: boolean
};

class EditPage extends Component<Props, State> {
  static defaultProps: any;

  /**
   * Constructs a new EditPage component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      currentTab: '',
      showToaster: false
    };
  }

  /**
   * Sets the current tab to the first tab in the array.
   */
  componentDidMount() {
    if (this.props.menu) {
      const tab = _.first(this.props.menu.items);
      this.setState({ currentTab: tab && tab.key });
    }
  }

  /**
   * Resets the <code>showToaster</code> property when the set of errors changes.
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps: Props) {
    if (!_.isEmpty(this.props.errors) && !_.isEmpty(prevProps.errors) && prevProps.errors !== this.props.errors) {
      this.setState({ showToaster: true });
    }
  }

  /**
   * Shows the toaster and calls the onSave prop.
   *
   * @returns {*}
   */
  onSave() {
    this.setState({ showToaster: true });
    return this.props.onSave();
  }

  /**
   * Renders the EditPage component.
   *
   * @returns {*}
   */
  render() {
    return (
      <Dimmer.Dimmable
        as='div'
        className={`edit-page ${this.props.className || ''}`}
      >
        { this.renderLoading() }
        <Form
          noValidate
        >
          { this.renderMenu() }
          { this.renderButtons() }
          { this.renderComponent() }
          { this.renderToaster() }
        </Form>
      </Dimmer.Dimmable>
    );
  }

  /**
   * Renders the buttons and container if no menu is present.
   *
   * @returns {null|*}
   */
  renderButtons() {
    if (this.props.menu) {
      return null;
    }

    return (
      <div
        className='button-container'
      >
        <SaveButton
          onClick={this.onSave.bind(this)}
          saving={this.props.saving}
        />
        <CancelButton
          disabled={this.props.saving}
          onClick={this.props.onClose.bind(this)}
        />
      </div>
    );
  }

  /**
   * Renders the wrapped component.
   *
   * @returns {*}
   */
  renderComponent() {
    const WrappedComponent = this.props.component;

    return (
      <WrappedComponent
        {...this.props}
        currentTab={this.state.currentTab}
      />
    );
  }

  /**
   * Renders the loading indicator.
   *
   * @returns {null|*}
   */
  renderLoading() {
    if (!(this.props.showLoading && this.props.loading)) {
      return null;
    }

    return (
      <Dimmer
        active={this.props.loading}
        inverted
      >
        <Loader
          content={i18n.t('Common.messages.loading')}
        />
      </Dimmer>
    );
  }

  /**
   * Renders the menu (if present).
   *
   * @returns {null|*}
   */
  renderMenu() {
    if (!this.props.menu) {
      return null;
    }

    return (
      <Menu
        {..._.omit(this.props.menu, 'items')}
      >
        { this.props.menu && _.map(this.props.menu.items, (item) => (
          <Menu.Item
            active={item.key === this.state.currentTab}
            key={item.key}
            name={item.name}
            onClick={() => this.setState({ currentTab: item.key })}
          />
        ))}
        <Menu.Menu
          position='right'
        >
          <Menu.Item>
            <SaveButton
              onClick={this.onSave.bind(this)}
              saving={this.props.saving}
            />
            <CancelButton
              disabled={this.props.saving}
              onClick={this.props.onClose.bind(this)}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }

  /**
   * Renders the toaster component.
   *
   * @returns {null|*}
   */
  renderToaster() {
    if (!this.state.showToaster) {
      return null;
    }

    if (!(this.props.errors && this.props.errors.length)) {
      return null;
    }

    return (
      <Toaster
        onDismiss={() => this.setState({ showToaster: false })}
        timeout={0}
        type={Toaster.MessageTypes.negative}
      >
        <Message.Header
          content={i18n.t('Common.messages.error.header')}
        />
        <Message.List
          items={this.props.errors}
        />
      </Toaster>
    );
  }
}

EditPage.defaultProps = {
  showLoading: true
};

export default useEditContainer(EditPage);

export type EditPageProps = EditContainerProps & {
  currentTab: string
};
