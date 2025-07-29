import React from 'react'

export const findChild = (children: React.ElementType | React.ElementType[], type: React.FC) => {
  return React.Children.toArray(children).find(
    child => child.type === type
  );
}