// @flow

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import MenuBar from '../../../semantic-ui/src/components/MenuBar';

export default {
  title: 'Components/Semantic UI/MenuBar',
  decorators: [withKnobs]
};

export const Default = () => (
  <MenuBar
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
