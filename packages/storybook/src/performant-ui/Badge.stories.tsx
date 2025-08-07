import React from 'react';
import Badge from '../../../performant-ui/src/components/Badge';
import DarkContainer from './DarkContainer';

export default {
  title: 'Components/Performant UI/Badge',
  component: Badge
};

export const Default = () => {
  return (
    <div className='flex flex-wrap gap-8'>
      <Badge color='faircopy'>
        FairCopy
      </Badge>
      <Badge color='red'>
        FairCopy
      </Badge>
      <Badge color='gray'>
        FairCopy
      </Badge>
      <Badge color='green'>
        FairCopy
      </Badge>
      <Badge color='blue'>
        FairCopy
      </Badge>
    </div>
  );
};

export const Dark = () => {
  return (
    <DarkContainer>
      <div className='flex flex-wrap gap-8'>
        <Badge color='faircopy'>
          FairCopy
        </Badge>
        <Badge color='red'>
          FairCopy
        </Badge>
        <Badge color='gray'>
          FairCopy
        </Badge>
        <Badge color='green'>
          FairCopy
        </Badge>
        <Badge color='blue'>
          FairCopy
        </Badge>
      </div>
    </DarkContainer>
  );
};