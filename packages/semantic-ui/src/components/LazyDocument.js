// @flow

import React, { useCallback, useState, type Node } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
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
  download?: string,
  duration?: number,
  image?: any,
  pdf?: boolean,
  preview?: ?string,
  size?: string,
  src?: string
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const LazyDocument = ({dimmable = true, duration = 1000, pdf = false, preview = undefined, size = 'medium', src = undefined, ...props}: Props) => {
  const [dimmer, setDimmer] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(!preview);
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
          size={size}
        />
      </Visibility>
    );
  }

  return (
    <>
      <Transition
        duration={duration}
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
              size={size}
            />
          )}
          {!error && preview && (
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
              src={preview}
              size={size}
            />
          )}
          {!error && loaded && !preview && src && pdf && (
            <Image
              {...props.image}
              className={getClassNames()}
              size={size}
            >
              <Document
                file={src}
                onLoadError={(e) => console.log(e.message)}
              >
                <Page
                  pageNumber={1}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                />
              </Document>
            </Image>
          )}
          {(error || (!preview && !(src && pdf))) && (
            <Image
              {...props.image}
              className={getClassNames('placeholder-image')}
              size={size}
            >
              <Icon
                name='file alternate outline'
                size='big'
              />
            </Image>
          )}
          {(props.download || src || props.children) && dimmable && (
            <Dimmer
              active={dimmer}
            >
              <div
                className='buttons'
              >
                {props.download && (
                  <DownloadButton
                    primary
                    url={props.download || src}
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

export default LazyDocument;
