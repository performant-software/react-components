// @flow

import * as Accordion from '@radix-ui/react-accordion';
import { AlertCircle, ChevronDown } from 'lucide-react';
import React, { type Node } from 'react';
import _ from 'underscore';
import LoadAnimation from './LoadAnimation';

type Props = {
  /**
   * JSC child elements.
   */
  children: Node,

  /**
   * The count of the number of related items in the list.
   */
  count?: number,

  /**
   * If `true`, an alert icon is rendered.
   */
  error?: boolean,

  /**
   * The ID of the relationship.
   */
  id: string,

  /**
   * The accordion item label.
   */
  label: string,

  /**
   * If `true`, a loading indicator is rendered.
   */
  loading?: boolean
};

/**
 * This component renders an accordion wrapper for the passed related item.
 */
const RelatedItemsList = (props: Props) => (
  <Accordion.Item
    className='related-item'
    key={props.id}
    value={props.id}
  >
    <Accordion.Header
      asChild
    >
      <h2>
        <Accordion.Trigger
          className='accordion-trigger border-black/20 border border-t border-b-0 border-l-0 border-r-0 border-solid
                     rounded-none w-full flex justify-between items-center px-3 py-3 text-sm'
        >
          <div>
            { props.label }
            { _.isFinite(props.count) && (
              <span className='ml-1'>
                ({ props.count })
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
      </h2>
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
