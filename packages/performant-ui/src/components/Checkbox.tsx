import React from 'react';
import { Description, Field, Checkbox as HeadlessCheckbox, Label } from '@headlessui/react';
import { FaCheck } from 'react-icons/fa';
import { MdOutlineHorizontalRule } from 'react-icons/md';
import clsx from 'clsx';

interface Props {
  classes?: {
    field?: string,
    checkbox?: string,
    label?: string,
    description?: string
  }
  description?: string;
  disabled?: boolean;
  label?: string;
  indeterminate?: boolean;
  onChange: (arg: boolean) => any;
  value?: boolean;
}

const Checkbox: React.FC<Props> = (props) => {
  return (
    <Field className={clsx(
      'flex gap-3',
      props.classes?.field
    )}>
      <HeadlessCheckbox
        disabled={props.disabled}
        checked={props.value}
        indeterminate={props.indeterminate}
        onChange={(val) => props.onChange(val)}
        className={clsx(
          'group rounded-sm border border-zinc-200 w-4 h-4 flex items-center justify-center data-checked:bg-primary data-checked:border-primary data-indeterminate:border-primary data-indeterminate:bg-primary my-0.5 outline-offset-2 focus:outline-2 focus:outline-primary data-disabled:opacity-50 data-disabled:grayscale hover:border-zinc-300 hover:data-checked:bg-primary-light hover:data-checked:border-primary-light',
          props.classes?.checkbox
        )}
      >
        <FaCheck className='hidden size-2.5 fill-black group-data-checked:not-group-data-indeterminate:block group-data-checked:not-group-data-indeterminate:fill-white' />
        <MdOutlineHorizontalRule className='hidden size-2.5 fill-black group-data-indeterminate:block group-data-indeterminate:fill-white' />
      </HeadlessCheckbox>
      <div className='flex flex-col gap-1 text-sm'>
        {props.label && <Label className={props.classes?.label}>{props.label}</Label>}
        {props.description && (
          <Description
            className={clsx(
              'text-zinc-500',
              props.classes?.description
            )}
          >
            {props.description}
          </Description>)}
      </div>
    </Field>
  );
};

export default Checkbox;
