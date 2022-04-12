// @flow

import React, { useState, type Node } from 'react';
import {
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
import './LazyDocument.css';

type Props = {
  children?: Node,
  dimmable?: boolean,
  duration?: number,
  image?: any,
  preview?: ?string,
  size?: string,
  src?: string
};

const LazyDocument = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const [dimmer, setDimmer] = useState(false);

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
          className='lazy-document'
          compact
          onBlur={() => setDimmer(false)}
          onMouseEnter={() => setDimmer(true)}
          onMouseLeave={() => setDimmer(false)}
        >
          { props.preview && (
            <Image
              {...props.image}
              src={props.preview}
              size={props.size}
            />
          )}
          { !props.preview && (
            <Image
              {...props.image}
              className='placeholder-image'
              size={props.size}
            >
              <Icon
                name='file alternate outline'
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
                  <DownloadButton
                    content={i18n.t('LazyDocument.buttons.download')}
                    icon='cloud download'
                    primary
                    url={props.src || ''}
                  />
                )}
                { props.children }
              </div>
            </Dimmer>
          )}
        </Dimmer.Dimmable>
      </Transition>
    </>
  );
};

LazyDocument.defaultProps = {
  dimmable: true,
  duration: 1000,
  preview: undefined,
  size: 'medium',
  src: undefined
};

export default LazyDocument;
