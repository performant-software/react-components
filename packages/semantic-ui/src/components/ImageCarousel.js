// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  Button,
  Dimmer,
  Grid,
  Image,
  Loader,
  Transition
} from 'semantic-ui-react';
import './ImageCarousel.css';

type ImageType = {
  caption?: string,
  src: string
};

type Props = {
  images: Array<ImageType>,
  onClose: () => void
};

const ImageCarousel = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  /**
   * Sets the current image based on the current index.
   *
   * @type {*}
   */
  const image = useMemo(() => {
    let value;

    if (props.images && props.images.length > currentIndex) {
      value = props.images[currentIndex];
    }

    return value;
  }, [currentIndex, props.images]);

  /**
   * Sets the new index value.
   *
   * @type {(function(*): void)|*}
   */
  const onIndexChange = useCallback((increment) => {
    const newIndex = currentIndex + increment;

    if (newIndex >= 0 && newIndex < props.images.length) {
      setCurrentIndex(newIndex);
      setVisible(false);
    }
  }, [currentIndex, props.images]);

  /**
   * Sets up the component when initially mounted.
   */
  useEffect(() => {
    // Disabled scrolling on the page when carousel is visible.
    if (document.body) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      // Re-enable scrolling
      if (document.body) {
        document.body.style.overflow = 'auto';
      }
    };
  }, []);

  return (
    <Dimmer
      active
      className='image-carousel'
      page
    >
      <Grid
        padded
      >
        <Grid.Row>
          <Grid.Column
            textAlign='right'
          >
            <Button
              icon='times'
              onClick={props.onClose}
              size='huge'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          className='image-content'
        >
          <Grid.Column>
            { props.images && props.images.length > 1 && (
              <Button
                disabled={currentIndex === 0}
                icon='chevron left'
                onClick={() => onIndexChange(-1)}
                size='massive'
              />
            )}
          </Grid.Column>
          <Grid.Column
            className='image-container'
          >
            { !visible && (
              <Loader
                active
              />
            )}
            <Transition
              animation='fade'
              duration={500}
              visible={visible}
            >
              <Image
                src={image?.src}
                onLoad={() => setVisible(true)}
              />
            </Transition>
          </Grid.Column>
          <Grid.Column>
            { props.images && props.images.length > 1 && (
              <Button
                disabled={currentIndex === props.images.length - 1}
                icon='chevron right'
                onClick={() => onIndexChange(1)}
                size='massive'
              />
            )}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column
            textAlign='center'
          >
            { image?.caption }
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Dimmer>
  );
};

export default ImageCarousel;
