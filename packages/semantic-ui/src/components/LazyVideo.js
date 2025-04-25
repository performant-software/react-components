// @flow

import React, {
  useCallback,
  useState,
  type Element,
  type Node
} from 'react';
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
import DownloadButton from './DownloadButton';
import LazyLoader from './LazyLoader';
import VideoPlayer, { type Transcription } from './VideoPlayer';
import './LazyVideo.css';

type Props = {
  autoPlay?: boolean,
  children?: Node,
  dimmable: boolean,
  download?: string,
  duration?: number,
  embedded?: boolean,
  icon?: string | Element<any>,
  image?: any,
  name?: string,
  playButtonLabel?: string,
  preview?: ?string,
  size?: string,
  src?: string,
  transcriptions?: Array<Transcription>
};

const LazyVideo = (props: Props) => {
  const [dimmer, setDimmer] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(!(props.preview || props.src));
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(false);

  /**
   * Returns the list of class names for the image component.
   *
   * @type {function(*=): []}
   */
  const getClassNames = useCallback((defaultClass = null) => {
    const classNames = [];

    if (defaultClass) {
      classNames.push(defaultClass);
    }

    if (!loaded) {
      classNames.push('hidden');
    }

    return classNames.join(' ');
  }, [loaded]);

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
          { !loaded && (
            <LazyLoader
              active
              size={props.size}
            />
          )}
          { !error && props.preview && (
            <Image
              {...props.image}
              className={getClassNames()}
              onError={() => {
                setError(true);
                setLoaded(true);
              }}
              onLoad={() => {
                setError(false);
                setLoaded(true);
              }}
              src={props.preview}
              size={props.size}
            />
          )}
          { !error && !props.preview && props.src && (
            <Image
              {...props.image}
              className={getClassNames()}
              size={props.size}
            >
              <video
                onError={() => {
                  setError(true);
                  setLoaded(true);
                }}
                onLoadedData={() => {
                  setError(false);
                  setLoaded(true);
                }}
                src={props.src}
              />
            </Image>
          )}
          { (error || (!props.preview && !props.src)) && (
            <Image
              {...props.image}
              className={getClassNames('placeholder-image')}
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
                    content={props.playButtonLabel || i18n.t('LazyVideo.buttons.play')}
                    icon='video'
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
      { props.src && (
        <VideoPlayer
          autoPlay={props.autoPlay}
          embedded={props.embedded}
          icon={props.icon}
          onClose={() => setModal(false)}
          open={modal}
          placeholder={props.preview}
          size='large'
          transcriptions={props.transcriptions}
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

export type {
  Transcription
};
