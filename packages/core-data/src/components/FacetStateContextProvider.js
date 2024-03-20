// @flow

import { useRuntimeConfig } from '@peripleo/peripleo';
import React, {
  useCallback,
  useEffect,
  useState,
  type ReactNode
} from 'react';
import _ from 'underscore';
import FacetStateContext from '../context/FacetStateContext';

type RefinementListProxyProps = {
  attribute: string,
  useRefinementList: (props: RefinementListProxyProps) => void
};

const RefinementListProxy = ({ attribute, useRefinementList }: RefinementListProxyProps) => {
  // Just a trick to have an empty component that keeps this
  // facet mounted, while the GUI element mounts and unmounts
  useRefinementList({ attribute });

  return null;
};

type Props = {
  children: ReactNode,
  useRefinementList: (props: RefinementListProxyProps) => void
};

const TYPE_AUTO = 'auto';

const FacetStateContextProvider = (props: Props) => {
  const [attributes, setAttributes] = useState<Array<string>>([]);

  const { typesense } = useRuntimeConfig<any>();

  const {
    protocol,
    host,
    api_key: key,
    index_name: name
  } = typesense;

  /**
   * Filters the list of facets to only include fields that are facetable, without the "auto" type.
   *
   * @type {function(*): *}
   */
  const filterFacets = useCallback(({ fields }: any) => (
    _.filter(fields, (field: any) => field.facet && field.type !== TYPE_AUTO)
  ), []);

  /**
   * Returns an array of names for the passed list of facets.
   *
   * @type {function(*): *}
   */
  const pluckName = useCallback((facets: any) => _.pluck(facets, 'name'), []);

  /**
   * Loads the facets from the Typesense schema.
   */
  useEffect(() => {
    const url = `${protocol}://${host}/collections/${name}`;
    const headers = { 'X-TYPESENSE-API-KEY': key };

    fetch(url, { headers })
      .then((response) => response.json())
      .then(filterFacets)
      .then(pluckName)
      .then((facets) => setAttributes(facets));
  }, []);

  return (
    <FacetStateContext.Provider
      value={{
        attributes
      }}
    >
      { attributes.map((attribute) => (
        <RefinementListProxy
          attribute={attribute}
          key={attribute}
          useRefinementList={props.useRefinementList}
        />
      ))}
      { props.children }
    </FacetStateContext.Provider>
  );
};

export default FacetStateContextProvider;
