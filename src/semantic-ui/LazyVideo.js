// @flow

import React, { useState } from 'react';
import {
  Button,
  Dimmer, Icon,
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
        <>
          { props.src && props.preview && (
            <Dimmer.Dimmable
              as={Image}
              dimmed={props.dimmable && dimmer}
              dimmer={{
                active: props.dimmable && dimmer,
                content: (
                  <Button
                    content={i18n.t('LazyVideo.buttons.play')}
                    icon='video'
                    onClick={() => setModal(true)}
                    primary
                    size={props.size}
                  />
                )
              }}
              onMouseEnter={() => setDimmer(true)}
              onMouseLeave={() => setDimmer(false)}
              size={props.size}
              src={props.preview}
            />
          )}
          { !props.preview && (
            <Segment
              className='lazy-video'
              compact
              onMouseEnter={() => setDimmer(true)}
              onMouseLeave={() => setDimmer(false)}
              padded
              placeholder
              size={props.size}
            >
              <Icon
                name='image'
                size='huge'
              />
              { props.src && (
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
            </Segment>
          )}
        </>
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
