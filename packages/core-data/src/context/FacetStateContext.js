// @flow

import { createContext } from 'react';

type FacetStateContextType = {
  attributes: Array<string>;
};

const FacetStateContext = createContext<FacetStateContextType>({ attributes: [] });

export default FacetStateContext;
