// @flow

import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import React, { type Node } from 'react';
import _ from 'underscore';

type RelatedRecord = {
  /**
   * Optional data prop to pass other fields, e.g. if needed for rendering
  */
  data?: any,
 
  /**
    * The item will be rendered as a link if this prop is provided. Note this is overridden if a renderItem prop is provided
  */
  link?: string,

  /**
   * The primary name of the record (will display as text of the list item by default)
   */
  name: string,
}

type RelatedRecordsList = {  
  /**
   * The item count (optional)
   */
  count?: number | string,
  
  /**
   * Icon to use in front of each list item. Defaults to bullet. Note this is overridden if a renderItem prop is provided
   */
  icon?: JSX.Element,

  /**
   * List of related items
   */
  items: Array<RelatedRecord>,

  /**
   * Optional render prop to render the title and count; defaults to `${title} (${count})`
   */
  renderTitle?: (title: String, count?: number | string) => JSX.Element,
  
  /**
   * Optional render prop to render each item in the list
  */
  renderItem?: (item: RelatedRecord) => JSX.Element,

  /**
   * The title of the related model
   */
  title: string,
}

type Props = {
  /**
   * Optional list of classes to be applied to the root element
   */
  className?: string,

  /**
   * List of related models to render
   */
  relations: Array<RelatedRecordsList>
};

/**
 * This component renders the passed list of related items in an accordion fashion.
 */
const AccordionItemsList = (props: Props) => (
  <Accordion.Root
    className={clsx(
      'accordion-items-list',
      props.className
    )}
    type='multiple'
  >
    { _.map(props.relations, (relation, idx) => (
      <Accordion.Item key={idx} value={relation.title}>
        <Accordion.Header
          asChild
        >
          <h2>
            <Accordion.Trigger className='accordion-trigger border-black/20 border border-t border-b-0 border-l-0 border-r-0 border-solid rounded-none w-full flex justify-between items-center px-3 py-3 text-sm'>
              {
                relation.renderTitle ? (
                  relation.renderTitle(relation.title, relation.count)
                ) : (
                  <span>
                    { relation.title }
                    { relation.count ? <span className='ml-2'>({ relation.count })</span> : null }
                  </span>
                )
              }
            </Accordion.Trigger>
          </h2>
        </Accordion.Header>
        <Accordion.Content
          className='accordion-list-content text-sm leading-6 px-4 py-2'
        >
          <ul>
            {
              _.map(relation.items, (item, idx) => (
                <>
                  {
                    relation.renderItem ? (
                      relation.renderItem(item)
                    ) : (
                      <li key={idx}>
                        { item.name }
                      </li>
                    )
                  }
                </>
              ))
            }
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

export default AccordionItemsList;