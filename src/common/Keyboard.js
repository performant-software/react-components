// @flow

import React, { useEffect, useRef } from 'react';
import Keyboard from 'simple-keyboard';
import './Keyboard.css';

type Props = {
  layout: any,
  onChange: (value: string) => void,
  value: string,
  keyboardClass: string,
};

const KEY_CAPS_LOCK = '{lock}';
const KEY_SHIFT = '{shift}';

const LAYOUT_DEFAULT = 'default';
const LAYOUT_SHIFT = 'shift';

const KeyboardSimple = (props: Props) => {
  const keyboardRef = useRef();

  // Toggles the layout name for Shift and CapsLock keys.
  const onKeyPress = (value) => {
    const isCaps = value === KEY_CAPS_LOCK || value === KEY_SHIFT;

    if (isCaps && keyboardRef.current.options.layoutName === LAYOUT_SHIFT) {
      keyboardRef.current.setOptions({ layoutName: LAYOUT_DEFAULT });
    } else if (isCaps && keyboardRef.current.options.layoutName !== LAYOUT_SHIFT) {
      keyboardRef.current.setOptions({ layoutName: LAYOUT_SHIFT });
    }
  };

  // Sets up the keyboard reference and the initial value when the component is first rendered.
  useEffect(() => {
    const { layout, onChange } = props;
    keyboardRef.current = new Keyboard(`.${props.keyboardClass}`, { ...layout, onChange, onKeyPress });
    keyboardRef.current.setInput(props.value);
  }, []);

  // Sets the keyboard value when the value property changes.
  useEffect(() => {
    keyboardRef.current.setInput(props.value);
  }, [props.value]);

  return <div className={props.keyboardClass} />;
};

export default KeyboardSimple;
