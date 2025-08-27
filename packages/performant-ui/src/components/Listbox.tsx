import React from 'react';
import { Field, Listbox as HeadlessListbox, Label, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { HiCheck } from 'react-icons/hi';
import { HiChevronUpDown } from 'react-icons/hi2';
import clsx from 'clsx';

interface ListboxItem {
  id: number | string,
  label: string
}

interface Props {
  classes?: {
    button?: string
    label?: string
    options?: string
    option?: string
  }
  disabled?: boolean;
  label?: string
  options: ListboxItem[];
  onChange: (arg: ListboxItem) => any;
  placeholder?: string
  value?: ListboxItem;
}

const Listbox: React.FC<Props> = (props) => (
  <Field
    className='flex flex-col gap-2 text-zinc-950 group font-sans'
    data-disabled={props.disabled}
  >
    {props.label && (
      <Label className={clsx('text-sm font-semibold', props.classes?.label)}>
        {props.label}
      </Label>
    )}
    <HeadlessListbox
      onChange={props.onChange}
    >
      <ListboxButton
        className={clsx('group flex items-center justify-between gap-3 py-2 px-3 rounded-lg border border-zinc-200 bg-white shadow-sm data-disabled:opacity-50 outline-2 outline-offset-2 outline-transparent focus:outline-primary text-black text-sm font-semibold', props.classes?.button)}
        disabled={props.disabled}
      >
        {props.value
          ? <span>{props.value.label}</span>
          : <span className='text-zinc-500'>{props.placeholder}</span>}
        <HiChevronUpDown
          aria-hidden='true'
          size={20}
        />
      </ListboxButton>
      <ListboxOptions
        anchor='bottom start'
        transition
        className={clsx('bg-white shadow-lg border border-zinc-200 rounded-xl outline-none', props.classes?.options)}
      >
        {props.options.map((option) => (
          <ListboxOption
            className={clsx('group hover:bg-primary hover:text-white flex items-center gap-2 py-2 pl-2.5 pr-4 hover:cursor-pointer text-sm text-zinc-950 w-(--button-width)', props.classes?.option)}
            key={option.id}
            value={option}
          >
            <HiCheck
              className='invisible size-4 fill-zinc-500 group-hover:fill-white group-data-selected:visible'
              size={20}
            />
            <div className='text-sm/6'>{option.label}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </HeadlessListbox>
  </Field>
);

export default Listbox;