// @flow

import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import _ from 'underscore';
import './SelectizeHeader.css';

type Props = {
  isSelected: (item: any) => boolean,
  items: Array<any>,
  onItemClick: (item: any) => void,
  renderItem: (item: any) => string | Component<{}>
};

const SelectizeHeader = (props: Props) => {
  if (!(props.items && props.items.length)) {
    return null;
  }

  return (
    <Segment
      className='selectize-header'
      textAlign='left'
    >
      { _.map(props.items, (item, index) => (
        <Button
          className='selected'
          content={props.renderItem(item)}
          icon={props.isSelected(item) ? 'times circle outline' : undefined}
          key={index}
          onClick={props.onItemClick.bind(this, item)}
          primary
          size='small'
        />
      ))}
    </Segment>
  );
};

export default SelectizeHeader;
