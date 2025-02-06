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

const sampleDataWithIcon = [
    {
        title: 'Related People',
        items: [
            {
                name: 'Gon Freecs'
            },
            {
                name: 'Killua Zoldyck'
            }
        ],
        icon: 'person'
    },
    {
        title: 'Related Organizations',
        items: [
            {
                name: 'Hunters Association'
            }
        ],
        icon: 'occupation'
    }
]

const sampleDataWithCount = [
  {
      title: 'Related People',
      items: [
          {
              name: 'Gon Freecs'
          },
          {
              name: 'Killua Zoldyck'
          }
      ],
      count: true
  },
  {
      title: 'Related Organizations',
      items: [
          {
              name: 'Hunters Association'
          }
      ],
      count: true
  }
]

const sampleDataWithClickEvent = [
  {
      title: 'Related People',
      items: [
          {
              name: 'Gon Freecs',
              onClick: () => { alert('Gon!') }
          },
          {
              name: 'Killua Zoldyck'
          }
      ],
      count: true
  },
  {
      title: 'Related Organizations',
      items: [
          {
              name: 'Hunters Association'
          }
      ],
      count: true
  }
]

export const Default = () => (
  <AccordionItemsList
    relations={sampleData}
  />
);

export const WithIcons = () => (
  <AccordionItemsList
    relations={sampleDataWithIcon}
  />
)

export const WithCount = () => (
  <AccordionItemsList
    relations={sampleDataWithCount}
  />
)

export const WithClickEvent = () => (
  <AccordionItemsList
    relations={sampleDataWithClickEvent}
  />
)