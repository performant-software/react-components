// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { Button } from 'semantic-ui-react';
import Thumbnail from '../../../semantic-ui/src/components/Thumbnail';

export default {
  title: 'Components/Semantic UI/Thumbnail',
  decorators: [withA11y, withKnobs]
};

export const Default = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Thumbnail
        src={`https://picsum.photos/500?random=${index}`}
      />
      <Button
        content='Reload'
        icon='refresh'
        onClick={() => setIndex((prevIndex) => prevIndex + 1)}
        primary
        style={{
          marginTop: '1em'
        }}
      />
    </>
  );
};
