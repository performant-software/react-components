// @flow

import React, { useCallback, useState, type Node } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
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
import DownloadButton from './DownloadButton';
import LazyLoader from './LazyLoader';

// These are copied from the react-pdt node_module.  This is for NextJS builds
// see https://nextjs.org/docs/messages/css-npm
import './AnnotationLayer.css';
import './TextLayer.css';

import './LazyDocument.css';
import ViewPDFButton from './ViewPDFButton';

type Props = {
  children?: Node,
  dimmable?: boolean,
  download?: string,
  duration?: number,
  image?: any,
  pdf?: boolean,
  preview?: ?string,
  view?: Boolean,
  view_url?: String,
  size?: string,
  src?: string
};

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const LazyDocument = (props: Props) => {
  const [dimmer, setDimmer] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(!props.preview);
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
          className='lazy-document'
          compact
          onBlur={() => setDimmer(false)}
          onMouseEnter={() => setDimmer(true)}
          onMouseLeave={() => setDimmer(false)}
        >
          {!loaded && (
            <LazyLoader
              active
              size={props.size}
            />
          )}
          {!error && props.preview && (
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
          {!error && loaded && !props.preview && props.src && props.pdf && (
            <Image
              {...props.image}
              className={getClassNames()}
              size={props.size}
            >
              <Document
                file={props.src}
                onLoadError={(e) => console.log(e.message)}
              >
                <Page
                  pageNumber={1}
                />
              </Document>
            </Image>
          )}
          {!error && loaded && props.view && props.view_url && props.pdf && dimmer && (
            <Dimmer
              active={dimmer}
            >
              <div
                className='buttons'
              >
                <ViewPDFButton url={props.view_url} primary />
              </div>
            </Dimmer>
          )}
          {(error || (!props.preview && !(props.src && props.pdf))) && (
            <Image
              {...props.image}
              className={getClassNames('placeholder-image')}
              size={props.size}
            >
              <Icon
                name='file alternate outline'
                size='big'
              />
            </Image>
          )}
          {(props.download || props.src || props.children) && props.dimmable && (
            <Dimmer
              active={dimmer}
            >
              <div
                className='buttons'
              >
                {props.download && (
                  <DownloadButton
                    primary
                    url={props.download || props.src}
                  />
                )}
                {props.children}
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
