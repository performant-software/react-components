// @flow

import React, { useState } from 'react';
import Checkbox from '../../../core-data/src/components/Checkbox';

export default {
  title: 'Components/Core Data/Checkbox',
  component: Checkbox
};

export const Default = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Checkbox
      onClick={() => setChecked(!checked)}
      checked={checked}
    />
  );
};
