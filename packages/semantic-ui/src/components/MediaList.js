// @flow

import React, { type Element } from 'react';
import { InfiniteScroll } from '@performant-software/shared-components';
import { Card, Image } from 'semantic-ui-react';
import _ from 'underscore';
import ListLoader from './ListLoader';
import PlayButton from './PlayButton';
import './MediaList.css';

type Item = {
  ...any,
  image: string,
  type: 'image' | 'video'
};

type Props = {
  items: Array<Item>,
  loading?: boolean,
  onBottomReached: () => void,
  onClick: (item: any, index: number) => void,
  renderDescription?: (item: Item) => Element<any>,
  renderExtra?: (item: Item) => Element<any>,
  renderHeader?: (item: Item) => Element<any>,
  renderMeta?: (item: Item) => Element<any>,
  textAlign?: 'left' | 'center' | 'right'
};

const MediaList = (props: Props) => (
  <InfiniteScroll
    offset={100}
    onBottomReached={props.onBottomReached}
  >
    <ListLoader
      active={props.loading || false}
    />
    <Card.Group
      doubling
      stackable
    >
      { _.map(props.items, (item, i) => (
        <Card
          onClick={props.onClick.bind(this, item, i)}
        >
          <Image
            alt={item.alt}
            src={item.image}
            style={{
              objectFit: 'cover'
            }}
          />
          { item.type === 'video' && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <PlayButton />
            </div>
          )}
          { (props.renderMeta || props.renderHeader || props.renderDescription) && (
            <Card.Content>
              { props.renderHeader && (
                <Card.Header
                  content={props.renderHeader(item)}
                  textAlign={props.textAlign}
                />
              )}
              { props.renderMeta && (
                <Card.Meta
                  content={props.renderMeta(item)}
                  textAlign={props.textAlign}
                />
              )}
              { props.renderDescription && (
                <Card.Description
                  content={props.renderDescription(item)}
                  textAlign={props.textAlign}
                />
              )}
            </Card.Content>
          )}
          { props.renderExtra && (
            <Card.Content
              content={props.renderExtra(item)}
              extra
              textAlign={props.textAlign}
            />
          )}
        </Card>
      ))}
    </Card.Group>
  </InfiniteScroll>
);

export default MediaList;
