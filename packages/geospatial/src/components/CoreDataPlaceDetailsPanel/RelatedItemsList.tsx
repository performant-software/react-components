import React from 'react';
import { AnnotationPage } from '@peripleo/peripleo';
import * as Accordion from '@radix-ui/react-accordion';
import { AlertCircle, ChevronDown } from 'lucide-react';
import { LoadAnimation } from './LoadAnimation';
import { 
  CoreDataRelatedMedia, 
  CoreDataRelatedOrganization, 
  CoreDataRelatedPerson, 
  CoreDataRelatedPlace, 
  CoreDataRelatedTaxonomy,
  RelatedItemsData
} from '../CoreDataTypes';
import { 
  RelatedMedia, 
  RelatedOrganizations, 
  RelatedPeople, 
  RelatedPlaces, 
  RelatedTaxonomies 
} from './sections';


interface RelatedItemsListProps {

  items: RelatedItemsData[];

}

export const RelatedItemsList = (props: RelatedItemsListProps) => {

  return props.items.length > 0 && (
    <Accordion.Root type="multiple">
      {props.items.map(({ data, error, ...conf }) => (
        <Accordion.Item value={conf.endpoint} key={conf.endpoint}>
          <Accordion.Header>
            <Accordion.Trigger 
              className="accordion-trigger border-black/20 border border-t border-b-0 border-l-0 border-r-0 border-solid 
                rounded-none w-full flex justify-between items-center px-3 py-3 text-sm">
              <div>
                {conf.ui_label}

                {data ? (
                  <span className="ml-1">({data.items.length})</span>
                ) : error ? (
                  <AlertCircle className="inline ml-1.5 h-4 w-4 text-red-600 align-text-bottom" />
                ) : (
                  <LoadAnimation className="text-muted/60 ml-4"/>
                )}
              </div>

              <ChevronDown className="accordion-chevron h-4 w-4" />
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="accordion-content text-sm leading-6">
            {conf.endpoint === 'media_contents' ? (
              <RelatedMedia data={data} />
            ) : conf.endpoint === 'organizations' ? (
              <RelatedOrganizations data={data} />
            ) : conf.endpoint === 'people' ? (
              <RelatedPeople data={data} />
            ) : conf.endpoint === 'places' ? (
              <RelatedPlaces data={data} />
            ) : conf.endpoint === 'taxonomies' ? (
              <RelatedTaxonomies data={data} />
            ) : undefined}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )

}