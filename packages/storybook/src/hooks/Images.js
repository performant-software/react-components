// @flow

import { faker } from '@faker-js/faker';
import React, { useEffect, useState, type ComponentType } from 'react';
import _ from 'underscore';
import NumberUtils from '../utils/Number';

const withImages = (WrappedComponent: ComponentType<any>, imageCount: number) => (props: any) => {
  const [images, setImages] = useState([]);

  /**
   * Sets the images to pass to the wrapped component.
   *
   * @type {[]}
   */
  useEffect(() => {
    const i = [];

    _.times(imageCount, (index) => {
      i.push({
        id: index,
        image: `https://picsum.photos/500?random=${index}`,
        title: faker.random.words(NumberUtils.getRandomInt(1, 3)),
        subtitle: faker.date.past().toLocaleDateString(),
        description: faker.lorem.sentences(NumberUtils.getRandomInt(1, 2)),
        alt: `Image ${index}`,
        type: 'image'
      });
    });

    setImages(i);
  }, []);

  return (
    <WrappedComponent
      {...props}
      images={images}
      setImages={setImages}
    />
  );
};

export default withImages;
