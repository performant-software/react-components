// @flow

import React, { Component, type Element } from 'react';
import {
  Accordion,
  Button
} from 'semantic-ui-react';
import _ from 'underscore';
import './NestedAccordion.css';

type Props = {
  defaultActive?: Array<number> | Array<any>,
  getChildItems: (item: any) => Array<any>,
  inverted?: boolean,
  isItemActive?: (item: any) => boolean,
  multipleItemTypes?: boolean,
  onItemClick?: (item: any) => void,
  onItemToggle?: (item: any) => void,
  renderItem: (item: any) => string | Element<any>,
  renderRight?: (item: any) => string | Element<any>,
  rootItems: Array<any>,
  showToggle: (item: any) => boolean,
  styled?: boolean,
  toggleOnClick?: boolean
};

type State = {
  activeItems: Array<any>
};

class NestedAccordion extends Component<Props, State> {
  static defaultProps: any;

  /**
   * Constructs a new NestedAccordion component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      activeItems: []
    };
  }

  /**
   * Sets the activeItems on the state if the defaultActive prop changes.
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps: Props) {
    if (prevProps.defaultActive !== this.props.defaultActive
      && this.props.defaultActive
      && this.props.defaultActive.length) {
      const isActive = this.props.defaultActive.some(
        (active) => typeof active !== 'object' || !_.has(active, 'id') || !_.has(active, 'type')
      );
      if (this.props.multipleItemTypes && !isActive) {
        this.setState({ activeItems: this.props.defaultActive });
      } else {
        this.setState({ activeItems: _.map(this.props.defaultActive, (id) => ({ id })) });
      }
    }
  }

  /**
   * Returns the toggle button class names.
   *
   * @param item
   *
   * @returns {string}
   */
  getButtonClass(item: any) {
    const classNames = ['accordion-button'];

    if (this.props.showToggle && !this.props.showToggle(item)) {
      classNames.push('hidden');
    }

    return classNames.join(' ');
  }

  /**
   * Returns true if the passed item is active.
   *
   * @param item
   *
   * @returns {boolean}
   */
  isActive(item: any) {
    let properties = { id: item.id };
    if (this.props.multipleItemTypes && _.has(item, 'type')) {
      properties = { id: item.id, type: item.type };
    }
    return !!_.findWhere(this.state.activeItems, properties);
  }

  /**
   * Returns true if the passed item is active.
   *
   * @param item
   *
   * @returns {*}
   */
  isItemActive(item: any) {
    return this.props.isItemActive && this.props.isItemActive(item);
  }

  /**
   * Calls the onItemClick prop. Optionally toggles the item active.
   *
   * @param item
   */
  onItemClick(item: any) {
    if (this.props.toggleOnClick) {
      this.onItemToggle(item);
    }

    if (this.props.onItemClick) {
      this.props.onItemClick(item);
    }
  }

  /**
   * Toggles the passed item and calls the onItemToggle property.
   *
   * @param item
   */
  onItemToggle(item: any) {
    if (this.props.onItemToggle) {
      this.props.onItemToggle(item);
    }

    this.toggleItem(item);
  }

  /**
   * Renders the NestedAccordion component.
   *
   * @returns {*}
   */
  render() {
    return (
      <Accordion
        className='nested-accordion'
        fluid
        inverted={this.props.inverted}
        panels={_.map(this.props.rootItems, this.renderPanel.bind(this))}
        styled={this.props.styled}
      />
    );
  }

  /**
   * Renders the content for the passed item if the item has child elements.
   *
   * @param item
   *
   * @returns {null|*}
   */
  renderContent(item: any) {
    const children = this.props.getChildItems(item);
    if (!(children && children.length)) {
      return null;
    }

    return (
      <Accordion.Content
        active={this.isActive(item)}
      >
        <div>
          <Accordion.Accordion
            panels={_.map(children, this.renderPanel.bind(this))}
          />
        </div>
      </Accordion.Content>
    );
  }

  /**
   * Renders the title and content (panel) for the passed item.
   *
   * @param item
   *
   * @returns {*}
   */
  renderPanel(item: any) {
    return (
      <div key={_.has(item, 'type') ? `${item.type}-${item.id}` : item.id}>
        <Accordion.Title
          active={this.isActive(item)}
          onClick={this.onItemClick.bind(this, item)}
          style={{
            backgroundColor: this.isItemActive(item) ? 'rgba(255, 255, 255, 0.08)' : undefined
          }}
        >
          <div
            className='container'
          >
            <div>
              { this.renderToggle(item) }
              <div
                className='item-container'
              >
                { this.props.renderItem(item) }
              </div>
            </div>
            { this.props.renderRight && (
              <div
                className='right-container'
              >
                { this.props.renderRight(item) }
              </div>
            )}
          </div>
        </Accordion.Title>
        { this.renderContent(item) }
      </div>
    );
  }

  /**
   * Renders the open/close toggle for the passed item.
   *
   * @param item
   *
   * @returns {null|*}
   */
  renderToggle(item: any) {
    return (
      <Button
        compact
        className={this.getButtonClass(item)}
        icon='dropdown'
        inverted={this.props.inverted}
        onClick={(e) => {
          // Since the containing row also has an onclick, we'll want to prevent that from being triggered.
          e.stopPropagation();
          this.onItemToggle(item);
        }}
      />
    );
  }

  /**
   * Toggles the passed item as active.
   *
   * @param item
   */
  toggleItem(item: any) {
    this.setState((state) => ({
      activeItems: this.isActive(item)
        ? _.filter(state.activeItems, (i) => {
          if (this.props.multipleItemTypes && _.has(item, 'type') && _.has(i, 'type')) {
            return i.id !== item.id || i.type !== item.type;
          }
          return i.id !== item.id;
        })
        : [...state.activeItems, item]
    }));
  }
}

NestedAccordion.defaultProps = {
  defaultActive: [],
  inverted: false,
  isItemActive: undefined,
  multipleItemTypes: false,
  onItemClick: () => {},
  renderRight: () => {},
  styled: true,
  toggleOnClick: false
};

export default NestedAccordion;
