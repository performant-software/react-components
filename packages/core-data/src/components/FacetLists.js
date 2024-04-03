// @flow

import React, { useCallback, type Node } from 'react';
import _ from 'underscore';
import FacetList from './FacetList';
import TypesenseUtils from '../utils/Typesense';

type Props = {
  /**
   * The list of attributes for which to render the lists.
   */
  attributes: Array<string>,

  /**
   * Callback fired to render the facet list.
   *
   * @param attribute
   */
  renderList: (attribute: string) => Node,

  /**
   * Returns the label for the passed UUID value.
   *
   * @param uuid
   */
  resolveLabel: (uuid: string) => string
};

/**
 * This component renders a set of facet lists for the passed attributes.
 */
const FacetLists = (props: Props) => {
  /**
   * Renders the passed attribute.
   *
   * @type {function(string): *}
   */
  const renderList = useCallback((attribute: string) => {
    const uuid = TypesenseUtils.getFieldId(attribute);

    return (
      <FacetList
        key={attribute}
        label={props.resolveLabel(uuid)}
        renderList={() => props.renderList(attribute)}
      />
    );
  }, [props.renderList, props.resolveLabel]);

  return _.map(props.attributes, renderList);
};

export default FacetLists;
