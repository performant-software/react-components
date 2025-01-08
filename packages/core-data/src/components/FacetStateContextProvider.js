// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type Node
} from 'react';
import _ from 'underscore';
import FacetStateContext from '../context/FacetStateContext';

type RangeProxyProps = {
  attribute: string,
  useRange: (props: any) => void
};

const RangeProxy = ({ attribute, useRange }: RangeProxyProps) => {
  // Just a trick to have an empty component that keeps this
  // facet mounted, while the GUI element mounts and unmounts
  useRange({ attribute });

  return null;
};

type RefinementListProxyProps = {
  attribute: string,
  useRefinementList: (props: any) => void
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
   * A list of facets to exclude.
   */
  exclude?: Array<string>,

  /**
   * Search host URI.
   */
  host: string,

  /**
   * A list of facets to include.
   */
  include?: Array<string>,

  /**
   * Search index name.
   */
  indexName: string,

  /**
   * Search protocol.
   */
  protocol: string,

  /**
   * `useRange` hook. This hook is used as a work-around to keep the search state persistent.
   *
   * @param props
   */
  useRange: (props: RangeProxyProps) => void,

  /**
   * `useRefinementList` hook. This hook is used as a work-around to keep the search state persistent.
   *
   * @param props
   */
  useRefinementList: (props: RefinementListProxyProps) => void
};

const TYPE_AUTO = 'auto';
const TYPE_INT_ARRAY = 'int64[]';

/**
 * This component renders a context that queries the Typesense collection and returns a list of all facetable
 * attributes.
 */
const FacetStateContextProvider = (props: Props) => {
  const [facets, setFacets] = useState<Array<string>>([]);

  /**
   * Returns true if the passed field should be included as a facet.
   *
   * @type {(function(*): (*|boolean))|*}
   */
  const isValid = useCallback((field) => {
    if (!_.isEmpty(props.include)) {
      return _.contains(props.include, field.name);
    }

    if (!_.isEmpty(props.exclude)) {
      return _.contains(props.exclude, field.name);
    }

    return true;
  }, [props.exclude, props.include]);

  /**
   * Memo-ize the refinement list facets.
   */
  const listFacets = useMemo(() => (
    _.filter(facets, (field: any) => isValid(field)
      && field.facet && field.type !== TYPE_AUTO
      && field.type !== TYPE_INT_ARRAY)
  ), [facets, isValid]);

  /**
   * Memo-ize the range facets.
   */
  const rangeFacets = useMemo(() => (
    _.filter(facets, (field: any) => isValid(field) && field.facet && field.type === TYPE_INT_ARRAY)
  ), [facets, isValid]);

  /**
   * Backwards compatability for consumers using the "attributes" return value.
   */
  const attributes = useMemo(() => _.pluck(listFacets, 'name'), [listFacets]);

  /**
   * Loads the facets from the Typesense schema.
   */
  useEffect(() => {
    const url = `${props.protocol}://${props.host}/collections/${props.indexName}`;
    const headers = { 'X-TYPESENSE-API-KEY': props.apiKey };

    fetch(url, { headers })
      .then((response) => response.json())
      .then(({ fields }) => setFacets(fields));
  }, []);

  return (
    <FacetStateContext.Provider
      value={{
        attributes
      }}
    >
      { _.map(listFacets, (facet) => (
        <RefinementListProxy
          attribute={facet.name}
          key={facet.name}
          useRefinementList={props.useRefinementList}
        />
      ))}
      { _.map(rangeFacets, (facet) => (
        <RangeProxy
          attribute={facet.name}
          key={facet.name}
          useRange={props.useRange}
        />
      ))}
      { props.children }
    </FacetStateContext.Provider>
  );
};

export default FacetStateContextProvider;
