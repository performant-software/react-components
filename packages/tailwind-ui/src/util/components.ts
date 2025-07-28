import React from 'react'

export const findElement = (children: React.ElementType | React.ElementType[], type: React.FC) => {
  return React.Children.toArray(children).find(
    child => child.type === type
  );
}