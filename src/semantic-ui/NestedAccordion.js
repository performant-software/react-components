// @flow

import React, { Component } from 'react';
import {
  Accordion,
  Button,
  Grid,
  Icon
} from 'semantic-ui-react';
import _ from 'underscore';
import './NestedAccordion.css';

type Props = {
  getChildItems: (item: any) => Array<any>,
  isActive: (item: any) => boolean,
  isSelected: (item: any) => boolean,
  onItemClick: (item: any) => void,
  onItemToggle: (item: any) => void,
  renderItem: (item: any) => string | Component<{}>,
  rootItems: Array<any>,
  showToggle: (item: any) => boolean
};

class NestedAccordion extends Component<Props, {}> {
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
        styled
      />
    );
  }

  /**
   * Renders the checkmark for the passed item if selected.
   *
   * @param item
   *
   * @returns {null|*}
   */
  renderCheckmark(item: any) {
    if (!this.props.isSelected(item)) {
      return null;
    }

    return (
      <Icon
        color='green'
        name='check'
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
        active={this.props.isActive(item)}
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
          active={this.props.isActive(item)}
          onClick={this.props.onItemClick.bind(this, item)}
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
              width={7}
            >
              { this.props.renderItem(item) }
            </Grid.Column>
            <Grid.Column
              textAlign='right'
              width={8}
            >
              { this.renderCheckmark(item) }
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
          this.props.onItemToggle(item);
        }}
      />
    );
  }
}

export default NestedAccordion;
