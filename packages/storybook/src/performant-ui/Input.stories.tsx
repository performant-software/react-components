import React, { useState } from 'react';
import Input from '../../../performant-ui/src/components/Input';
import { MdLocationOn } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";

export default {
  title: 'Components/Performant UI/Input',
  component: Input
};

export const Default = () => {
  const [val, setVal] = useState('');

  return (
    <Input
      label='Name'
      onChange={(str) => setVal(str)}
      value={val}
    />
  );
};

export const Password = () => {
  const [val, setVal] = useState('');

  return (
    <Input
      label='Name'
      placeholder='Enter something secure!'
      onChange={(str) => setVal(str)}
      type='password'
      value={val}
    />
  );
};

export const Placeholder = () => {
  const [val, setVal] = useState('');

  return (
    <Input
      label='Name'
      placeholder='Jane Doe'
      onChange={(str) => setVal(str)}
      value={val}
    />
  );
};

export const HelperText = () => {
  const [val, setVal] = useState('');

  return (
    <Input
      label='Name'
      helperText='This is helper text.'
      onChange={(str) => setVal(str)}
      value={val}
    />
  );
};

export const Disabled = () => {
  const [val, setVal] = useState('');

  return (
    <Input
      label='Name'
      disabled
      placeholder="I'm disabled!"
      onChange={(str) => setVal(str)}
      value={val}
    />
  );
};

export const Error = () => {
  const [val, setVal] = useState('');

  return (
    <Input
      label='Name'
      error
      helperText='I have an error!'
      onChange={(str) => setVal(str)}
      value={val}
    />
  );
};

export const Icons = () => {
  const [val, setVal] = useState('');

  return (
    <Input
      label='Country'
      iconLeft={MdLocationOn}
      iconRight={FaRegQuestionCircle}
      helperText='I have icons!'
      onChange={(str) => setVal(str)}
      value={val}
    />
  );
};
