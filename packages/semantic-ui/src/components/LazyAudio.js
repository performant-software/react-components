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
import DownloadButton from './DownloadButton';
import LazyLoader from './LazyLoader';
import './LazyAudio.css';

type Props = {
  children?: Node,
  dimmable: boolean,
  download?: string,
  duration?: number,
  image?: any,
  name?: string,
  playButtonLabel?: string,
  preview?: string,
  size?: string,
  src?: string
};

const LazyAudio = ({dimmable = true, duration = 1000, preview = undefined, size = 'medium', src = undefined, ...props}: Props) => {
  const [dimmer, setDimmer] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(!preview);
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
          size={size}
        />
      </Visibility>
    );
  }

  return (
    <>
      <Transition
        duration={duration}
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
              size={size}
            />
          )}
          { !error && preview && (
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
              size={size}
              src={preview}
            />
          )}
          { (error || !preview) && (
            <Image
              {...props.image}
              className='placeholder-image'
              size={size}
            >
              <Icon
                name='file audio outline'
                size='big'
              />
            </Image>
          )}
          { (src || props.children) && dimmable && (
            <Dimmer
              active={dimmer}
            >
              <div
                className='buttons'
              >
                { src && (
                  <Button
                    content={props.playButtonLabel || i18n.t('LazyAudio.buttons.play')}
                    icon='play circle outline'
                    onClick={() => setModal(true)}
                    primary
                  />
                )}
                { props.download && (
                  <DownloadButton
                    color='green'
                    filename={props.name}
                    url={props.download}
                  />
                )}
                { props.children }
              </div>
            </Dimmer>
          )}
        </Dimmer.Dimmable>
      </Transition>
      { src && (
        <AudioPlayer
          onClose={() => setModal(false)}
          open={modal}
          size='large'
          src={src}
        />
      )}
    </>
  );
};

export default LazyAudio;
