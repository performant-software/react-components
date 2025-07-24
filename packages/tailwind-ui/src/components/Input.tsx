import React from 'react'
import { Description, Field, Input as HeadlessInput, Label } from '@headlessui/react'
import clsx from 'clsx'

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

const Input: React.FC<Props> = (props) => {
  return (
    <Field className='flex flex-col gap-2 text-zinc-950'>
      {props.label && (
        <Label className={clsx('text-sm font-semibold', props.classes?.label)}>
          {props.label}
        </Label>
      )}
      <div
        className='rounded-lg bg-white border border-zinc-200 hover:border-zinc-300 focus-within:border-blue-500 py-1.5 px-3 data-[disabled]:bg-zinc-50 data-[disabled]:text-zinc-400 data-[error]:border-red-500 data-[error]:hover:border-red-600 flex gap-2 items-center'
        data-disabled={props.disabled}
        data-error={props.error}
      >
        {props.iconLeft && (
          <props.iconLeft
            className='fill-zinc-400'
            size={16}
          />
        )}
        <HeadlessInput
          className={clsx('focus:outline-none grow bg-transparent', props.classes?.input)}
          disabled={props.disabled}
          placeholder={props.placeholder}
          onChange={e => props.onChange(e.target.value)}
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
          className={clsx('text-sm font-medium data-[error]:text-red-700 text-sm data-[disabled]:text-zinc-400', props.classes?.description)}
          data-error={props.error}
          data-disabled={props.disabled}
        >
          {props.helperText}
        </Description>
      )}
    </Field>
  )
}

export default Input