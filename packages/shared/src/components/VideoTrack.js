// @flow

import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  src: string
};

const VideoTrack = (props: Props) => {
  const [content, setContent] = useState();

  /**
   * Memo-izes the local file URL.
   */
  const src = useMemo(() => {
    const blob = new Blob([content], { type: 'text/plain' });
    return URL.createObjectURL(blob);
  }, [content]);

  /**
   * Fetches the `src` attribute to store on the state. This will avoid any cross-domain issue with loading VTTs.
   */
  useEffect(() => {
    fetch(props.src)
      .then((response) => response.text())
      .then(setContent);
  }, [props.src]);

  if (!src) {
    return null;
  }

  return (
    <track
      {...props}
      src={src}
    />
  );
};

export default VideoTrack;
