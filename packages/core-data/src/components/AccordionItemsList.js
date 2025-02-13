// @flow

import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import React, { type Node } from 'react';
import _ from 'underscore';
import Icon from './Icon';
import type { RelatedRecordsList } from '../types/RelatedRecordsList';

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
            <Accordion.Trigger
              className='accordion-list-trigger border-neutral-100 border border-t border-b-0 border-l-0 border-r-0 border-solid rounded-none w-full flex justify-between items-center p-4 text-[15px] font-bold leading-[120%]'
            >
              {
                relation.renderTitle ? (
                  relation.renderTitle(relation.title, relation.count)
                ) : (
                  <span>
                    { relation.title }
                    { relation.count ? (
                      <span className='ml-2'>
                        (
                        { relation.items.length }
                        )
                      </span>
                    ) : null }
                  </span>
                )
              }
              <Icon
                className='accordion-list-chevron'
                name='right'
                size={18}
              />
            </Accordion.Trigger>
          </h2>
        </Accordion.Header>
        <Accordion.Content
          className='accordion-list-content text-[13px] font-semibold leading-[120%]'
        >
          <ul>
            {
              _.map(relation.items, (item, idx) => (
                <>
                  {
                    relation.renderItem ? (
                      relation.renderItem(item)
                    ) : (
                      <li
                        key={idx}
                        onClick={item.onClick}
                        className={
                        clsx(
                          'flex flex-row gap-2 items-baseline px-6 py-2',
                          {
                            'hover:bg-neutral-100': item.onClick,
                            'cursor-pointer': item.onClick
                          }
                        )
}
                      >
                        {
                          relation.icon && (
                            <Icon
                              name={relation.icon}
                              size={14}
                            />
                          )
                        }
                        <span>
                          { item.name }
                        </span>
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
