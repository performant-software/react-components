import React from 'react';
import clsx from 'clsx';
import { Field, Label, Switch as HeadlessSwitch, Description } from '@headlessui/react';

interface Props {
  classes?: {
    description?: string,
    label?: string,
    root?: string,
    switch?: string,
  }
  description?: string
  onChange: (arg: boolean) => any
  label: string
  side?: 'left' | 'right'
  value: boolean
}

const Switch: React.FC<Props> = (props) => {
  const side = props.side || 'left';

  return (
    <Field className={clsx(
      'flex items-center gap-6 text-sm font-sans px-2',
      props.classes?.root
    )}>
      {side === 'right' && (
        <SwitchText {...props} />
      )}
      <HeadlessSwitch
        className={clsx(
          'shrink-0 group inline-flex h-5 w-8 items-center rounded-full bg-gray-200 transition data-checked:bg-primary outline-2 outline-offset-2 outline-transparent focus:outline-primary',
          props.classes?.switch
        )}
        checked={props.value}
        onChange={props.onChange}
      >
        <span className='size-3.5 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-4' />
      </HeadlessSwitch>
      {side === 'left' && (
        <SwitchText {...props} />
      )}
    </Field>
  );
};

const SwitchText = (props: Props) => (
  <div>
    <Label
      className={clsx(
        'font-medium',
        props.classes?.label
      )}
    >
      {props.label}
    </Label>
    {props.description && (
      <Description
        className={clsx(
          'text-zinc-500',
          props.classes?.description
        )}
      >
        {props.description}
      </Description>
    )}
  </div>
);

export default Switch;
