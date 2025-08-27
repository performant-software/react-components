import React from 'react';
import { Radio, RadioGroup as HeadlessRadioGroup, Label, Description, Field } from '@headlessui/react';
import clsx from 'clsx';

interface RadioOption {
  id: string | number
  label: string,
  description?: string
}

interface Props {
  classes?: {
    root?: string,
    field?: string,
    button?: string,
    label?: string,
    description?: string
  }
  onChange: (arg: RadioOption) => any
  options?: RadioOption[]
  value: RadioOption
}

const RadioGroup: React.FC<Props> = (props) => {
  return (
    <HeadlessRadioGroup
      className={clsx(
        'text-black flex flex-col gap-2 text-sm',
        props.classes?.root
      )}
      onChange={props.onChange}
    >
      {props.options.map(opt => (
        <Field
          className={clsx(
            'group text-zinc-950 font-semibold focus:outline-none',
            props.classes?.field
          )}
          key={opt.id}
        >
          <Radio
            className='flex gap-2 hover:cursor-pointer'
            value={opt}
          >
            <RadioIcon
              className={props.classes?.button}
              selected={props.value === opt}
            />
            <div>
              <Label
                className={clsx(
                  'hover:cursor-pointer',
                  props.classes?.label
                )}
              >
                {opt.label}
              </Label>
              {opt.description && (
                <Description
                  className={clsx(
                    'text-zinc-500',
                    props.classes?.description
                  )}
                >
                  {opt.description}
                </Description>
              )}
            </div>
          </Radio>
        </Field>
      ))}
    </HeadlessRadioGroup>
  );
};

interface RadioIconProps {
  className?: string
  selected?: boolean
}

const RadioIcon = (props: RadioIconProps) => (
  <div className={clsx(
    'rounded-full border h-4 w-4 flex items-center justify-center outline-offset-2 outline-primary group-focus:outline-2 mt-0.5',
    { 'bg-primary border-primary': props.selected },
    { 'border-zinc-200': !props.selected },
    props.className
  )}>
    {props.selected && (
      <div className='rounded-full bg-white w-1.5 h-1.5' />
    )}
  </div>
);

export default RadioGroup;
