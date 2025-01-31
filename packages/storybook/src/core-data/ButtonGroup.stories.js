// @flow

import React, { useState } from 'react';
import Button from '../../../core-data/src/components/Button';
import ButtonGroup from '../../../core-data/src/components/ButtonGroup';

export default {
  title: 'Components/Core Data/ButtonGroup',
  component: ButtonGroup
};

export const Default = () => {
  const [active, setActive] = useState('list');

  return (
    <ButtonGroup>
      <Button
        onClick={() => setActive('list')}
        primary={active === 'list'}
      >
        List
      </Button>
      <Button
        onClick={() => setActive('table')}
        primary={active === 'table'}
      >
        Table
      </Button>
      <Button
        onClick={() => setActive('timeline')}
        primary={active === 'timeline'}
      >
        Timeline
      </Button>
    </ButtonGroup>
  );
};

export const Rounded = () => {
  const [active, setActive] = useState('list');

  return (
    <ButtonGroup
      rounded
    >
      <Button
        onClick={() => setActive('list')}
        primary={active === 'list'}
      >
        List
      </Button>
      <Button
        onClick={() => setActive('table')}
        primary={active === 'table'}
      >
        Table
      </Button>
      <Button
        onClick={() => setActive('timeline')}
        primary={active === 'timeline'}
      >
        Timeline
      </Button>
    </ButtonGroup>
  );
};
