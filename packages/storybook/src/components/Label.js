// @flow

import React, { useMemo } from 'react';
import './Label.css';

type Props = {
  className?: string,
  content: string,
  required?: boolean,
};

const Label = (props: Props) => {
  const className = useMemo(() => {
    const classNames = ['label'];

    if (props.className) {
      classNames.push(props.className);
    }

    if (props.required) {
      classNames.push('required');
    }

    return classNames.join(' ');
  }, [props.className, props.required]);

  return (
    <div
      className={className}
    >
      { props.content }
    </div>
  );
};

export default Label;
