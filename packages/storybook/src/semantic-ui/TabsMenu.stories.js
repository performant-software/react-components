// @flow

import { action } from '@storybook/addon-actions';
import React from 'react';
import TabsMenu from '../../../semantic-ui/src/components/TabsMenu';

export default {
  title: 'Components/Semantic UI/TabsMenu'
};

export const Default = () => (
  <TabsMenu
    onTabClick={action('tab-click')}
    tabs={[{
      active: true,
      key: 'profile',
      label: 'Profile',
      visible: true
    }, {
      active: false,
      key: 'preferences',
      label: 'Preferences',
      visible: true
    }, {
      active: false,
      key: 'settings',
      label: 'Settings',
      visible: true
    }]}
  />
);
