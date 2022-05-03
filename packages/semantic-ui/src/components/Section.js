// @flow

import React, { type Node } from 'react';
import { Divider, Header } from 'semantic-ui-react';

type Props = {
  children: Node,
  divided?: boolean,
  header?: string,
  visible?: boolean
}

const Section = (props: Props) => {
  if (!props.visible) {
    return null;
  }

  return (
    <div
      className='section'
    >
      { props.header && (
        <Header
          content={props.header}
        />
      )}
      { props.children }
      <Divider
        hidden={!props.divided}
      />
    </div>
  );
};

Section.defaultProps = {
  divided: true,
  header: undefined,
  visible: true
};

export default Section;
