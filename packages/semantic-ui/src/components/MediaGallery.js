// @flow

import React, { useState, type Element } from 'react';
import {
  Button,
  Dimmer, Image,
  Loader,
  Transition
} from 'semantic-ui-react';
import PlayButton from './PlayButton';
import VideoPlayer, { type Transcription } from './VideoPlayer';
import VideoPlayerButton from './VideoPlayerButton';
import './MediaGallery.css';

type Item = {
  image?: string,
  embedded?: boolean,
  preview?: string,
  src?: string,
  transcriptions?: Array<Transcription>,
  type: 'image' | 'video'
};

type Props = {
  item: Item,
  label?: string,
  loading?: boolean,
  onClose?: () => void,
  onNext?: () => void,
  onPrevious?: () => void,
  renderContent?: () => Element<any>,
  visible: boolean
};

const MediaGallery = (props: Props) => {
  const [video, setVideo] = useState(false);

  return (
    <Dimmer
      active={props.visible}
      className='media-gallery mediaGallery'
      page
    >
      { props.loading && (
        <Loader
          active
          size='big'
        />
      )}
      { props.item && (
        <>
          <Transition
            animation='fade'
            mountOnShow={false}
          >
            <div
              className='imageContainer'
            >
              <Image
                src={props.item.image}
                style={{
                  objectFit: 'contain'
                }}
              />
              { props.item.type === 'video' && (
                <PlayButton
                  onClick={() => setVideo(true)}
                  style={{
                    position: 'absolute',
                    top: '50%'
                  }}
                />
              )}
            </div>
          </Transition>
          { props.renderContent && props.renderContent() }
          { props.onClose && (
            <div
              className='controls top right'
            >
              <Button
                basic
                circular
                icon='times'
                inverted
                onClick={props.onClose}
                size='large'
              />
            </div>
          )}
          { props.label && (
            <div
              className='controls top left'
            >
              <Button
                basic
                content={props.label}
                inverted
                size='large'
              />
            </div>
          )}
          { props.onPrevious && (
            <div
              className='controls middle left'
            >
              <Button
                basic
                disabled={!props.onPrevious}
                inverted
                icon='angle left'
                onClick={props.onPrevious}
                size='huge'
              />
            </div>
          )}
          { props.onNext && (
            <div
              className='controls middle right'
            >
              <Button
                basic
                disabled={!props.onNext}
                inverted
                icon='angle right'
                onClick={props.onNext}
                size='huge'
              />
            </div>
          )}
          { props.item.src && (
            <VideoPlayer
              autoPlay
              embedded={props.item.embedded}
              icon={<VideoPlayerButton />}
              onClose={() => setVideo(false)}
              open={video}
              placeholder={props.item.preview}
              size='huge'
              transcriptions={props.item.transcriptions}
              video={props.item.src}
            />
          )}
        </>
      )}
    </Dimmer>
  );
};

export default MediaGallery;
