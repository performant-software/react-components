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
                name: 'Kazuya Miyuki'
            },
            {
                name: 'Eijun Sawamura'
            }
        ]
    },
    {
        title: 'Related Organizations',
        items: [
            {
                name: 'Seido High School Baseball Club'
            }
        ]
    }
]

const sampleDataWithIcon = [
    {
        title: 'Related People',
        items: [
            {
                name: 'Kazuya Miyuki'
            },
            {
                name: 'Eijun Sawamura'
            }
        ],
        icon: 'person'
    },
    {
        title: 'Related Organizations',
        items: [
            {
                name: 'Seido High School Baseball Club'
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
              name: 'Kazuya Miyuki'
          },
          {
              name: 'Eijun Sawamura'
          }
      ],
      count: true
  },
  {
      title: 'Related Organizations',
      items: [
          {
              name: 'Seido High School Baseball Club'
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
              name: 'Kazuya Miyuki',
              onClick: () => { alert('Kazuya Miyuki!') }
          },
          {
              name: 'Eijun Sawamura'
          }
      ],
      count: true
  },
  {
      title: 'Related Organizations',
      items: [
          {
              name: 'Seido High School Baseball Club'
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