// @flow

import React, { Component, type Element } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Header,
  Icon,
  Item,
  Popup,
  Segment
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import useList from './List';
import useItemsToggle, { Views } from './ItemsToggle';
import Draggable from './Draggable';
import './Items.css';

import type { Props as ListProps } from './List';

type Props = ListProps & {
  /**
   * Renders the Card/Item component as the passed component.
   */
  as?: Element<any>,

  /**
   * Props to supply to the Card/Item component.
   */
  asProps?: any,

  /**
   * Child elements to append below the list content.
   */
  children?: Element<any>,

  /**
   * Callback returning <code>true</code> if the row for the passed item is selected.
   */
  isRowSelected?: (item: any) => boolean,

  /**
   * An array of objects to render as rows in the list.
   */
  items: Array<any>,

  /**
   * The number of cards to display per row in the grid view.
   */
  itemsPerRow?: number,

  /**
   * If true, the list items will be formatted as a link.
   */
  link?: boolean,

  /**
   * Callback fired when a table row is dragged
   */
  onDrag?: (dragIndex: number, hoverIndex: number) => void,

  /**
   * Callback fired when the passed item is selected. This callback is <i>only</i> fired if the <code>selectable</code>
   * prop is passed as <code>true</code>.
   */
  onRowSelect?: (item: any) => void,

  /**
   * Callback fired when the select all checkbox is checked.
   */
  onSelectAllRows?: (items: Array<any>) => void,

  /**
   * A function that returns a JSX element to render as additional card content.
   */
  renderAdditionalContent?: (item: any) => Element<any>,

  /**
   * A function that returns a JSX element to render as the card description.
   * See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.
   */
  renderDescription?: (item: any) => Element<any>,

  /**
   * A function that returns a JSX element to render when the list has no items.
   */
  renderEmptyList?: () => Element<any>,

  /**
   * A function that returns a JSX element to render as the card extra content.
   * See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.
   */
  renderExtra?: (item: any) => Element<any>,

  /**
   * A function that returns a JSX element to render as the card header.
   * See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.
   */
  renderHeader?: (item: any) => Element<any>,

  /**
   * A function that returns a JSX element to render as the card image.
   * See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.
   */
  renderImage?: (item: any) => Element<any>,

  /**
   * A function that returns a JSX element to render as the card meta.
   * See Semantic UI <a href="https://react.semantic-ui.com/views/card/">Card</a>.
   */
  renderMeta?: (item: any) => Element<any>,

  /**
   * If <code>true</code>, a selection box will display for each row.
   */
  selectable?: boolean,

  /**
   * Toggles between list view and grid view. This prop is provided by the <code>ItemsToggle</code> higher-order
   * component.
   */
  view: number
};

/**
 * The <code>Items</code> component is used as the presentation for a list of records. The component renders
 * both a <a href="https://react.semantic-ui.com/elements/list/" target="_blank">List</a> and
 * <a href="https://react.semantic-ui.com/views/card/" target="_blank">Card</a> views.
 */
class ItemsClass extends Component<Props, {}> {
  static defaultProps: any;

  /**
   * Returns the list of actions for the passed item.
   *
   * @param item
   *
   * @returns {Array<*>}
   */
  getActions(item) {
    return this.props.actions
      .filter((action) => !action.accept || action.accept(item))
      .map((action) => {
        let defaults = {};

        if (action.name === 'edit') {
          defaults = {
            basic: true,
            label: i18n.t('ItemList.actions.edit')
          };
        } else if (action.name === 'copy') {
          defaults = {
            basic: true,
            label: i18n.t('ItemList.actions.copy')
          };
        } else if (action.name === 'delete') {
          defaults = {
            basic: true,
            color: 'red',
            label: i18n.t('ItemList.actions.delete')
          };
        }

        return _.defaults(action, defaults);
      });
  }

  /**
   * Returns a space delimited string of class names.
   *
   * @returns {string}
   */
  getClassName() {
    const classNames = ['item-list'];

    if (this.props.className) {
      classNames.push(this.props.className);
    }

    return classNames.join(' ');
  }

  /**
   * Returns as asProps function value for the passed item, if provided.
   *
   * @param item
   *
   * @returns {*|{}}
   */
  getItemProps(item) {
    return (this.props.asProps && this.props.asProps(item)) || {};
  }

  /**
   * Returns true if the component has the necessary props to render itself in the "selectable" state.
   *
   * @returns {boolean}
   */
  isSelectable() {
    return !!(this.props.selectable && this.props.isRowSelected && this.props.onRowSelect);
  }

  /**
   * Renders the Items component.
   *
   * @returns {*}
   */
  render() {
    return (
      <div
        className={this.getClassName()}
      >
        { this.renderList() }
        { this.renderGrid() }
        { this.renderEmptyList() }
        { this.props.children }
      </div>
    );
  }

  /**
   * Renders the card for the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {*}
   */
  renderCard(item, index) {
    const actions = this.getActions(item);

    let card = (
      <Card
        as={this.props.as}
        key={item.id || index}
        link={this.props.link}
        {...this.getItemProps(item)}
      >
        { this.props.renderImage && this.props.renderImage(item) }
        <Card.Content>
          { this.props.renderHeader && (
            <Card.Header>
              { this.props.renderHeader(item) }
            </Card.Header>
          )}
          { this.props.renderMeta && (
            <Card.Meta>
              { this.props.renderMeta(item) }
            </Card.Meta>
          )}
          { this.props.renderDescription && (
            <Card.Description>
              { this.props.renderDescription(item) }
            </Card.Description>
          )}
        </Card.Content>
        { this.props.renderExtra && (
          <Card.Content
            extra
          >
            { this.props.renderExtra(item) }
          </Card.Content>
        )}
        { !_.isEmpty(actions) && (
          <Card.Content
            extra
            textAlign='center'
          >
            { _.map(actions, this.renderCardAction.bind(this, item)) }
            { this.isSelectable() && (
              <Button
                aria-label='Select'
                basic
                color={this.props.isRowSelected && this.props.isRowSelected(item) ? 'green' : undefined}
                icon='checkmark'
                onClick={this.props.onRowSelect && this.props.onRowSelect.bind(this, item)}
              />
            )}
          </Card.Content>
        )}
      </Card>
    );

    if (this.props.onDrag) {
      card = (
        <Draggable
          id={item.id || item.uid}
          index={index}
          item={item}
          key={item.id || item.uid}
          onDrag={this.props.onDrag.bind(this)}
        >
          { card }
        </Draggable>
      );
    }

    return card;
  }

  /**
   * Renders the action button for the passed item.
   *
   * @param action
   * @param index
   * @param item
   *
   * @returns {JSX.Element}
   */
  renderCardAction(item, action, index) {
    const actionButton = (
      <Button
        as={action.as}
        {...((action.asProps && action.asProps(item)) || {})}
        aria-label={action.name}
        basic
        color={action.resolveColor ? action.resolveColor(item) : action.color}
        icon={action.resolveIcon ? action.resolveIcon(item) : action.icon}
        key={index}
        onClick={action.onClick && action.onClick.bind(this, item)}
        size={action.size}
      />
    );

    // Wrap the button in a popup if the action specifies a popup attribute
    if (action.popup) {
      const { content, title } = action.popup;

      return (
        <Popup
          content={content}
          header={title}
          hideOnScroll
          key={index}
          mouseEnterDelay={500}
          position='top right'
          trigger={actionButton}
        />
      );
    }

    return actionButton;
  }

  /**
   * Renders the empty list.
   *
   * @returns {null|*}
   */
  renderEmptyList() {
    if (this.props.loading || (this.props.items && this.props.items.length)) {
      return null;
    }

    if (this.props.renderEmptyList) {
      return this.props.renderEmptyList();
    }

    return (
      <Segment
        className='empty-list'
        padded='very'
        textAlign='center'
      >
        <Header
          icon
        >
          <Icon
            name='file outline'
          />
        </Header>
        { this.props.renderEmptyMessage() }
      </Segment>
    );
  }

  /**
   * Renders the grid view.
   *
   * @returns {null|*}
   */
  renderGrid() {
    if (this.props.view !== Views.grid || !(this.props.items && this.props.items.length)) {
      return null;
    }

    return (
      <Card.Group
        itemsPerRow={this.props.itemsPerRow}
      >
        { _.map(this.props.items, this.renderCard.bind(this)) }
      </Card.Group>
    );
  }

  /**
   * Renders the list item for the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {*}
   */
  renderItem(item, index) {
    let listItem = (
      <Item
        as={this.props.as}
        key={item.id || index}
        {...this.getItemProps(item)}
      >
        { this.props.renderImage && (
          <Item.Image>
            { this.props.renderImage(item) }
          </Item.Image>
        )}
        <Item.Content
          className='primary-content'
        >
          { this.props.renderHeader && (
            <Item.Header>
              { this.props.renderHeader(item) }
            </Item.Header>
          )}
          { this.props.renderMeta && (
            <Item.Meta>
              { this.props.renderMeta(item) }
            </Item.Meta>
          )}
          { this.props.renderDescription && (
            <Item.Description>
              { this.props.renderDescription(item) }
            </Item.Description>
          )}
          { this.props.renderExtra && (
            <Item.Extra>
              { this.props.renderExtra(item) }
            </Item.Extra>
          )}
          { _.map(this.getActions(item), (action, actionIndex) => (
            <Button
              as={action.as}
              {...((action.asProps && action.asProps(item)) || {})}
              basic={action.basic}
              color={action.resolveColor ? action.resolveColor(item) : action.color}
              content={action.resolveName ? action.resolveName(item) : action.label}
              key={actionIndex}
              icon={action.resolveIcon ? action.resolveIcon(item) : action.icon}
              onClick={action.onClick && action.onClick.bind(this, item)}
              size={action.size}
            />
          ))}
        </Item.Content>
        { this.props.renderAdditionalContent && this.props.renderAdditionalContent(item) }
        { this.isSelectable() && (
          <div
            className='checkbox-container'
          >
            <Checkbox
              checked={this.props.isRowSelected && this.props.isRowSelected(item)}
              onChange={this.props.onRowSelect && this.props.onRowSelect.bind(this, item)}
            />
          </div>
        )}
      </Item>
    );

    if (this.props.onDrag) {
      listItem = (
        <Draggable
          id={item.id || item.uid}
          index={index}
          item={item}
          key={item.id || item.uid}
          onDrag={this.props.onDrag.bind(this)}
        >
          { listItem }
        </Draggable>
      );
    }

    return listItem;
  }

  /**
   * Renders the list view.
   *
   * @returns {null|*}
   */
  renderList() {
    if (this.props.view !== Views.list || !(this.props.items && this.props.items.length)) {
      return null;
    }

    return (
      <Item.Group
        divided
        link={this.props.link}
        relaxed='very'
      >
        { _.map(this.props.items, this.renderItem.bind(this)) }
      </Item.Group>
    );
  }
}

ItemsClass.defaultProps = {
  actions: []
};

const Items = useItemsToggle(useList(ItemsClass));
export default Items;

export type {
  Props
};
