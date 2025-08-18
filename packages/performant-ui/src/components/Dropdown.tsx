import React from 'react';
import { Menu, MenuButton, MenuButtonProps, MenuItem, MenuItems } from '@headlessui/react';
import { findByType } from '../helpers/Element';
import clsx from 'clsx';

interface DropdownProps {
  children: React.ReactNode
  className?: string
}

interface DropdownItemProps {
  label?: string
  description?: string
  icon?: React.FC
}

type DropdownComponent = React.FC<DropdownProps> & {
  Button: React.FC<MenuButtonProps>
  Divider: React.FC
  Item: React.FC<DropdownItemProps>
}

const Dropdown: DropdownComponent = (props) => {
  const button = findByType(props.children, Dropdown.Button);
  const menuContents = findByType(props.children, [Dropdown.Item, Dropdown.Divider]);

  return (
    <Menu>
      {button}
      <MenuItems
        anchor='bottom start'
        className={clsx(
          'flex flex-col bg-zinc-50 border border-zinc-200 rounded-xl shadow-lg focus:outline-none',
          props.className
        )}
      >
        {menuContents}
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
Dropdown.Button.displayName = 'Dropdown.Button'

Dropdown.Divider = () => {
  return (
    <div className='w-auto h-px bg-zinc-200 mx-4 my-1' />
  );
};
Dropdown.Divider.displayName = 'Dropdown.Divider'

Dropdown.Item = (props: DropdownItemProps) => {
  return (
    <MenuItem
      className='bg-red px-4 py-2 hover:cursor-pointer text-zinc-500 flex flex-col text-sm'
    >
      <div>
        <span className='flex gap-3 items-center'>
          {props.icon && <props.icon size={16} />}
          <span className='text-black h-full'>{props.label}</span>
        </span>
        {props.description && <p className='text-zinc-500 text-xs'>{props.description}</p>}
      </div>
    </MenuItem>
  );
};
Dropdown.Item.displayName = 'Dropdown.Item'

export default Dropdown;
