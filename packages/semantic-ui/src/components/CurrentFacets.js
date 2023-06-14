// @flow

import React, { useMemo, useState } from 'react';
import _ from 'underscore';
import CurrentFacetLabels from './CurrentFacetLabels';
import CurrentFacetsModal from './CurrentFacetsModal';
import { type CurrentRefinementsProps } from '../hooks/InstantSearch';

type Props = CurrentRefinementsProps & {
  limit?: number
};

const CurrentFacets = ({ useCurrentRefinements, ...props }: Props) => {
  const [modal, setModal] = useState(false);
  const { items } = useCurrentRefinements(props);

  /**
   * Sets the facet items based on the current refinements.
   */
  const facets = useMemo(() => (
    _.flatten(_.map(items, (group) => _.map(group.refinements, (refinement) => ({
      label: `${group.label}: ${refinement.label}`,
      onClick: () => group.refine(refinement)
    }))))
  ), [items]);

  /**
   * Limits the list of facets to the passed "limit" prop.
   */
  const filteredFacets = useMemo(() => _.filter(facets, (facet, index) => (
    !props.limit || index < props.limit
  )), [facets, props.limit]);

  /**
   * Don't render the component if no refinements are applied.
   */
  if (_.isEmpty(facets)) {
    return null;
  }

  return (
    <>
      <CurrentFacetLabels
        count={facets.length}
        items={filteredFacets}
        onShowMore={() => setModal(true)}
      />
      <CurrentFacetsModal
        items={facets}
        open={modal}
        onClose={() => setModal(false)}
      />
    </>
  );
};

CurrentFacets.defaultProps = {
  limit: undefined
};

export default CurrentFacets;
