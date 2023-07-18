// @flow

import React, { useState } from 'react';
import FacetToggle from '../../../semantic-ui/src/components/FacetToggle';

export default {
  title: 'Components/Semantic UI/FacetToggle',
  component: FacetToggle
};

export const Default = () => {
  const [isRefined, setIsRefined] = useState(false);

  return (
    <FacetToggle
      title='Discount Items Only'
      useToggleRefinement={() => ({
        value: {
          isRefined,
          count: isRefined ? 385 : 182
        },
        refine: () => setIsRefined((prevValue) => !prevValue)
      })}
    />
  );
};
