import React, { Component } from 'react';
import './TagsList.css';

type Props = {
  colors?: Array<string>,
  renderTag?: (text: string) => Component<{}>,
  tags: Array<string>
};

const TagsList = ({ colors, renderTag, tags }: Props) => (
  <div
    className='tags-list'
  >
    {
      tags.map((tag, index) => (
        <div
          className='tag'
          key={tag}
          style={{
            backgroundColor: colors[index % colors.length]
          }}
        >
          { renderTag ? renderTag(tag) : tag }
        </div>
      ))
    }
  </div>
);

TagsList.defaultProps = {
  colors: [
    '#cb997e',
    '#eddcd2',
    '#fff1e6',
    '#f0efeb',
    '#ddbea9',
    '#a5a58d',
    '#b7b7a4'
  ],
  renderTag: undefined
};

export default TagsList;
