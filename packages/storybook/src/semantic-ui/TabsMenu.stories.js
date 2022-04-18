// @flow

import { TabsMenu } from '@performant-software/semantic-components';
import { action } from '@storybook/addon-actions';
import React from 'react';

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
      key: 'preferences',
      label: 'Preferences',
      visible: true
    }, {
      key: 'settings',
      label: 'Settings',
      visible: true
    }]}
  />
);
