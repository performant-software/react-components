// @flow

import { useContext, useEffect, useState } from 'react';
import CoreDataContext from '../context/CoreData';

/**
 * Hook to call the passed onLoad function and returns the loading state and eventual data.
 *
 * @param onLoad
 * @param deps
 *
 * @returns {{data: unknown, loading: boolean}}
 */
export const useLoader = (onLoad, deps = []) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const { baseUrl, projectIds } = useContext(CoreDataContext);

  /**
   * Sets the loading state to "true" and calls the onLoad callback.
   */
  useEffect(() => {
    setLoading(true);

    onLoad(baseUrl, projectIds)
      .then((d) => setData(d))
      .finally(() => setLoading(false));
  }, [...deps]);

  return {
    data,
    loading
  };
};
