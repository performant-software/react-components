// @flow

import { Browser } from '@react-components/shared';
import React, { useEffect, useRef, useState } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button,
  Grid,
  Input,
  Label,
  Modal,
  Segment
} from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import './VideoFrameSelector.css';

type Props = {
  button: any,
  defaultInterval: number,
  onSelect: (file: File) => void,
  src: string,
  title: string
};

const INTERVAL_STEP = 1;
const MIN_INTERVAL = 1;
const MAX_INTERVAL = 300;

const VideoFrameSelector = (props: Props) => {
  const [duration, setDuration] = useState(0);
  const [interval, setInterval] = useState(props.defaultInterval);
  const [time, setTime] = useState(0);
  const [modal, setModal] = useState(false);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  }, [time]);

  return (
    <>
      <Button
        {...props.button}
        onClick={() => setModal(true)}
      />
      <Modal
        centered={false}
        className='video-frame-selector'
        open={modal}
        size='small'
      >
        <Modal.Header
          content={props.title}
        />
        <Modal.Content>
          <Segment>
            <video
              crossOrigin='anonymous'
              onLoadedMetadata={() => videoRef.current && setDuration(videoRef.current.duration)}
              ref={videoRef}
              src={props.src}
            />
          </Segment>
          <Grid
            columns={2}
          >
            <Grid.Column>
              <div>
                <Label
                  content={i18n.t('VideoFrameSelector.labels.interval', { count: interval })}
                />
              </div>
              <Input
                min={MIN_INTERVAL}
                max={MAX_INTERVAL}
                name='duration'
                onChange={(e, { value }) => setInterval(Number(value))}
                step={INTERVAL_STEP}
                type='range'
                value={interval}
              />
            </Grid.Column>
            <Grid.Column
              textAlign='right'
            >
              <Button
                basic
                disabled={time === 0}
                icon='arrow left'
                onClick={() => setTime(Math.max(time - interval, 0))}
              />
              <Button
                basic
                disabled={time === duration}
                icon='arrow right'
                onClick={() => setTime(Math.min(time + interval, duration))}
              />
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content={i18n.t('Common.buttons.ok')}
            primary
            onClick={() => {
              const video = videoRef.current;

              if (video && Browser.isBrowser()) {
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
  button: {
    basic: true,
    content: i18n.t('VideoFrameSelector.buttons.select'),
    icon: 'image'
  },
  defaultInterval: 15,
  title: i18n.t('VideoFrameSelector.title'),
};

export default withTranslation()(VideoFrameSelector);
