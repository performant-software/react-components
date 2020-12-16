// @flow

import React, { useState } from 'react';
import {
  Button,
  Dimmer,
  Header,
  Icon,
  Image,
  Loader, Segment,
  Transition,
  Visibility
} from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import VideoPlayer from './VideoPlayer';
import './LazyVideo.css';

type Props = {
  dimmable: boolean,
  duration?: number,
  preview?: string,
  size?: string,
  src?: string
};

const LazyVideo = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const [dimmer, setDimmer] = useState(false);

  if (!visible) {
    return (
      <Visibility
        as='span'
        fireOnMount
        onTopVisible={() => setVisible(true)}
        updateOn='repaint'
      >
        <Loader
          active
          inline='centered'
          size={props.size}
        />
      </Visibility>
    );
  }

  return (
    <>
      <Transition
        duration={props.duration}
        transitionOnMount
        visible
      >
        <Dimmer.Dimmable
          as={Segment}
          className='lazy-video'
          compact
          onMouseEnter={() => setDimmer(true)}
          onMouseLeave={() => setDimmer(false)}
          padded
        >
          { props.preview && (
            <Image
              src={props.preview}
              size={props.size}
            />
          )}
          { !props.preview && (
            <Image>
              <Header
                icon
              >
                <Icon
                  name='image'
                />
              </Header>
            </Image>
          )}
          { props.src && props.dimmable && (
            <Dimmer
              active={dimmer}
            >
              <Button
                content={i18n.t('LazyVideo.buttons.play')}
                icon='video'
                onClick={() => setModal(true)}
                primary
              />
            </Dimmer>
          )}
        </Dimmer.Dimmable>
      </Transition>
      { props.src && (
        <VideoPlayer
          onClose={() => setModal(false)}
          open={modal}
          size='large'
          video={props.src}
        />
      )}
    </>
  );
};

LazyVideo.defaultProps = {
  dimmable: true,
  duration: 1000,
  size: 'medium'
};

export default LazyVideo;
