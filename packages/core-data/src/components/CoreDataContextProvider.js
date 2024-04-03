// @flow

import React, { type Node, useMemo } from 'react';
import CoreDataContext from '../context/CoreData';

type Props = {
  /**
   * Core Data base URL.
   */
  baseUrl: string,

  /**
   * JSX child elements.
   */
  children: Node,

  /**
   * Core Data project IDs.
   */
  projectIds: Array<string>
};

/**
 * This component renders a context provider to supply the Core Data base URL and project IDs to any child elements.
 */
const CoreDataContextProvider = ({ baseUrl, children, projectIds }: Props) => {
  const value = useMemo(() => ({ baseUrl, projectIds }), [baseUrl, projectIds]);

  return (
    <CoreDataContext.Provider
      value={value}
    >
      { children }
    </CoreDataContext.Provider>
  );
};

export default CoreDataContextProvider;
