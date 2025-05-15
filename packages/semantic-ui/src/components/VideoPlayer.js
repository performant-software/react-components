// @flow

import { ModalContext, VideoTrack } from '@performant-software/shared-components';
import React, {
  useEffect,
  useRef,
  useState,
  type Element
} from 'react';
import {
  Embed,
  Message,
  Modal,
  Ref
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import './VideoPlayer.css';

export type Transcription = {
  default?: boolean,
  label: string,
  language: string,
  src: string
};

type Props = {
  autoPlay?: boolean,
  embedded?: boolean,
  icon?: string | Element<any>,
  onClose: () => void,
  open: boolean,
  placeholder?: ?string,
  placeholderAlt?: string,
  size?: string,
  transcriptions?: Array<Transcription>,
  video: string
};

const VideoPlayer = (props: Props) => {
  const [error, setError] = useState(false);

  const embedRef = useRef();

  /**
   * Work-around to set the "alt" attribute on the placeholder <img> element if provided.
   */
  useEffect(() => {
    if (embedRef && embedRef.current && props.placeholderAlt) {
      const placeholder = embedRef.current.querySelector('.placeholder');

      if (placeholder) {
        placeholder.setAttribute('alt', props.placeholderAlt);
      }
    }
  }, [embedRef, props.placeholderAlt]);

  return (
    <ModalContext.Consumer>
      { (mountNode) => (
        <Modal
          centered={false}
          className='video-player'
          closeIcon
          mountNode={mountNode}
          onClose={props.onClose.bind(this)}
          open={props.open}
          size={props.size}
        >
          <Modal.Content>
            { error && (
              <Message
                content={i18n.t('VideoPlayer.errors.path.content', { path: props.video })}
                header={i18n.t('VideoPlayer.errors.path.header')}
                icon='exclamation circle'
              />
            )}
            { props.embedded && (
              <Ref
                innerRef={embedRef}
              >
                <Embed
                  active={props.autoPlay}
                  icon={props.icon}
                  iframe={props.autoPlay ? { allow: 'autoplay' } : undefined}
                  placeholder={props.placeholder}
                  url={`${props.video}${props.autoPlay ? '?autoplay=true' : ''}`}
                />
              </Ref>
            )}
            { !props.embedded && (
              <video
                autoPlay={props.autoPlay}
                controls
                onError={() => setError(true)}
                src={props.video}
              >
                { _.map(props.transcriptions, (transcription) => (
                  <VideoTrack
                    default={transcription.default}
                    key={transcription.language}
                    kind='captions'
                    label={transcription.label}
                    srcLang={transcription.language}
                    src={transcription.src}
                  />
                ))}
              </video>
            )}
          </Modal.Content>
        </Modal>
      )}
    </ModalContext.Consumer>
  );
};

VideoPlayer.defaultProps = {
  autoPlay: false,
  embedded: false,
  icon: 'right circle arrow',
  size: 'small'
};

export default VideoPlayer;
