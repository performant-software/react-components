// @flow

import React from 'react';
import BooleanIcon from '../../../semantic-ui/src/components/BooleanIcon';

export default {
  title: 'Components/Semantic UI/BooleanIcon',
  component: BooleanIcon
};

export const Default = () => (
  <BooleanIcon
    value={true}
  />
);

export const False = () => (
  <BooleanIcon
    value={false}
  />
);
