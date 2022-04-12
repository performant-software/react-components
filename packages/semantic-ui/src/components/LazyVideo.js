// @flow

import React, { useState, type Element, type Node } from 'react';
import {
  Button,
  Dimmer,
  Icon,
  Image,
  Loader,
  Segment,
  Transition,
  Visibility
} from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import VideoPlayer from './VideoPlayer';
import './LazyVideo.css';

type Props = {
  autoPlay?: boolean,
  children?: Node,
  dimmable: boolean,
  duration?: number,
  embedded?: boolean,
  icon?: string | Element<any>,
  image?: any,
  preview?: ?string,
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
        visible
      >
        <Dimmer.Dimmable
          as={Segment}
          className='lazy-video'
          compact
          onBlur={() => setDimmer(false)}
          onMouseEnter={() => setDimmer(true)}
          onMouseLeave={() => setDimmer(false)}
        >
          { props.preview && (
            <Image
              {...props.image}
              src={props.preview}
              size={props.size}
            />
          )}
          { !props.preview && (
            <Image
              {...props.image}
              className='placeholder-image'
              size={props.size}
            >
              <Icon
                name='image'
                size='big'
              />
            </Image>
          )}
          { (props.src || props.children) && props.dimmable && (
            <Dimmer
              active={dimmer}
            >
              <div
                className='buttons'
              >
                { props.src && (
                  <Button
                    content={i18n.t('LazyVideo.buttons.play')}
                    icon='video'
                    onClick={() => setModal(true)}
                    primary
                  />
                )}
                { props.children }
              </div>
            </Dimmer>
          )}
        </Dimmer.Dimmable>
      </Transition>
      { props.src && (
        <VideoPlayer
          autoPlay={props.autoPlay}
          embedded={props.embedded}
          icon={props.icon}
          onClose={() => setModal(false)}
          open={modal}
          placeholder={props.preview}
          size='large'
          video={props.src}
        />
      )}
    </>
  );
};

LazyVideo.defaultProps = {
  autoPlay: false,
  dimmable: true,
  duration: 1000,
  embedded: false,
  icon: 'right circle arrow',
  size: 'medium'
};

export default LazyVideo;
