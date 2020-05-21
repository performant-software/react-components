import React from 'react';
import { withKnobs, array } from '@storybook/addon-knobs';
import TagsList from '../../../src/common/TagsList';

export default {
  title: 'Components/Common/TagsList',
  decorators: [withKnobs]
};

export const Default = () => (
  <TagsList tags={array('Tags', ['Tag 1', 'Tag 2', 'Tag 3'])} />
);
