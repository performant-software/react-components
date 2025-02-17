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
      ariaLabel='my checkbox'
    />
  );
};

export const WithId = () => {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <label htmlFor='my-checkbox'>
        Because this label&apos;s
        &nbsp;
        <code>htmlFor</code>
        &nbsp;
        prop matches the Checkbox&apos;s ID, you can click anywhere on this label to toggle the checkbox.
      </label>
      <br />
      <Checkbox
        id='my-checkbox'
        onClick={() => setChecked(!checked)}
        checked={checked}
        ariaLabel='my checkbox'
      />
    </>
  );
};
