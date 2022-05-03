// @flow

import React, { useEffect, useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import _ from 'underscore';
import MediaList from '../../../semantic-ui/src/components/MediaList';
import withImages from '../hooks/Images';

export default {
  title: 'Components/Semantic UI/MediaList',
  decorators: [withA11y, withKnobs]
};

const IMAGE_COUNT = 50;

export const Default = withImages((props) => (
  <MediaList
    items={_.map(props.images, (i, index) => ({ ...i, meta: `Image ${index}` }))}
    onBottomReached={() => {}}
    onClick={action('item click')}
    renderHeader={(item) => item.title}
    renderMeta={(item) => item.subtitle}
  />
), IMAGE_COUNT);

export const InfiniteScroll = withImages((props) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  const PER_PAGE = 10;

  useEffect(() => {
    if (page) {
      const startIndex = ((page - 1) * PER_PAGE) + 1;
      const endIndex = page * PER_PAGE;

      setItems((prevItems) => [
        ...prevItems,
        ...props.images.slice(startIndex, endIndex)
      ]);
    }
  }, [page]);

  return (
    <MediaList
      items={items}
      onBottomReached={() => setPage((prevPage) => prevPage + 1)}
      onClick={action('item click')}
    />
  );
}, 200);

export const Loading = withImages((props) => (
  <MediaList
    items={_.map(props.images, (i, index) => ({ ...i, meta: `Image ${index}` }))}
    loading
    onBottomReached={() => {}}
    onClick={action('item click')}
    renderHeader={(item) => item.title}
    renderMeta={(item) => item.subtitle}
  />
), IMAGE_COUNT);
