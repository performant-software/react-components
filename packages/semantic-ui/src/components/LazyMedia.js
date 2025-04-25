// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ComponentType,
  type Node
} from 'react';
import { Icon } from 'semantic-ui-react';
import { Trans } from 'react-i18next';
import _ from 'underscore';
import FileInputButton from './FileInputButton';
import i18n from '../i18n/i18n';
import LazyAudio from './LazyAudio';
import LazyDocument from './LazyDocument';
import LazyImage from './LazyImage';
import LazyVideo, { type Transcription } from './LazyVideo';

type Props = {
  children?: Node,
  contentType: string,
  dimmable?: boolean,
  downloadUrl?: string,
  name?: string,
  onUpload: (file: File) => void,
  preview?: string,
  size?: string,
  src?: string,
  transcriptions?: Array<Transcription>
};

const ContentTypes = {
  audio: 'audio',
  image: 'image',
  pdf: 'application/pdf',
  video: 'video'
};

const WebContentTypes = [
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
  'image/bmp',
  'video/m4v',
  'video/mp4'
];

const LazyMedia: ComponentType<any> = (props: Props) => {
  const [contentType, setContentType] = useState(props.contentType || '');
  const [name, setName] = useState(props.name);
  const [preview, setPreview] = useState(props.preview);
  const [source, setSource] = useState(props.src);
  const [downloadUrl, setDownloadUrl] = useState(props.downloadUrl);
  const [viewButtonLabel, setViewButtonLabel] = useState(null);

  /**
   * Sets the file extension based on the name.
   *
   * @type {*}
   */
  const fileExtension = useMemo(() => {
    let value;

    if (name) {
      value = name.split('.').pop();
      value = value && value.toUpperCase();
    }

    return value;
  }, [name]);

  /**
   * Sets the content type, name, preview, and source attributes. Also calls the onUpload prop.
   *
   * @type {(function(*): void)|*}
   */
  const onUpload = useCallback((files) => {
    const file = _.first(files);

    setContentType(file.type);
    setName(file.name);
    setPreview(null);
    setDownloadUrl(null);

    if (_.contains(WebContentTypes, file.type)
      || file.type.startsWith(ContentTypes.audio)
      || file.type === ContentTypes.pdf) {
      setSource(URL.createObjectURL(file));
      setViewButtonLabel(i18n.t('LazyMedia.buttons.preview'));
    } else {
      setSource(null);
      setViewButtonLabel(null);
    }

    props.onUpload(file);
  }, [props.onUpload]);

  /**
   * Renders the child buttons.
   *
   * @type {unknown}
   */
  const renderChildren = useCallback(() => (
    <>
      { props.onUpload && (
        <FileInputButton
          color='orange'
          content={i18n.t('Common.buttons.upload')}
          icon='cloud upload'
          onSelection={onUpload}
        />
      )}
      { props.children }
    </>
  ));

  /**
   * Renders the media component.
   *
   * @type {(function(): *)|*}
   */
  const renderMedia = useCallback(() => {
    if (contentType.startsWith(ContentTypes.image)) {
      return (
        <LazyImage
          dimmable={props.dimmable}
          download={downloadUrl}
          preview={preview}
          src={source}
          size={props.size}
          viewButtonLabel={viewButtonLabel}
        >
          { renderChildren() }
        </LazyImage>
      );
    }

    if (contentType.startsWith(ContentTypes.video)) {
      return (
        <LazyVideo
          dimmable={props.dimmable}
          download={downloadUrl}
          playButtonLabel={viewButtonLabel}
          preview={preview}
          src={source}
          size={props.size}
          transcriptions={props.transcriptions}
        >
          { renderChildren() }
        </LazyVideo>
      );
    }

    if (contentType.startsWith(ContentTypes.audio)) {
      return (
        <LazyAudio
          dimmable={props.dimmable}
          download={downloadUrl}
          playButtonLabel={viewButtonLabel}
          preview={preview}
          src={source}
          size={props.size}
        >
          { renderChildren() }
        </LazyAudio>
      );
    }

    return (
      <LazyDocument
        dimmable={props.dimmable}
        download={downloadUrl}
        pdf={contentType === ContentTypes.pdf}
        preview={preview}
        src={source}
        size={props.size}
      >
        { renderChildren() }
      </LazyDocument>
    );
  }, [contentType, preview, source, props.dimmable, downloadUrl, props.size]);

  /**
   * Renders the upload message.
   *
   * @type {(function(): (null|*))|*}
   */
  const renderMessage = useCallback(() => {
    if (!fileExtension) {
      return null;
    }

    return (
      <div>
        <Icon
          name='info circle'
        />
        <span>
          <Trans
            components={{ bold: <strong /> }}
            default='Your <bold>{{type}}</bold> has been received'
            i18n={i18n}
            i18nKey='LazyMedia.messages.uploaded'
            values={{
              type: fileExtension
            }}
          />
        </span>
      </div>
    );
  }, [fileExtension]);

  /**
   * Sets the content type, name, preview, and source.
   */
  useEffect(() => {
    if (props.contentType) {
      setContentType(props.contentType);
    }

    if (props.name) {
      setName(props.name);
    }

    if (props.preview) {
      setPreview(props.preview);
    }

    if (props.src) {
      setSource(props.src);
    } else {
      setSource(null);
    }
  }, [props.contentType, props.name, props.preview, props.src]);

  return (
    <div
      className='lazy-media'
    >
      { renderMedia() }
      { renderMessage() }
    </div>
  );
};

LazyMedia.defaultProps = {
  dimmable: true,
  size: 'medium'
};

export default LazyMedia;
