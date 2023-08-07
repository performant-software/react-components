// @flow

import React, { useEffect, useMemo, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';
import MasonryGrid from '../../../semantic-ui/src/components/MasonryGrid';
import withImages from '../hooks/Images';

export default {
  title: 'Components/Semantic UI/MasonryGrid',
  decorators: [withKnobs]
};

const IMAGE_COUNT = 50;

export const Default = withImages((props) => (
  <MasonryGrid
    columns={3}
    gap={20}
    items={props.images}
    onClick={action('click')}
    page={1}
    pages={1}
  />
), IMAGE_COUNT);

export const Loading = () => (
  <MasonryGrid
    columns={3}
    gap={20}
    items={[]}
    loading
    page={1}
    pages={1}
  />
);

export const Pagination = withImages((props) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  const PER_PAGE = 20;
  const pages = useMemo(() => Math.ceil(props.images.length / PER_PAGE), [items.length]);

  useEffect(() => {
    const startIndex = ((page - 1) * PER_PAGE) + 1;
    const endIndex = page * PER_PAGE;

    setItems(props.images.slice(startIndex, endIndex));
  }, [page]);

  return (
    <MasonryGrid
      columns={3}
      gap={20}
      items={items}
      onPageChange={(activePage) => {
        setPage(activePage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      page={page}
      pages={pages}
    />
  );
}, IMAGE_COUNT);
