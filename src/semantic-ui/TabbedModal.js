// @flow

import React, { Component, type Node } from 'react';
import { Header, Menu, Modal } from 'semantic-ui-react';
import _ from 'underscore';
import Element from '../utils/Element';
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
   * Renders the TabbedModal component.
   *
   * @returns {*}
   */
  render() {
    const classes = ['tabbed-modal'];
    if (this.props.className) {
      classes.push(this.props.className);
    }

    const tabs = Element.findByType(this.props.children, TabbedModal.Tab);
    const tab = _.find(tabs, (t) => t.props.name === this.state.tab);

    return (
      <Modal
        className={classes.join(' ')}
        {..._.omit(this.props, 'header', 'renderHeader', 'inlineTabs', 'className')}
      >
        <Modal.Header
          className={this.props.inlineTabs ? 'modal-header' : null}
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
          { tab && tab.props.children }
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
      />
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
