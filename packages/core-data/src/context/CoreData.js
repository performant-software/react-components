// @flow

import { createContext } from 'react';

type CoreDataContextType = {
  baseUrl: string,
  projectIds: string
};

const CoreDataContext = createContext<CoreDataContextType>({
  baseUrl: undefined,
  projectIds: undefined
});

export default CoreDataContext;
