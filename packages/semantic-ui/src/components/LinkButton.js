// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';
import './LinkButton.css';

type Props = {
  content: string,
  onClick: () => void
};

const LinkButton = (props: Props) => (
  <Button
    basic
    className='link-button'
    compact
    content={props.content}
    onClick={props.onClick.bind(this)}
    type='button'
  />
);

export default LinkButton;
