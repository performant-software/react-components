// @flow

import React, { type Node, useMemo } from 'react';
import CoreDataContext from '../context/CoreData';

type Props = {
  baseUrl: string,
  children: Node,
  projectIds: Array<string>
};

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
