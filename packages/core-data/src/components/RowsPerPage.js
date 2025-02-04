// @flow

import React from 'react';
import {
  useHitsPerPage,
  useInstantSearch
} from 'react-instantsearch';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const HITS_PER_PAGE_OPTIONS = {
  items: [
    {
      label: '10',
      value: 10,
      default: true
    },
    {
      label: '20',
      value: 20,
    },
    {
      label: '50',
      value: 50,
    },
    {
      label: '100',
      value: 100,
    },
  ]
};

const HitsPerPage = () => {
  const refinePerPage = useHitsPerPage(HITS_PER_PAGE_OPTIONS).refine;
  const { results } = useInstantSearch();

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <button
          className='flex items-center p-2'
          type='button'
        >
          <span>{results.hitsPerPage}</span>
          <ChevronDownIcon />
        </button>
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          className='bg-white'
        >
          {HITS_PER_PAGE_OPTIONS.items.map((opt) => (
            <Dropdown.Item
              className='p-2 cursor-pointer'
              onSelect={() => refinePerPage(opt.value)}
            >
              {opt.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};

export default HitsPerPage;
