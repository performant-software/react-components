import React from 'react'

export const findByType = (children: any, component: any) => {
  const components = [];

  const types = Array.isArray(component)
    ? component.map(c => c.displayName || c.name)
    : [component.displayName || component.name];

  React.Children.forEach(children, (child) => {
    const childType = child && child.type && (child.type.displayName || child.type.name);
    if (types.includes(childType)) {
      components.push(child);
    }
  });

  return components;
};
