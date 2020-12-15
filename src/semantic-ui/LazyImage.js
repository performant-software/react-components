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
import PhotoViewer from './PhotoViewer';
import './LazyImage.css';

type Props = {
  duration?: number,
  size?: string,
  src?: string
};

const LazyImage = (props: Props) => {
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
          { props.src && (
            <Dimmer.Dimmable
              as={Image}
              className='image-dimmer'
              dimmed={dimmer}
              dimmer={{
                active: dimmer,
                content: (
                  <Button
                    content={i18n.t('LazyImage.buttons.view')}
                    icon='photo'
                    onClick={() => setModal(true)}
                    primary
                  />
                )
              }}
              onMouseEnter={() => setDimmer(true)}
              onMouseLeave={() => setDimmer(false)}
              size={props.size}
              src={props.src}
            />
          )}
          { !props.src && (
            <Segment
              className='lazy-image'
              compact
              padded
              placeholder
            >
              <Icon
                name='image'
                size='huge'
              />
            </Segment>
          )}
        </>
      </Transition>
      { props.src && (
        <PhotoViewer
          image={props.src}
          onClose={() => setModal(false)}
          open={modal}
          size='large'
        />
      )}
    </>
  );
};

LazyImage.defaultProps = {
  duration: 1000,
  size: 'medium'
};

export default LazyImage;
