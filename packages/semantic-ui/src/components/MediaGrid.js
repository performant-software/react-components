// @flow

import React, { useEffect, useState } from 'react';
import { Image, Loader } from 'semantic-ui-react';
import _ from 'underscore';
import './MediaGrid.css';

type Item = {
  image: string
};

type Props = {
  items: Array<Item>,
  loading?: boolean,
  onClick?: (item: Item) => void
};

const MAX_IMAGES = 5;

const MediaGrid = (props: Props) => {
  const [items, setItems] = useState([]);

  /**
   * Grab the list of image URLs to display and save it on the sate.
   */
  useEffect(() => {
    const list = [];

    for (let i = 0; i < props.items.length && list.length < MAX_IMAGES; i += 1) {
      if (!_.isEmpty(props.items[i].image)) {
        list.push(props.items[i]);
      }
    }

    setItems(list);
  }, [props.items]);

  // Return null if no items are passed
  if (_.isEmpty(props.items)) {
    return null;
  }

  return (
    <div
      className='mediaGrid'
    >
      <Loader
        active={props.loading}
      />
      <div
        className={`grid${items.length}`}
      >
        { _.map(items, (item, index) => (
          <div
            className='mediaImage'
            key={index}
          >
            <Image
              onClick={() => props.onClick && props.onClick(item)}
              src={item.image}
              style={{
                cursor: props.onClick ? 'pointer' : undefined,
                objectFit: 'cover',
                width: '100%'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaGrid;
