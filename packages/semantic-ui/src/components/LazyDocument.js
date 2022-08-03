// @flow

import React, { useState, type Node } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import {
  Dimmer,
  Icon,
  Image,
  Loader,
  Segment,
  Transition,
  Visibility
} from 'semantic-ui-react';
import DownloadButton from './DownloadButton';
import LazyLoader from './LazyLoader';
import './LazyDocument.css';

type Props = {
  children?: Node,
  dimmable?: boolean,
  duration?: number,
  image?: any,
  pdf?: boolean,
  preview?: ?string,
  size?: string,
  src?: string
};

const LazyDocument = (props: Props) => {
  const [dimmer, setDimmer] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(!props.preview);
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
          { !loaded && (
            <LazyLoader
              active
              size={props.size}
            />
          )}
          { !error && props.preview && (
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
              src={props.preview}
              size={props.size}
            />
          )}
          { !props.preview && props.src && props.pdf && (
            <Image
              {...props.image}
              size={props.size}
            >
              <Document
                file={props.src}
              >
                <Page
                  pageNumber={1}
                />
              </Document>
            </Image>
          )}
          { (error || (!props.preview && !(props.src && props.pdf))) && (
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
                    primary
                    src={props.src}
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
  pdf: false,
  preview: undefined,
  size: 'medium',
  src: undefined
};

export default LazyDocument;
