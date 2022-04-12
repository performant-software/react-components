// @flow

import { Element } from '@react-components/shared';
import React, { Component, type Node } from 'react';
import { Header, Menu, Modal } from 'semantic-ui-react';
import _ from 'underscore';
import './TabbedModal.css';

type Props = {
  children: Node,
  className?: string,
  header: string,
  inlineTabs?: boolean,
  renderHeader?: () => Node
};

type State = {
  tab: any
};

class TabbedModal extends Component<Props, State> {
  static defaultProps: any;
  static Tab: any;

  /**
   * Constructs a new TabbedModal component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      tab: null
    };
  }

  /**
   * Parses the child components and sets the actions and tabs list on the state. The current tab is set to the first
   * child in the list of tabs.
   */
  componentDidMount() {
    const tab = _.first(Element.findByType(this.props.children, TabbedModal.Tab));
    this.setState({ tab: tab.props.name });
  }

  /**
   * Returns the header classes.
   *
   * @returns {string}
   */
  getHeaderClasses() {
    const classes = ['modal-header'];

    if (this.props.inlineTabs) {
      classes.push('inline-header');
    }

    return classes.join(' ');
  }

  /**
   * Returns the modal classes.
   *
   * @returns {string}
   */
  getModalClasses() {
    const classes = ['tabbed-modal'];

    if (this.props.className) {
      classes.push(this.props.className);
    }

    return classes.join(' ');
  }

  /**
   * Renders the TabbedModal component.
   *
   * @returns {*}
   */
  render() {
    const tabs = Element.findByType(this.props.children, TabbedModal.Tab);
    const tab = _.find(tabs, (t) => t.props.name === this.state.tab);

    return (
      <Modal
        className={this.getModalClasses()}
        {..._.omit(this.props, 'header', 'renderHeader', 'inlineTabs', 'className')}
      >
        <Modal.Header
          className={this.getHeaderClasses()}
        >
          { this.renderHeader() }
          <Menu
            float='right'
            secondary
          >
            { _.map(Element.findByType(this.props.children, TabbedModal.Tab), this.renderTab.bind(this)) }
          </Menu>
        </Modal.Header>
        <Modal.Content>
          { tab && (
            <div
              key={tab.props.name}
            >
              { tab.props.children }
            </div>
          )}
        </Modal.Content>
        { Element.findByType(this.props.children, Modal.Actions) }
      </Modal>
    );
  }

  /**
   * Renders the header.
   *
   * @returns {*}
   */
  renderHeader() {
    if (this.props.renderHeader) {
      return this.props.renderHeader();
    }

    return (
      <Header content={this.props.header} />
    );
  }

  /**
   * Renders the passed tab.
   *
   * @param tab
   *
   * @returns {*}
   */
  renderTab(tab: TabbedModal.Tab) {
    const { name } = tab.props;

    return (
      <Menu.Item
        active={this.state.tab === name}
        key={name}
        name={name}
        onClick={() => this.setState({ tab: name })}
      >
        { name }
      </Menu.Item>
    );
  }
}

const Tab = (props) => props.children;
Tab.displayName = 'Tab';

TabbedModal.Tab = Tab;

TabbedModal.defaultProps = {
  className: undefined,
  inlineTabs: true,
  renderHeader: undefined
};

export default TabbedModal;
