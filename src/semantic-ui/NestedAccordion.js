// @flow

import React, { Component } from 'react';
import {
  Accordion,
  Button,
  Grid
} from 'semantic-ui-react';
import _ from 'underscore';
import './NestedAccordion.css';

type Props = {
  getChildItems: (item: any) => Array<any>,
  onItemClick?: (item: any) => void,
  onItemToggle: (item: any) => void,
  renderItem: (item: any) => string | Component<{}>,
  renderRight?: (item: any) => string | Component<{}>,
  rootItems: Array<any>,
  showToggle: (item: any) => boolean
};

type State = {
  activeItems: Array<any>
}

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
   * Returns true if the passed item is active.
   *
   * @param item
   *
   * @returns {boolean}
   */
  isActive(item: any) {
    return !!_.findWhere(this.state.activeItems, { id: item.id });
  }

  /**
   * Toggles the passed item and calls the onItemToggle property.
   *
   * @param item
   */
  onItemToggle(item: any) {
    this.props.onItemToggle(item);
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
        panels={_.map(this.props.rootItems, this.renderPanel.bind(this))}
        styled={props.styled}
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
      <>
        <Accordion.Title
          active={this.isActive(item)}
          onClick={this.props.onItemClick && this.props.onItemClick.bind(this, item)}
        >
          <Grid
            verticalAlign='middle'
          >
            <Grid.Column
              width={1}
            >
              { this.renderToggle(item) }
            </Grid.Column>
            <Grid.Column
              width={13}
            >
              { this.props.renderItem(item) }
            </Grid.Column>
            <Grid.Column
              textAlign='right'
              width={2}
            >
              { this.props.renderRight && this.props.renderRight(item) }
            </Grid.Column>
          </Grid>
        </Accordion.Title>
        { this.renderContent(item) }
      </>
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
    if (!this.props.showToggle(item)) {
      return null;
    }

    return (
      <Button
        compact
        className='accordion-button'
        icon='dropdown'
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
        ? _.filter(state.activeItems, (i) => i.id !== item.id)
        : [...state.activeItems, item]
    }));
  }
}

NestedAccordion.defaultProps = {
  onItemClick: () => {},
  renderRight: () => {},
  styled: true
};

export default NestedAccordion;
