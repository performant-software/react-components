// @flow

import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import _ from 'underscore';
import NestedAccordion from '../../../src/semantic-ui/NestedAccordion';

export default {
  title: 'Components/Semantic UI/NestedAccordion',
  decorators: [withA11y]
};

const data = [{
  id: 1,
  name: 'Parent 1',
  parent_id: null
}, {
  id: 2,
  name: 'Parent 2',
  parent_id: null
}, {
  id: 3,
  name: 'Child 1',
  parent_id: 1
}, {
  id: 4,
  name: 'Child 2',
  parent_id: 1
}, {
  id: 5,
  name: 'Child 3',
  parent_id: 2
}, {
  id: 6,
  name: 'Grandchild 1',
  parent_id: 5
}];

export const Default = () => {
  const [activeItems, setActiveItems] = useState([]);
  const isActive = (item) => !!_.findWhere(activeItems, { id: item.id });

  return (
    <NestedAccordion
      getChildItems={(item) => _.where(data, { parent_id: item.id })}
      isActive={isActive.bind(this)}
      isSelected={() => false}
      onItemClick={action('click')}
      onItemToggle={(item) => {
        setActiveItems(isActive(item)
          ? _.reject(activeItems, (i) => i.id === item.id)
          : [...activeItems, item]);
      }}
      renderItem={(item) => item.name}
      rootItems={_.where(data, { parent_id: null })}
      showToggle={() => true}
    />
  );
};
