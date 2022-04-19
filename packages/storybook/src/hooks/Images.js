// @flow

import { faker } from '@faker-js/faker';
import React, { useMemo, type ComponentType } from 'react';
import _ from 'underscore';

const getRandomIntInclusive = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};

const withImages = (WrappedComponent: ComponentType<any>, imageCount: number) => (props: any) => {
  /**
   * Sets the images to pass to the wrapped component.
   *
   * @type {[]}
   */
  const images = useMemo(() => {
    const i = [];

    _.times(imageCount, (index) => {
      i.push({
        id: index,
        image: `https://picsum.photos/500?random=${index}`,
        title: faker.random.words(getRandomIntInclusive(1, 3)),
        subtitle: faker.date.past().toLocaleDateString(),
        description: faker.lorem.sentences(getRandomIntInclusive(1, 2)),
        alt: `Image ${index}`,
        type: 'image'
      });
    });

    return i;
  }, []);

  return (
    <WrappedComponent
      {...props}
      images={images}
    />
  );
};

export default withImages;
