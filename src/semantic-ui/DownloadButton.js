// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  url: string
};

const DownloadButton = ({ url, ...button }: Props) => (
  <Button
    {...button}
    onClick={() => fetch(url).then((response) => {
      response.blob().then((blob) => {
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.click();
      });
    })}
  />
);

export default DownloadButton;
