// @flow

import React, { useRef, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Button, Modal, Segment } from 'semantic-ui-react';
import i18n from '../i18n/i18n';

type Props = {
  interval: number,
  onSelect: (file: File) => void,
  src: string,
  title: string
};

const VideoFrameSelector = (props: Props) => {
  const [modal, setModal] = useState(false);
  const videoRef = useRef(null);

  return (
    <>
      <Button
        basic
        content={props.title}
        icon='image'
        onClick={() => setModal(true)}
      />
      <Modal
        centered={false}
        open={modal}
        size='small'
      >
        <Modal.Header
          content={props.title}
        />
        <Modal.Content>
          <Segment>
            <video
              ref={videoRef}
              src={props.src}
              style={{
                width: '100%'
              }}
            />
          </Segment>
          <div
            style={{
              textAlign: 'center'
            }}
          >
            <Button
              basic
              icon='arrow left'
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.currentTime -= props.interval;
                }
              }}
            />
            <Button
              basic
              icon='arrow right'
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.currentTime += props.interval;
                }
              }}
            />
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content={i18n.t('Common.buttons.ok')}
            primary
            onClick={() => {
              const video = videoRef.current;

              if (video) {
                const canvas = document.createElement('canvas');
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

                canvas.toBlob((blob) => {
                  const file = new File([blob], 'test.png', { lastModified: new Date().getTime(), type: blob.type });
                  props.onSelect(file);
                  setModal(false);
                });
              }
            }}
          />
          <Button
            content={i18n.t('Common.buttons.cancel')}
            inverted
            onClick={() => setModal(false)}
            primary
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

VideoFrameSelector.defaultProps = {
  content: i18n.t('VideoFrameSelector.buttons.select'),
  interval: 15,
  title: i18n.t('VideoFrameSelector.title'),
};

export default withTranslation()(VideoFrameSelector);
