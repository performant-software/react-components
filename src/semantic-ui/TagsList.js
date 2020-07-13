import React from 'react';
import { Label } from 'semantic-ui-react';
import _ from 'underscore';
import './TagsList.css';

type Props = {
  config: {
    [key: string]: {
      background: string,
      color: string
    }
  },
  tags: Array<string>
};

const TagsList = ({ config, tags = [] }: Props) => (
  <div
    className='tags-list'
  >
    { _.map(tags || [], (tag) => (
      <Label
        style={{
          backgroundColor: config[tag] && config[tag].background,
          color: config[tag] && config[tag].color,
          marginRight: '10px'
        }}
      >
        { tag }
      </Label>
    ))}
  </div>
);

export default TagsList;
