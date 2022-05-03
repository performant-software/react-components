// @flow

import React, { useCallback, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import MediaGallery from '../../../semantic-ui/src/components/MediaGallery';
import video from '../assets/SampleVideo.mp4';
import withImages from '../hooks/Images';

export default {
  title: 'Components/Semantic UI/MediaGallery',
  decorators: [withA11y, withKnobs]
};

const IMAGE_COUNT = 50;

export const Default = withImages((props) => {
  const [index, setIndex] = useState(0);

  /**
   * Increments the image index.
   *
   * @type {(function(): void)|*}
   */
  const onNext = useCallback(() => {
    let nextIndex = index + 1;

    if (nextIndex >= props.images.length) {
      nextIndex = 0;
    }

    setIndex(nextIndex);
  }, [index]);

  /**
   * Decrements the image index.
   *
   * @type {(function(): void)|*}
   */
  const onPrevious = useCallback(() => {
    let nextIndex = index - 1;

    if (nextIndex < 0) {
      nextIndex = props.images.length - 1;
    }

    setIndex(nextIndex);
  }, [index]);

  return (
    <MediaGallery
      item={props.images[index]}
      label={`${index + 1} of ${props.images.length}`}
      onClose={action('close')}
      onNext={onNext}
      onPrevious={onPrevious}
      renderContent={() => props.images && props.images[index] && (
        <div
          style={{
            marginTop: '1em',
            textAlign: 'center'
          }}
        >
          { props.images[index].description }
        </div>
      )}
      visible
    />
  );
}, IMAGE_COUNT);

export const Video = () => (
  <MediaGallery
    item={{
      src: video,
      type: 'video'
    }}
    onClose={action('close')}
    visible
  />
);
