// @flow

import * as Accordion from '@radix-ui/react-accordion';
import { AlertCircle, ChevronDown } from 'lucide-react';
import React, { type Node } from 'react';
import i18n from '../i18n/i18n';
import LoadAnimation from './LoadAnimation';

type Props = {
  children: Node,
  count?: number,
  error?: boolean,
  id: string,
  label: string,
  loading?: boolean
};

/**
 * This component renders the passed list of related items in an accordion fashion.
 */
const RelatedItemsList = (props: Props) => (
  <Accordion.Item
    className='related-item'
    key={props.id}
    value={props.id}
  >
    <Accordion.Header>
      <Accordion.Trigger
        className='accordion-trigger border-black/20 border border-t border-b-0 border-l-0 border-r-0 border-solid
          rounded-none w-full flex justify-between items-center px-3 py-3 text-sm'
      >
        <div>
          { props.label }
          { props.count && (
            <span className='ml-1'>
              { i18n.t('RelatedItemsList.labels.count', { count: props.count })}
            </span>
          )}
          { props.error && (
            <AlertCircle
              className='inline ml-1.5 h-4 w-4 text-red-600 align-text-bottom'
            />
          )}
          { props.loading && (
            <LoadAnimation
              className='text-muted/60 ml-4'
            />
          )}
        </div>
        <ChevronDown
          className='accordion-chevron h-4 w-4'
        />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content
      className='accordion-content text-sm leading-6'
      forceMount
    >
      { props.children }
    </Accordion.Content>
  </Accordion.Item>
);

export default RelatedItemsList;
