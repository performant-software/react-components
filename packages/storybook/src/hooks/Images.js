// @flow

import { faker } from '@faker-js/faker';
import React, { useMemo, type ComponentType } from 'react';
import _ from 'underscore';
import NumberUtils from '../utils/Number';

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
        title: faker.random.words(NumberUtils.getRandomInt(1, 3)),
        subtitle: faker.date.past().toLocaleDateString(),
        description: faker.lorem.sentences(NumberUtils.getRandomInt(1, 2)),
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
