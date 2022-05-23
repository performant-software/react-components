// @flow

import React, { useCallback } from 'react';
import {
  Dropdown,
  Menu,
  type DropdownItemProps,
  type HeaderProps,
  type MenuProps
} from 'semantic-ui-react';
import _ from 'underscore';
import DropdownMenu from './DropdownMenu';

type Props = MenuProps & {
  header: HeaderProps,
  items: Array<DropdownItemProps | MenuProps>
};

const MenuBar = ({ header, items, ...props }: Props) => {
  /**
   * Renders the passed item as a dropdown item.
   *
   * @param item
   *
   * @returns {JSX.Element}
   */
  const renderDropdownItem = useCallback((item, index) => (
    <Dropdown.Item
      key={index}
      {...item}
    />
  ), []);

  /**
   * Renders the passed item as a menu item.
   *
   * @returns {JSX.Element}
   */
  const renderMenuItem = useCallback((item, index) => (
    <Menu.Item
      key={index}
      {...item}
    />
  ), []);

  /**
   * Renders the passed item as a dropdown menu.
   *
   * @returns {JSX.Element}
   */
  const renderDropdown = useCallback((item, index) => (
    <DropdownMenu
      aria-label={item.content}
      item
      key={index}
      text={item.content}
    >
      { _.map(item.items, (i) => (i.items ? renderDropdown(i) : renderDropdownItem(i)))}
    </DropdownMenu>
  ), []);

  /**
   * Renders the passed item.
   *
   * @returns {JSX.Element}
   */
  const renderItem = useCallback((item) => (item.items ? renderDropdown(item) : renderMenuItem(item)), []);

  return (
    <Menu
      {...props}
      className='menu-bar'
    >
      <Menu.Item
        {...header}
        header
      />
      { _.map(items, (item) => renderItem(item)) }
    </Menu>
  );
};

export default MenuBar;
