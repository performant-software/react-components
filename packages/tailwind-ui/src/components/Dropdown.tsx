import React from 'react';
import { Menu, MenuButton, MenuButtonProps, MenuItem, MenuItems } from '@headlessui/react';
import { Element } from '@performant-software/shared-components';
import clsx from 'clsx';

interface Props {
  children: React.ElementType | React.ElementType[]
  className?: string
}

const Dropdown: React.FC<Props> = (props) => {
  const button = Element.findByType(props.children, Dropdown.Button);
  const items = Element.findByType(props.children, [Dropdown.Item, Dropdown.Divider]);

  return (
    <Menu>
      {button}
      <MenuItems
        anchor='bottom'
        className={clsx(
          'flex flex-col bg-zinc-50 border border-zinc-200 rounded-xl shadow-lg focus:outline-none',
          props.className
        )}
      >
        {items}
      </MenuItems>
    </Menu>
  );
};

Dropdown.Button = (props: MenuButtonProps) => {
  return (
    <MenuButton
      className='border border-zinc-200 bg-white text-zinc-500 shadow-sm rounded-lg py-2 px-3 font-sm font-semibold outline-offset-2 outline-2 outline-transparent data-active:outline-primary data-disabled:opacity-50'
      {...props}
    />
  );
};

interface DropdownItemProps {
  label: string
  description?: string
  icon?: React.FC
}

Dropdown.Item = (props: DropdownItemProps) => {
  return (
    <MenuItem
      className='bg-red px-4 py-2 hover:cursor-pointer text-zinc-500'
    >
      <span className='flex gap-3 items-center'>
        {props.icon && <props.icon />}
        <span className='text-black'>{props.label}</span>
      </span>
    </MenuItem>
  );
};

Dropdown.Divider = () => {
  return (
    <div className='w-full h-1 bg-zinc-200 px-4 py-2' />
  );
};

export default Dropdown;
