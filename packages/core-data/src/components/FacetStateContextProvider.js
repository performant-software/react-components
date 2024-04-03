// @flow

import React, {
  useCallback,
  useEffect,
  useState,
  type Node
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
  /**
   * Search API key.
   */
  apiKey: string,

  /**
   * JSX child elements.
   */
  children: Node,

  /**
   * Search host URI.
   */
  host: string,

  /**
   * Search index name.
   */
  indexName: string,

  /**
   * Search protocol.
   */
  protocol: string,

  /**
   * `useRefinementList` hook. This hook is used as a work-around to keep the search state persistent.
   *
   * @param props
   */
  useRefinementList: (props: RefinementListProxyProps) => void
};

const TYPE_AUTO = 'auto';

/**
 * This component renders a context that queries the Typesense collection and returns a list of all facetable
 * attributes.
 */
const FacetStateContextProvider = (props: Props) => {
  const [attributes, setAttributes] = useState<Array<string>>([]);

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
    const url = `${props.protocol}://${props.host}/collections/${props.indexName}`;
    const headers = { 'X-TYPESENSE-API-KEY': props.apiKey };

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
      { _.map(attributes, (attribute) => (
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
