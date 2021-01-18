// @flow

import React, { Component, type Element } from 'react';
import {
  Button,
  Card,
  Dimmer,
  Header,
  Icon,
  Item,
  Loader,
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
  className: string,
  items: Array<any>,
  loading: boolean,
  onDrag?: (dragIndex: number, hoverIndex: number) => void,
  renderAdditionalContent?: (item: any) => Element<any>,
  renderDescription?: (item: any) => Element<any>,
  renderEmptyList: () => Element<any>,
  renderExtra?: (item: any) => Element<any>,
  renderHeader?: (item: any) => Element<any>,
  renderImage?: (item: any) => Element<any>,
  renderMeta?: (item: any) => Element<any>,
  view: number
};

/**
 * The Items component is used as the presentation for a list of records. The component renders both a list
 * (see Semantic-UI List) and grid (see Semantic-UI Card) views.
 */
class Items extends Component<Props, {}> {
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
   * Renders the Items component.
   *
   * @returns {*}
   */
  render() {
    return (
      <div
        className={this.getClassName()}
      >
        { this.renderLoading() }
        { this.renderList() }
        { this.renderGrid() }
        { this.renderEmptyList() }
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
    const card = (
      <Card
        key={index}
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
        { this.props.actions && this.props.actions.length && (
          <Card.Content
            extra
            textAlign='center'
          >
            { _.map(this.getActions(item), (action, actionIndex) => (
              <Button
                basic
                color={action.resolveColor ? action.resolveColor(item) : action.color}
                icon={action.resolveIcon ? action.resolveIcon(item) : action.icon}
                key={actionIndex}
                onClick={action.onClick.bind(this, item)}
              />
            ))}
          </Card.Content>
        )}
      </Card>
    );

    if (!this.props.onDrag) {
      return card;
    }

    return (
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
      <Card.Group>
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
    const listItem = (
      <Item
        key={index}
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
              basic={action.basic}
              color={action.resolveColor ? action.resolveColor(item) : action.color}
              content={action.resolveName ? action.resolveName(item) : action.label}
              key={actionIndex}
              icon={action.resolveIcon ? action.resolveIcon(item) : action.icon}
              onClick={action.onClick.bind(this, item)}
            />
          ))}
        </Item.Content>
        { this.props.renderAdditionalContent && this.props.renderAdditionalContent(item) }
      </Item>
    );

    if (!this.props.onDrag) {
      return listItem;
    }

    return (
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
        relaxed='very'
      >
        { _.map(this.props.items, this.renderItem.bind(this)) }
      </Item.Group>
    );
  }

  /**
   * Renders the loading indicator.
   *
   * @returns {null|*}
   */
  renderLoading() {
    if (!this.props.loading) {
      return null;
    }

    return (
      <Dimmer
        active
        inverted
      >
        <Loader
          content={i18n.t('Items.loading')}
        />
      </Dimmer>
    );
  }
}

Items.defaultProps = {
  actions: []
};

export default useItemsToggle(useList(Items));
