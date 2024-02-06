// @flow

import { UserCircle } from 'lucide-react';
import React from 'react';
import i18n from '../i18n/i18n';
import type { AnnotationPage } from '../types/AnnotationPage';
import type { Person } from '../types/Person';
import RelatedList from './RelatedList';

type Props = {
  /**
   * The annotation page containing the Core Data people to render.
   */
  data: AnnotationPage<Person>
};

/**
 * This component renders the related Core Data organizations.
 */
const RelatedPeople = (props: Props) => (
  <RelatedList
    data={props.data}
    emptyMessage={i18n.t('RelatedPeople.labels.empty')}
    renderItem={(person) => (
      <>
        <UserCircle
          className='h-4 w-4 mr-1.5'
        />
        { person.body.title }
      </>
    )}
  />
);

export default RelatedPeople;
