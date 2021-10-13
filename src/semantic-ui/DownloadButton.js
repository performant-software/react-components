// @flow

import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  url: string
};

const DownloadButton = ({ url, ...button }: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      {...button}
      loading={loading}
      onClick={() => {
        setLoading(true);
        return fetch(url).then((response) => {
          response.blob().then((blob) => {
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.click();
          });
        }).finally(() => setLoading(false));
      }}
    />
  );
};

export default DownloadButton;
