// @flow

import React from 'react';
import { Button, Label } from 'semantic-ui-react';
import _ from 'underscore';

type Item = {
  label: string,
  onClick: () => void
};

type Props = {
  count?: number,
  items: Array<Item>,
  onShowMore?: () => void
};

/**
 * This component displays the passed items as labels. If a <code>count</code> prop is provided, the component
 * will display a "+" button.
 */
const CurrentFacetLabels = ({count = undefined, onShowMore = undefined, ...props}: Props) => (
  <Label.Group>
    { _.map(props.items, (item, index) => (
      <Label
        content={item.label}
        key={index}
        onRemove={item.onClick}
      />
    ))}
    { count && count > props.items.length && onShowMore && (
      <Label
        as={Button}
        content={`+${count - props.items.length}`}
        onClick={onShowMore}
      />
    )}
  </Label.Group>
);

export default CurrentFacetLabels;

export type {
  Item
};
