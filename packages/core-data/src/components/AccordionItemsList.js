// @flow

import * as Accordion from '@radix-ui/react-accordion';
import clsx from 'clsx';
import React from 'react';
import _ from 'underscore';
import Icon from './Icon';
import type { RelatedRecordsList } from '../types/RelatedRecordsList';

type Props = {
  /**
   * Optional list of classes to be applied to the root element
   */
  className?: string,

  /**
   * If true, will display the number of items in each section after the title
   */
  count?: Boolean,

  /**
   * List of related models to render
   */
  items: Array<RelatedRecordsList>
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
    { _.map(props.items, (relation, idx) => (
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
                    { props.count ? (
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
              _.map(relation.items, (item, idxx) => (
                <>
                  {
                    relation.renderItem ? (
                      relation.renderItem(item)
                    ) : (
                      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                      <li
                        key={idxx}
                        onClick={item.onClick}
                        onKeyDown={item.onClick}
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                        tabIndex={item.onClick ? '0' : '-1'}
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
