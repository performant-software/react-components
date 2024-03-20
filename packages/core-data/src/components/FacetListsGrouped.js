// @flow

import React, { useCallback, useMemo, type Node } from 'react';
import _ from 'underscore';
import FacetLists from './FacetLists';
import TypesenseUtils from '../utils/Typesense';

type Props = {
  attributes: Array<string>,
  renderList: (attribute: string) => Node,
  resolveLabel: (uuid: string) => string
};

const DEFAULT_ID = 'root';

const FacetListsGrouped = (props: Props) => {
  /**
   * Groups the attributes according to the relationship UUID prefix.
   */
  const groupedAttributes = useMemo(() => {
    const value = [];

    _.each(props.attributes, (attribute: string) => {
      const id = TypesenseUtils.getRelationshipId(attribute) || DEFAULT_ID;
      const label = props.resolveLabel(id);

      let group = _.findWhere(value, { id });
      if (!group) {
        group = { id, label, items: [] };
        value.push(group);
      }

      group.items.push(attribute);
    });

    return _.sortBy(value, 'label');
  }, [props.attributes, props.resolveLabel]);

  /**
   * Renders the section for the passed item. An item can contain many facets.
   *
   * @type {unknown}
   */
  const renderSection = useCallback((item) => (
    <div
      className='border-t my-3'
      key={item.id}
    >
      <h1>{ item.label }</h1>
      <FacetLists
        attributes={item.items}
        renderList={props.renderList}
        resolveLabel={props.resolveLabel}
      />
    </div>
  ), [props.resolveLabel]);

  return _.map(groupedAttributes, renderSection);
};

export default FacetListsGrouped;
