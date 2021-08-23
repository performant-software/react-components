// @flow

import React, { useRef } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

type Option = {
  key: any,
  value: any,
  text: string
};

type Props = {
  color?: string,
  direction?: string,
  disabled?: boolean,
  icon?: string,
  options: Array<Option>,
  onChange: (e: Event, { value: any }) => void,
  text: string,
  value: any
};

const DropdownButton = (props: Props) => {
  const dropdownRef = useRef();

  return (
    <Button.Group
      color={props.color}
    >
      <Button
        content={props.text}
        disabled={props.disabled}
        icon={props.icon}
        onClick={(e) => dropdownRef.current && dropdownRef.current.handleClick(e)}
      />
      <Dropdown
        className='button icon'
        direction={props.direction}
        disabled={props.disabled}
        floating
        onChange={props.onChange.bind(this)}
        options={props.options}
        ref={dropdownRef}
        trigger={<></>}
        value={props.value}
      />
    </Button.Group>
  );
};

DropdownButton.defaultProps = {
  color: undefined,
  icon: undefined
};

export default DropdownButton;
