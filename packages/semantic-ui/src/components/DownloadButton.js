// @flow

import React, { useMemo } from 'react';
import uuid from 'react-uuid';
import { Icon } from 'semantic-ui-react';
import i18n from '../i18n/i18n';

type Props = {
  basic?: boolean,
  className?: string,
  color?: string,
  compact?: boolean,
  filename?: string,
  primary?: boolean,
  size?: string,
  secondary?: boolean,
  url: string
};

const DownloadButton = (props: Props) => {
  /**
   * Sets the appropriate class names based on the formatting props.
   *
   * @type {string}
   */
  const className = useMemo(() => {
    const classNames = ['ui', 'button'];

    if (props.basic) {
      classNames.push('basic');
    }

    if (props.className) {
      classNames.push(...props.className.split(' '));
    }

    if (props.color) {
      classNames.push(props.color);
    }

    if (props.compact) {
      classNames.push('compact');
    }

    if (props.primary) {
      classNames.push('primary');
    }

    if (props.secondary) {
      classNames.push('secondary');
    }

    if (props.size) {
      classNames.push(props.size);
    }

    return classNames.join(' ');
  }, [props.basic, props.color]);

  return (
    <a
      className={className}
      download={props.filename || uuid()}
      href={props.url}
    >
      <Icon
        name='cloud download'
      />
      { i18n.t('Common.buttons.download') }
    </a>
  );
};

export default DownloadButton;
