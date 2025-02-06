// @flow

import React from 'react';
import AccordionItemsList from '../../../core-data/src/components/AccordionItemsList';

export default {
  title: 'Components/Core Data/AccordionItemsList',
  component: AccordionItemsList
};

const sampleData = [
    {
        title: 'Related People',
        items: [
            {
                name: 'Gon Freecs'
            },
            {
                name: 'Killua Zoldyck'
            }
        ]
    },
    {
        title: 'Related Organizations',
        items: [
            {
                name: 'Hunters Association'
            }
        ]
    }
]

export const Default = () => (
  <AccordionItemsList
    relations={sampleData}
  />
);