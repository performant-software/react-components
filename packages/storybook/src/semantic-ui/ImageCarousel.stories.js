// @flow

import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import _ from 'underscore';
import ImageCarousel from '../../../semantic-ui/src/components/ImageCarousel';
import withImages from '../hooks/Images';

export default {
  title: 'Components/Semantic UI/ImageCarousel',
  component: ImageCarousel
};

export const Default = withImages((props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        content='Open'
        onClick={() => setOpen(true)}
      />
      { open && (
        <ImageCarousel
          images={_.map(props.images, (image) => ({ caption: image.title, src: image.image }))}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}, 10);
