import React from 'react';
import Button from '../../../performant-ui/src/components/Button';
import { FaPlus } from "react-icons/fa";
import DarkContainer from './DarkContainer';

export default {
  title: 'Components/Performant UI/Button',
  component: Button
};

export const Default = () => {
  return (
    <div className='flex flex-wrap gap-8'>
      <Button variant='filled'>
        click me
      </Button>
      <Button variant='outline'>
        click me
      </Button>
      <Button variant='plain'>
        click me
      </Button>
    </div>
  );
};

export const Dark = () => {
  return (
    <DarkContainer>
      <div className='flex flex-wrap gap-8'>
        <Button variant='filled'>
          click me
        </Button>
        <Button variant='outline'>
          click me
        </Button>
        <Button variant='plain'>
          click me
        </Button>
      </div>
    </DarkContainer>
  );
};

export const Disabled = () => {
  return (
    <div className='flex flex-wrap gap-8'>
      <Button disabled variant='filled'>
        don&apos;t click me
      </Button>
      <Button disabled variant='outline'>
        don&apos;t click me
      </Button>
      <Button disabled variant='plain'>
        don&apos;t click me
      </Button>
    </div>
  );
};

export const DisabledDark = () => {
  return (
    <DarkContainer>
      <div className='flex flex-wrap gap-8'>
        <Button disabled variant='filled'>
          don&apos;t click me
        </Button>
        <Button disabled variant='outline'>
          don&apos;t click me
        </Button>
        <Button disabled variant='plain'>
          don&apos;t click me
        </Button>
      </div>
    </DarkContainer>
  );
};

export const Icons = () => {
  return (
    <div className='flex flex-wrap gap-8'>
      <Button iconOnly variant='filled'>
        <FaPlus />
      </Button>
      <Button iconOnly variant='outline'>
        <FaPlus />
      </Button>
      <Button iconOnly variant='plain'>
        <FaPlus />
      </Button>
    </div>
  );
};

export const IconsDark = () => (
  <DarkContainer>
    <div className='flex flex-wrap gap-8'>
      <Button iconOnly variant='filled'>
        <FaPlus />
      </Button>
      <Button iconOnly variant='outline'>
        <FaPlus />
      </Button>
      <Button iconOnly variant='plain'>
        <FaPlus />
      </Button>
    </div>
  </DarkContainer>
);

export const CustomClass = () => (
  <Button
    className='bg-pink-500!'
  >
    click me
  </Button>
);

export const AriaLabel = () => (
  <Button
    ariaLabel='click me'
  >
    click me
  </Button>
);