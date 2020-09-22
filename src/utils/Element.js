// @flow

import React, { type Element } from 'react';
import _ from 'underscore';

/**
 * Clones the passed array of children and applies the passed props.
 *
 * @param children
 * @param props
 * 
 * @returns {Array<$NonMaybeType<*>>}
 */
const cloneChildren = (children: Element<any>, props: any) => React.Children.map(children,
  (c) => React.cloneElement(c, _.omit(props, 'children')));

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

  const type = [component.displayName || component.name];

  React.Children.forEach(children, (child) => {
    const childType = child && child.type && (child.type.displayName || child.type.name);
    if (type.includes(childType)) {
      components.push(child);
    }
  });

  return components;
};

export default {
  cloneChildren,
  findByType
};
