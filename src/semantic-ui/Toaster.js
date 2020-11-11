// @flow

import React, { type Element, useEffect, useState } from 'react';
import { Message, Transition } from 'semantic-ui-react';
import _ from 'underscore';
import './Toaster.css';

type Props = {
  children: Array<Element<any>>,
  onDismiss?: () => void,
  timeout: number,
  type: string
};

const TRANSITION_DURATION = 700;

const Toaster = (props: Props) => {
  const [visible, setVisible] = useState(true);

  /*
   * If a timeout is provided, automatically hide the message after <code>timeout</code> milliseconds.
   */
  if (props.timeout && props.timeout > 0) {
    _.delay(() => {
      setVisible(false);
    }, props.timeout);
  }

  /*
   * If the toaster visibility has change to "false", call the onDismiss prop. We'll delay the call
   * by <code>TRANSITION_DURATION</code> milliseconds in order for the transition to run.
   */
  useEffect(() => {
    if (!visible && props.onDismiss) {
      _.delay(props.onDismiss.bind(this), TRANSITION_DURATION);
    }
  }, [visible]);

  return (
    <Transition
      animation='slide down'
      duration={TRANSITION_DURATION}
      transitionOnMount
      visible={visible}
    >
      <Message
        className='toaster'
        info={props.type === Toaster.MessageTypes.info}
        negative={props.type === Toaster.MessageTypes.negative}
        onDismiss={() => setVisible(false)}
        positive={props.type === Toaster.MessageTypes.positive}
        warning={props.type === Toaster.MessageTypes.negative}
      >
        { props.children }
      </Message>
    </Transition>
  );
};

Toaster.MessageTypes = {
  info: 'info',
  negative: 'negative',
  positive: 'positive',
  warning: 'warning'
};

Toaster.defaultProps = {
  onDismiss: undefined,
  timeout: 3000,
  type: Toaster.MessageTypes.info
};

export default Toaster;
