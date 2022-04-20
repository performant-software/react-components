// @flow

import { TagsList } from '@performant-software/semantic-components';
import React from 'react';
import { withKnobs, array } from '@storybook/addon-knobs';

export default {
  title: 'Components/Semantic UI/TagsList',
  decorators: [withKnobs]
};

export const Default = () => {
  const tags = array('Tags', ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']);

  const config = {
    'Tag 1': {
      background: '#51A3A3',
      color: 'white'
    },
    'Tag 2': {
      background: '#75485E',
      color: 'white'
    },
    'Tag 3': {
      background: '#CB904D',
      color: 'white'
    },
    'Tag 4': {
      background: '#DFCC74',
      color: 'white'
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
