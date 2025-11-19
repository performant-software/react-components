import React from 'react';
import Avatar from '../../../performant-ui/src/components/Avatar';
import fc from '../assets/faircopy_image.png';

export default {
  title: 'Components/Performant UI/Avatar',
  component: Avatar
};

export const Default = () => {
  return (
    <Avatar
      initials='CM'
    />
  );
};

export const List = () => {
  return (
    <div className='flex gap-2'>
      <Avatar
        initials='CM'
      />
      <Avatar
        src={fc}
        initials='CM'
      />
      <Avatar
        initials='LJ'
      />
    </div>
  );
};
