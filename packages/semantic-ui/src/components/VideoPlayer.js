// @flow

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
import ModalContext from '../context/ModalContext';
import './VideoPlayer.css';
import i18n from '../i18n/i18n';

type Props = {
  autoPlay?: boolean,
  embedded?: boolean,
  icon?: string | Element<any>,
  onClose: () => void,
  open: boolean,
  placeholder?: ?string,
  placeholderAlt?: string,
  size?: string,
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
              />
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
