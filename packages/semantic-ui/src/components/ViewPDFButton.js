// @flow

import React, { useMemo } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import i18n from '../i18n/i18n';

type Props = {
  basic?: boolean,
  className?: string,
  color?: string,
  compact?: boolean,
  primary?: boolean,
  size?: string,
  secondary?: boolean,
  url: string,
};

const ViewPDFButton = (props: Props) => {
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
    <Button className={className} onClick={() => window.open(props.url, '_blank')}>
      <Icon
        name='file pdf'
      />
      {i18n.t('Common.buttons.pdf')}
    </Button>
  );
};

export default ViewPDFButton;
