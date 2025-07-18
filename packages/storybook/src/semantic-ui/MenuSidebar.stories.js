// @flow

import React from 'react';
import MenuSidebar from '../../../semantic-ui/src/components/MenuSidebar';

export default {
  title: 'Components/Semantic UI/MenuSidebar',
  component: MenuSidebar
};

export const Default = () => (
  <MenuSidebar
    header={{
      content: 'Test Application'
    }}
    items={[{
      content: 'Products',
      items: [{
        content: 'Enterprise',
        onClick: () => {}
      }, {
        content: 'Consumer',
        onClick: () => {}
      }]
    }, {
      content: 'CMS Solution',
      items: [{
        content: 'Rails',
        onClick: () => {}
      }, {
        content: 'Python',
        onClick: () => {}
      }, {
        content: 'PHP',
        onClick: () => {}
      }]
    }, {
      content: 'Hosting',
      items: [{
        content: 'Shared',
        onClick: () => {}
      }, {
        content: 'Dedicated',
        onClick: () => {}
      }]
    }, {
      content: 'Clothing',
      items: [{
        content: 'Mens',
        items: [{
          content: 'T-Shirts',
          onClick: () => {}
        }, {
          content: 'Pants',
          onClick: () => {}
        }]
      }, {
        content: 'Womens',
        items: [{
          content: 'T-Shirts',
          onClick: () => {}
        }, {
          content: 'Dresses',
          onClick: () => {}
        }]
      }]
    }]}
  />
);
