// @flow

import { UserCircle } from 'lucide-react';
import React from 'react';
import type { AnnotationPage } from '../types/AnnotationPage';
import type { Person } from '../types/Person';
import RelatedList from './RelatedList';

type Props = {
  data: AnnotationPage<Person>
};

const RelatedPeople = (props: Props) => (
  <RelatedList
    data={props.data}
    emptyMessage={'No related people'}
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
