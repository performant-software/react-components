// @flow

import React, { useCallback } from 'react';
import _ from 'underscore';
import FacetList from './FacetList';
import TypesenseUtils from '../utils/Typesense';

type Props = {
  attributes: Array<string>,
  resolveLabel: (uuid: string) => string
};

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
        label={props.resolveLabel(uuid)}
        value={attribute}
      />
    );
  }, [props.resolveLabel]);

  return _.map(props.attributes, renderList);
};

export default FacetLists;
