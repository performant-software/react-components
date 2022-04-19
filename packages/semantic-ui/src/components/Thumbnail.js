// @flow

import React, { useEffect, useState } from 'react';
import { Image, Loader } from 'semantic-ui-react';
import LazyImage from './LazyImage';

type Props = {
  src: ?string,
  style?: any
};

const Thumbnail = (props: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
  }, [props.src]);

  return (
    <div>
      <Loader
        active={props.src && loading}
      />
      { props.src && (
        <Image
          {...props}
          onLoad={() => setLoading(false)}
          style={{
            ...props.style,
            visibility: loading ? 'hidden' : 'visible'
          }}
        />
      )}
      { !props.src && (
        <LazyImage />
      )}
    </div>
  );
};

Thumbnail.defaultProps = {
  style: {}
};

export default Thumbnail;
