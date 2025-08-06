import React from 'react';
import { Description, Field, Label, Textarea } from '@headlessui/react';
import clsx from 'clsx';

interface Props {
  classes?: {
    field?: string
    textarea?: string
    label?: string
    description?: string
    errorText?: string
  }
  disabled?: boolean
  error?: boolean
  label?: string
  errorText?: string
  helperText?: string
  onChange: (val: string) => any
  placeholder?: string
  rows?: number
  value?: string
}

const TextArea: React.FC<Props> = (props) => {
  return (
    <Field
      className={clsx(
        'font-sans',
        props.classes?.field
      )}
      data-disabled={props.disabled}
    >
      {props.label && (
        <Label
          className={clsx(
            'text-sm font-semibold text-zinc-950',
            props.classes?.label
          )}
        >
          {props.label}
        </Label>
      )}
      {props.helperText && (
        <Description
          className={clsx(
            'text-sm text-zinc-500',
            props.classes?.description
          )}
        >
          {props.helperText}
        </Description>
      )}
      <Textarea
        className={clsx(
          'rounded-lg bg-white outline-2 outline-zinc-200 hover:outline-zinc-300 focus:outline-blue-500 focus:hover:outline-blue-600 py-1.5 px-3 mt-2 group-data-[disabled]:bg-zinc-50 group-data-[disabled]:text-zinc-400 data-[error]:not-focus:outline-red-500 data-[error]:hover:not-focus:outline-red-600 flex gap-2 items-center',
          props.classes?.textarea
        )}
        data-error={props.error}
        rows={props.rows || 3}
        disabled={props.disabled}
        placeholder={props.placeholder}
        onChange={e => props.onChange(e.target.value)}
        value={props.value}
      />
      {!!props.errorText && props.error && (
        <p
          className={clsx(
            'text-red-700 text-sm font-medium mt-2',
            props.classes?.errorText
          )}
        >
          {props.errorText}
        </p>
      )}
    </Field>
  );
};

export default TextArea;
