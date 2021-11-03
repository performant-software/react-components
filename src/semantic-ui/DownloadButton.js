// @flow

import React from 'react';
import uuid from 'react-uuid';
import { Button } from 'semantic-ui-react';

type Props = {
  filename?: string,
  url: string
};

const DownloadButton = ({ filename, url, ...button }: Props) => (
  <a
    download={filename || uuid()}
    href={url}
  >
    <Button
      {...button}
    />
  </a>
);

export default DownloadButton;
