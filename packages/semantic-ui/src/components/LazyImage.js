// @flow

import React, {
  useCallback,
  useMemo,
  useState,
  type Node
} from 'react';
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
import i18n from '../i18n/i18n';
import DownloadButton from './DownloadButton';
import LazyLoader from './LazyLoader';
import PhotoViewer from './PhotoViewer';
import './LazyImage.css';

type Props = {
  children?: Node,
  dimmable: boolean,
  download?: string,
  duration?: number,
  image?: any,
  name?: string,
  preview?: string,
  size?: string,
  src?: string
};

const LazyImage = (props: Props) => {
  const [dimmer, setDimmer] = useState(false);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(!(props.src || props.preview));
  const [modal, setModal] = useState(false);
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

  const viewButtonLabel = useMemo(() => {
    if (props.src?.startsWith('blob:')) {
      return i18n.t('LazyMedia.buttons.preview');
    }
    return i18n.t('LazyImage.buttons.view');
  }, [props.src]);

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
          className='lazy-image'
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
          { !error && (props.preview || props.src) && (
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
              size={props.size}
              src={props.preview || props.src}
            />
          )}
          { (error || !(props.preview || props.src)) && (
            <Image
              {...props.image}
              className={getClassNames('placeholder-image')}
              size={props.size}
            >
              <Icon
                name='image'
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
                  <Button
                    content={viewButtonLabel}
                    icon='photo'
                    onClick={() => setModal(true)}
                    primary
                  />
                )}
                { props.download && !props.download.startsWith('blob:') && (
                  <DownloadButton
                    color='green'
                    filename={props.name}
                    url={props.download}
                  />
                )}
                { props.children }
              </div>
            </Dimmer>
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
