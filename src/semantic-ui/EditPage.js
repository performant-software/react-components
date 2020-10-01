// @flow

import React, { Component, type ComponentType } from 'react';
import { Form, Menu, type MenuProps } from 'semantic-ui-react';
import _ from 'underscore';
import useEditContainer, { type EditContainerProps } from '../common/EditContainer';
import CancelButton from './CancelButton';
import SaveButton from './SaveButton';
import './EditPage.css';

type Props = EditContainerProps & {
  className: string,
  component: ComponentType<any>,
  menu: MenuProps,
  onClose: () => void,
  onSave: () => Promise<any>
};

type State = {
  currentTab: string
};

const EditPage = (props: Props) => {
  const Page = useEditContainer(useEditPage(props.component));
  return <Page {...props} />;
};

export default EditPage;

export const useEditPage = (WrappedComponent: ComponentType<any>) => (
  class extends Component<Props, State> {
    /**
     * Constructs a new EditPage component.
     *
     * @param props
     */
    constructor(props: Props) {
      super(props);

      this.state = {
        currentTab: ''
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
     * Renders the EditPage component.
     *
     * @returns {*}
     */
    render() {
      return (
        <Form
          className={`edit-page ${this.props.className || ''}`}
        >
          { this.renderMenu() }
          { this.renderButtons() }
          <WrappedComponent
            {...this.props}
            currentTab={this.state.currentTab}
          />
        </Form>
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
            onClick={this.props.onSave.bind(this)}
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
          { _.map(this.props.menu.items, (item) => (
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
                onClick={this.props.onSave.bind(this)}
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
  }
);

export type EditPageProps = EditContainerProps & {
  currentTab: string
};
