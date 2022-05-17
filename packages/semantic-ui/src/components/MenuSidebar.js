// @flow

import React, { useCallback } from 'react';
import {
  Header,
  Menu,
  Ref,
  type HeaderProps,
  type MenuItemProps
} from 'semantic-ui-react';
import _ from 'underscore';

type Props = {
  contextRef: {
    current: ?HTMLElement
  },
  header: HeaderProps,
  items: Array<HeaderProps | MenuItemProps>
};

const MenuSidebar = ({
  contextRef,
  header,
  items,
  ...props
}: Props) => {
  /**
   * Renders the passed item as a menu.
   *
   * @type {unknown}
   */
  const renderMenu = useCallback((item, index) => (
    <Menu.Item
      key={index}
    >
      <Menu.Header
        {...item}
      />
      <Menu.Menu>
        { _.map(item.items, (i) => renderItem(i)) }
      </Menu.Menu>
    </Menu.Item>
  ), []);

  /**
   * Renders the passed item as a menu item.
   *
   * @type {unknown}
   */
  const renderMenuItem = useCallback((item, index) => (
    <Menu.Item
      key={index}
      {...item}
    />
  ), []);

  /**
   * Renders the passed item.
   *
   * @type {function(*): *}
   */
  const renderItem = useCallback((item) => (item.items ? renderMenu(item) : renderMenuItem(item)), []);

  return (
    <Ref
      innerRef={contextRef}
    >
      <Menu
        {...props}
        fixed='left'
        vertical
      >
        <Menu.Item>
          <Header
            {...header}
          />
        </Menu.Item>
        { _.map(items, (item) => renderItem(item)) }
      </Menu>
    </Ref>
  );
};

export default MenuSidebar;
