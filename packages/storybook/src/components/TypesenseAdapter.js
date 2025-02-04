// @flow

import React from 'react';
import { SearchBox, InstantSearch } from 'react-instantsearch';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
import Env from '../utils/Environment';

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: Env.getTypesenseSearchKey(),
    nodes: [
      {
        host: Env.getTypesenseSearchUrl(),
        port: '443',
        protocol: 'https',
      },
    ],
    cacheSearchResultsForSeconds: 300
  },
  additionalSearchParameters: {
    query_by: 'name',
  },
});

interface Props {
  children: Node
}

const InstantSearchProvider = (props: Props) => (
  <InstantSearch
    indexName={Env.getTypesenseCollection()}
    searchClient={typesenseInstantsearchAdapter.searchClient}
  >
    <SearchBox />
    {props.children}
  </InstantSearch>
);

export default InstantSearchProvider;
