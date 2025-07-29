import React from 'react';
import { Description, Field, Input as HeadlessInput, Label } from '@headlessui/react';
import clsx from 'clsx';

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
  label?: string
  onChange: (val: string) => any
  placeholder?: string
  value: string
}

const Input: React.FC<Props> = (props) => (
  <Field
    className='flex flex-col gap-2 text-zinc-950 dark:text-white group font-sans'
    data-disabled={props.disabled}
  >
    {props.label && (
      <Label className={clsx('text-sm font-semibold', props.classes?.label)}>
        {props.label}
      </Label>
    )}
    <div
      className='rounded-lg bg-white border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 hover:dark:border-zinc-600 focus-within:border-blue-500 py-1.5 px-3 group-data-[disabled]:bg-zinc-50 group-data-[disabled]:text-zinc-400 group-data-[disabled]:dark:bg-zinc-800 data-[error]:border-red-500 data-[error]:hover:border-red-600 data-[error]:hover:dark:border-red-500 flex gap-2 items-center dark:bg-black'
      data-error={props.error}
    >
      {props.iconLeft && (
        <props.iconLeft
          className='fill-zinc-400 dark:fill-zinc-500'
          size={16}
        />
      )}
      <HeadlessInput
        className={clsx('focus:outline-none grow bg-transparent leading-6', props.classes?.input)}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)}
        value={props.value}
      />
      {props.iconRight && (
        <props.iconRight
          className='fill-zinc-400 dark:fill-zinc-500'
          size={16}
        />
      )}
    </div>
    {props.helperText && (
      <Description 
        className={clsx('text-sm font-medium data-[error]:text-red-700 data-[error]:dark:text-red-400 text-sm group-data-[disabled]:text-zinc-400', props.classes?.description)}
        data-error={props.error}
      >
        {props.helperText}
      </Description>
    )}
  </Field>
);

export default Input;