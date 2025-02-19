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
];

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
];

const sampleDataWithImages = [
  {
    title: 'Related Images',
    horizontal: true,
    renderItem: (item) => (
      <img src={item.data.src} className='max-h-[90px]' alt={item.name} />
    ),
    items: [
      {
        name: 'Kazuya Miyuki',
        data: {
          src: 'https://static.wikia.nocookie.net/all-worlds-alliance/images/1/15/MiyukiKazuya-Render.png'
        }
      },
      {
        name: 'Eijun Sawamura',
        data: {
          src: 'https://static.wikia.nocookie.net/all-worlds-alliance/images/2/22/369779ccc7619f63a468c6e8fd3be2f4.png'
        }
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
];

const sampleDataWithClickEvent = [
  {
    title: 'Related People',
    items: [
      {
        name: 'Kazuya Miyuki',
        onClick: () => { alert('Kazuya Miyuki!'); }
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
];

export const Default = () => (
  <AccordionItemsList
    items={sampleData}
  />
);

export const WithIcons = () => (
  <AccordionItemsList
    items={sampleDataWithIcon}
  />
);

export const WithCount = () => (
  <AccordionItemsList
    items={sampleData}
    count
  />
);

export const WithClickEvent = () => (
  <AccordionItemsList
    items={sampleDataWithClickEvent}
  />
);

export const WithImagesInRow = () => (
  <AccordionItemsList
    items={sampleDataWithImages}
  />
);
