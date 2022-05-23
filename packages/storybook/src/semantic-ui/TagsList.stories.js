// @flow

import React from 'react';
import { withKnobs, array } from '@storybook/addon-knobs';
import TagsList from '../../../semantic-ui/src/components/TagsList';

export default {
  title: 'Components/Semantic UI/TagsList',
  decorators: [withKnobs]
};

export const Default = () => {
  const tags = array('Tags', ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']);

  const config = {
    'Tag 1': {
      background: '#264653',
      color: 'white'
    },
    'Tag 2': {
      background: '#2a9d8f',
      color: 'black'
    },
    'Tag 3': {
      background: '#e9c46a',
      color: 'black'
    },
    'Tag 4': {
      background: '#f4a261',
      color: 'black'
    }
  };

  return (
    <TagsList
      config={config}
      tags={tags}
    />
  );
};

export const WithDelete = () => (
  <TagsList
    onDelete={() => {}}
    tags={['Apple', 'Orange', 'Banana']}
  />
);
