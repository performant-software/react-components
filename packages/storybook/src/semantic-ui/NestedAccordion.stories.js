// @flow

import React from 'react';
import { action } from '@storybook/addon-actions';
import _ from 'underscore';
import NestedAccordion from '../../../semantic-ui/src/components/NestedAccordion';

export default {
  title: 'Components/Semantic UI/NestedAccordion'
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

export const Default = () => (
  <NestedAccordion
    getChildItems={(item) => _.where(data, { parent_id: item.id })}
    onItemClick={action('click')}
    onItemToggle={action('toggle')}
    renderItem={(item) => item.name}
    rootItems={_.where(data, { parent_id: null })}
    showToggle={() => true}
  />
);
