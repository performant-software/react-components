import React, { useState } from 'react';
import Input from '../../../tailwind-ui/src/components/Input';
import { MdLocationOn } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";

export default {
  title: 'Components/TailwindUI/Input',
  component: Input
};

export const Default = () => {
  const [val, setVal] = useState('')

  return (
    <Input
      label='Name'
      onChange={(str) => setVal(str)}
      value={val}
    />
  )
}

export const Placeholder = () => {
  const [val, setVal] = useState('')

  return (
    <Input
      label='Name'
      placeholder='Jane Doe'
      onChange={(str) => setVal(str)}
      value={val}
    />
  )
}

export const Disabled = () => {
  const [val, setVal] = useState('')

  return (
    <Input
      label='Name'
      disabled
      placeholder="I'm disabled!"
      onChange={(str) => setVal(str)}
      value={val}
    />
  )
}

export const Error = () => {
  const [val, setVal] = useState('')

  return (
    <Input
      label='Name'
      error
      helperText="I have an error!"
      onChange={(str) => setVal(str)}
      value={val}
    />
  )
}

export const Icons = () => {
  const [val, setVal] = useState('')

  return (
    <Input
      label='Country'
      iconLeft={MdLocationOn}
      iconRight={FaRegQuestionCircle}
      helperText="I have icons!"
      onChange={(str) => setVal(str)}
      value={val}
    />
  )
}
