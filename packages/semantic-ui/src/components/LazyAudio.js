// @flow

import React, { useState, type Node } from 'react';
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
import AudioPlayer from './AudioPlayer';
import LazyLoader from './LazyLoader';
import './LazyAudio.css';

type Props = {
  children?: Node,
  dimmable: boolean,
  duration?: number,
  image?: any,
  preview?: string,
  size?: string,
  src?: string
};

const LazyAudio = (props: Props) => {
  const [dimmer, setDimmer] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(!props.preview);
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);

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
          className='lazy-audio'
          compact
          onBlur={() => setDimmer(false)}
          onMouseEnter={() => setDimmer(true)}
          onMouseLeave={() => setDimmer(false)}
        >
          { !loaded && (
            <LazyLoader
              active
              size={props.size}
            />
          )}
          { !error && props.preview && (
            <Image
              {...props.image}
              onError={() => {
                setError(true);
                setLoaded(true);
              }}
              onLoad={() => {
                setError(false);
                setLoaded(true);
              }}
              size={props.size}
              src={props.preview}
            />
          )}
          { (error || !props.preview) && (
            <Image
              {...props.image}
              className='placeholder-image'
              size={props.size}
            >
              <Icon
                name='file audio outline'
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
                    content={i18n.t('LazyAudio.buttons.play')}
                    icon='play circle outline'
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
        <AudioPlayer
          onClose={() => setModal(false)}
          open={modal}
          size='large'
          src={props.src}
        />
      )}
    </>
  );
};

LazyAudio.defaultProps = {
  dimmable: true,
  duration: 1000,
  preview: undefined,
  size: 'medium',
  src: undefined
};

export default LazyAudio;
