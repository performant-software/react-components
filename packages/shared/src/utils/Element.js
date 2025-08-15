// @flow

import React from 'react';

/**
 * Returns the subset of children matching the passed component type. This function is useful for designing components
 * using a sub-component type syntax:
 *
 * <MyComponent ...>
 *   <MyComponent.Subcomponent ... />
 *   <MyComponent.AnotherSubcomponent ... />
 * </MyComponent>
 *
 * @param children
 * @param component
 *
 * @returns {[]}
 */
const findByType = (children: any, component: any) => {
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

export default {
  findByType
};
