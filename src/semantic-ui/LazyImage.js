// @flow

import React, { useState } from 'react';
import {
  Button,
  Dimmer, Header, Icon,
  Image,
  Loader, Segment,
  Transition,
  Visibility
} from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import PhotoViewer from './PhotoViewer';
import './LazyImage.css';

type Props = {
  dimmable: boolean,
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
        <Dimmer.Dimmable
          as={Segment}
          className='lazy-image'
          compact
          onMouseEnter={() => setDimmer(true)}
          onMouseLeave={() => setDimmer(false)}
          padded
        >
          { props.src && (
            <>
              <Image
                size={props.size}
                src={props.src}
              />
              { props.dimmable && (
                <Dimmer
                  active={dimmer}
                >
                  <Button
                    content={i18n.t('LazyImage.buttons.view')}
                    icon='photo'
                    onClick={() => setModal(true)}
                    primary
                    size={props.size}
                  />
                </Dimmer>
              )}
            </>
          )}
          { !props.src && (
            <Image>
              <Header
                icon
              >
                <Icon
                  name='image'
                />
              </Header>
            </Image>
          )}
        </Dimmer.Dimmable>
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
  dimmable: true,
  duration: 1000,
  size: 'medium'
};

export default LazyImage;
