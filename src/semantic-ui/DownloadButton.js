// @flow

import React, { useRef } from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  url: string
};

const DownloadButton = ({ url, ...button }: Props) => {
  const linkRef = useRef();

  return (
    <a
      download
      href={url}
      ref={linkRef}
    >
      <Button
        {...button}
        onClick={() => linkRef.current && linkRef.current.click()}
      />
    </a>
  );
};

export default DownloadButton;
