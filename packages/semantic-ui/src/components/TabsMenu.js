// @flow

import React from 'react';
import { Menu } from 'semantic-ui-react';
import _ from 'underscore';

type Tab = {
  active: boolean,
  key: string,
  label: string,
  visible: boolean
};

type Props = {
  onTabClick: (tab: Tab) => void,
  tabs: Array<Tab>
}

const TabsMenu = (props: Props) => (
  <Menu
    pointing
    secondary
  >
    { _.map(_.where(props.tabs, { visible: true }), (tab) => (
      <Menu.Item
        active={tab.active}
        key={tab.key}
        name={tab.label}
        onClick={props.onTabClick.bind(this, tab)}
      />
    ))}
  </Menu>
);

export default TabsMenu;
