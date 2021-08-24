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
  icon?: string,
  options: Array<Option>,
  onChange: (e: Event, { value: any }) => void,
  scrolling?: boolean,
  selectOnBlur?: boolean,
  text: string,
  value: any
};

const DropdownButton = (props: Props) => {
  const dropdownRef = useRef();

  return (
    <Button.Group
      basic={props.basic}
      className='dropdown-button'
      color={props.color}
    >
      <Button
        content={props.text}
        icon={props.icon}
        onClick={(e) => dropdownRef.current && dropdownRef.current.handleClick(e)}
      />
      <Dropdown
        className='button icon'
        direction={props.direction}
        floating
        onChange={props.onChange.bind(this)}
        options={props.options}
        ref={dropdownRef}
        scrolling={props.scrolling}
        selectOnBlur={props.selectOnBlur}
        trigger={<></>}
        value={props.value}
      />
    </Button.Group>
  );
};

DropdownButton.defaultProps = {
  color: undefined,
  icon: undefined,
  selectOnBlur: false
};

export default DropdownButton;
