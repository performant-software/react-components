// @flow

import React, { type Element, useEffect, useState } from 'react';
import { Message, Transition } from 'semantic-ui-react';
import _ from 'underscore';
import './Toaster.css';

type Props = {
  /**
   * A child element that will be displayed in the toaster pane.
   * It can be a simple as a Text string or any child component.
   */
  children: Array<Element<any>>,
  /**
   * An optional function to be called when the toaster pane closes.
   */
  onDismiss?: () => void,
  /**
   * Time in milliseconds that the toaster should be displayed to the
   * user.
   */
  timeout: number,
  /**
   * The type of Toaster that should be displayed. The Toaster component supports:
   *  * "info" - A yellow Toaster pane used to display useful but non-critical information
   *  * "positive" - A green toaster pane. This should be used for postive user feedback
   *  * "negative" - A red toaster pane. This should be used for negative user feedback and errors
   *  * "warning"
   */
  type: string
};

const TRANSITION_DURATION = 700;

/**
 *
 * This is a simple messaging pane that drops from the top of
 * the page and displays that child elements
 */
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
        warning={props.type === Toaster.MessageTypes.warning}
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
