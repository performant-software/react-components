// @flow

import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import _ from 'underscore';
import './TagsList.css';

type Props = {
  config?: {
    [key: string]: {
      background: string,
      color: string
    }
  },
  onDelete?: (tag: string) => void,
  tags: Array<string>
};

const TagsList = (props: Props) => (
  <div
    className='tags-list'
  >
    { _.map(props.tags || [], (tag) => (
      <Label
        style={{
          backgroundColor: props.config && props.config[tag] && props.config[tag].background,
          color: props.config && props.config[tag] && props.config[tag].color,
          marginRight: '10px'
        }}
      >
        { tag }
        { props.onDelete && (
          <Icon
            name='delete'
            onClick={props.onDelete.bind(this, tag)}
          />
        )}
      </Label>
    ))}
  </div>
);

export default TagsList;
