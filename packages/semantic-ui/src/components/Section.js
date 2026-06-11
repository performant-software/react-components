// @flow

import React, { type Node } from 'react';
import { Divider, Header } from 'semantic-ui-react';

type Props = {
  children: Node,
  divided?: boolean,
  header?: string,
  visible?: boolean
}

const Section = ({divided = true, header = undefined, visible = true, ...props}: Props) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className='section'
    >
      { header && (
        <Header
          content={header}
        />
      )}
      { props.children }
      <Divider
        hidden={!divided}
      />
    </div>
  );
};

export default Section;
