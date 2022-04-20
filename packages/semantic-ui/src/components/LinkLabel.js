// @flow

import React from 'react';
import LinkButton from './LinkButton';
import './LinkLabel.css';

type Props = {
  content: string,
  htmlFor: string,
  label: string,
  onClick: () => void
};

const LinkLabel = (props: Props) => (
  <>
    <label
      className='link-label'
      htmlFor={props.htmlFor}
    >
      { props.label }
    </label>
    <LinkButton
      content={props.content}
      onClick={props.onClick.bind(this)}
    />
  </>
);

export default LinkLabel;
