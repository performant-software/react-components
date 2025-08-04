import React from 'react';
import { Listbox as HeadlessListbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { HiCheck } from 'react-icons/hi';
import { HiChevronUpDown } from 'react-icons/hi2';
import clsx from 'clsx';

interface ListboxItem {
  id: number,
  value: string
}

interface Props {
  classes?: {
    button?: string
    options?: string
    option?: string
  }
  disabled?: boolean;
  options: ListboxItem[];
  onChange: (arg: ListboxItem) => any;
  value: ListboxItem;
}

const Listbox: React.FC<Props> = (props) => (
  <HeadlessListbox
    onChange={props.onChange}
  >
    <ListboxButton
      className={clsx('group flex items-center justify-between gap-3 py-2 px-3 rounded-lg border border-zinc-200 bg-white shadow-sm data-disabled:opacity-50 outline-2 outline-offset-2 outline-transparent focus:outline-primary text-black text-sm font-semibold', props.classes?.button)}
      disabled={props.disabled}
    >
      {props.value.name}
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
          className={clsx('group hover:bg-primary hover:text-white flex items-center gap-2 py-2 pl-2.5 pr-4 hover:cursor-pointer gap-2.5 text-sm text-zinc-950', props.classes?.option)}
          key={option.name}
          value={option}
        >
          <HiCheck
            className='invisible size-4 fill-zinc-500 group-hover:fill-white group-data-selected:visible'
            size={20}
          />
          <div className='text-sm/6'>{option.name}</div>
        </ListboxOption>
      ))}
    </ListboxOptions>
  </HeadlessListbox>
);

export default Listbox;