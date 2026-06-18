// @flow

import React, { useRef } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';
import './DropdownButton.css';

type Option = {
  key: any,
  value: any,
  text: string
};

type Props = {
  basic?: boolean,
  color?: string,
  direction?: string,
  disabled?: boolean,
  icon?: string,
  options: Array<Option>,
  onChange: (e: Event, { value: any }) => void,
  scrolling?: boolean,
  selectOnBlur?: boolean,
  text: string,
  value: any
};

const DropdownButton = ({color = undefined, icon = undefined, selectOnBlur = false, ...props}: Props) => {
  const dropdownRef = useRef();

  return (
    <Button.Group
      basic={props.basic}
      className='dropdown-button'
      color={color}
    >
      <Button
        aria-label='Select'
        content={props.text}
        disabled={props.disabled}
        icon={icon}
        onClick={(e) => dropdownRef.current && dropdownRef.current.handleClick(e)}
      />
      <Dropdown
        aria-label='Select'
        className='button icon'
        direction={props.direction}
        disabled={props.disabled}
        floating
        onChange={props.onChange.bind(this)}
        options={props.options}
        ref={dropdownRef}
        scrolling={props.scrolling}
        selectOnBlur={selectOnBlur}
        trigger={<></>}
        value={props.value}
      />
    </Button.Group>
  );
};

export default DropdownButton;
