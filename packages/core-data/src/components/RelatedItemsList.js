// @flow

import * as Accordion from '@radix-ui/react-accordion';
import { AlertCircle, ChevronDown } from 'lucide-react';
import React from 'react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import LoadAnimation from './LoadAnimation';
import type { RelatedItems } from '../types/RelatedItems';
import RelatedMedia from './RelatedMedia';
import RelatedOrganizations from './RelatedOrganizations';
import RelatedPeople from './RelatedPeople';
import RelatedPlaces from './RelatedPlaces';
import RelatedTaxonomies from './RelatedTaxonomies';
import './RelatedItemsList.css';

type Props = {
  /**
   * A list of related items.
   */
  items: Array<RelatedItems>
};

/**
 * This component renders the passed list of related items in an accordion fashion.
 */
const RelatedItemsList = (props: Props) => {
  if (_.isEmpty(props.items)) {
    return null;
  }

  return (
    <Accordion.Root
      className='related-items-list'
      type='multiple'
    >
      { _.map(props.items, ({ data, error, ...conf }) => (
        <Accordion.Item
          key={conf.endpoint}
          value={conf.endpoint}
        >
          <Accordion.Header>
            <Accordion.Trigger
              className='accordion-trigger border-black/20 border border-t border-b-0 border-l-0 border-r-0 border-solid
                rounded-none w-full flex justify-between items-center px-3 py-3 text-sm'
            >
              <div>
                { conf.ui_label }
                { data && (
                  <span className='ml-1'>
                    { i18n.t('RelatedItemsList.labels.count', { count: data.items?.length })}
                  </span>
                )}
                { error && (
                  <AlertCircle
                    className='inline ml-1.5 h-4 w-4 text-red-600 align-text-bottom'
                  />
                )}
                { !(data || error) && (
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
          >
            { conf.endpoint === 'media_contents' && (
              <RelatedMedia
                data={data}
              />
            )}
            { conf.endpoint === 'organizations' && (
              <RelatedOrganizations
                data={data}
              />
            )}
            { conf.endpoint === 'people' && (
              <RelatedPeople
                data={data}
              />
            )}
            { conf.endpoint === 'places' && (
              <RelatedPlaces
                data={data}
              />
            )}
            { conf.endpoint === 'taxonomies' && (
              <RelatedTaxonomies
                data={data}
              />
            )}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default RelatedItemsList;
