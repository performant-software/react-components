import React from 'react';
import { Description, Field, Input as HeadlessInput, Label } from '@headlessui/react';
import clsx from 'clsx';

type InputType = 'text' | 'password' | 'email' | 'url' | 'tel' | 'search' | 'number'

interface Props {
  classes?: {
    field?: string
    input?: string
    label?: string
    description?: string
  }
  disabled?: boolean
  error?: boolean
  helperText?: string
  iconLeft?: React.FC
  iconRight?: React.FC
  type?: InputType
  label?: string
  onChange: (val: string) => any
  placeholder?: string
  value: string
}

const Input: React.FC<Props> = (props) => (
  <Field
    className='flex flex-col gap-2 text-zinc-950 group font-sans'
    data-disabled={props.disabled}
  >
    {props.label && (
      <Label className={clsx('text-sm font-semibold', props.classes?.label)}>
        {props.label}
      </Label>
    )}
    <div
      className='rounded-lg bg-white outline outline-zinc-200 hover:outline-zinc-300 focus-within:outline-blue-500 focus-within:hover:outline-blue-600 py-1.5 px-3 group-data-[disabled]:bg-zinc-50 group-data-[disabled]:text-zinc-400 data-[error]:outline-red-500 data-[error]:hover:outline-red-600 flex gap-2 items-center'
      data-error={props.error}
    >
      {props.iconLeft && (
        <props.iconLeft
          className='fill-zinc-400'
          size={16}
        />
      )}
      <HeadlessInput
        className={clsx('focus:outline-none grow bg-transparent leading-6', props.classes?.input)}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)}
        type={props.type}
        value={props.value}
      />
      {props.iconRight && (
        <props.iconRight
          className='fill-zinc-400'
          size={16}
        />
      )}
    </div>
    {props.helperText && (
      <Description 
        className={clsx('text-sm font-medium text-zinc-500 data-[error]:text-red-700 group-data-[disabled]:text-zinc-300', props.classes?.description)}
        data-error={props.error}
      >
        {props.helperText}
      </Description>
    )}
  </Field>
);

export default Input;