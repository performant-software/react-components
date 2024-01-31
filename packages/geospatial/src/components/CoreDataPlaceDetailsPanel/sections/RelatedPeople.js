// @flow

import React from 'react';
import { AnnotationPage } from '@peripleo/peripleo';
import { UserCircle } from 'lucide-react';
import { CoreDataRelatedPerson } from '../../CoreDataTypes';

interface RelatedPeopleProps {

  data: AnnotationPage<CoreDataRelatedPerson>;

}

export const RelatedPeople = (props: RelatedPeopleProps) => {

  const people = props.data.items;

  return people.length === 0 ? (
    <div className="pt-6 pl-3 pr-6 pb-8 flex items-center justify-center text-muted/50 italic">
      No related people
    </div>
  ) : (
    <ul className="p-3 pt-1 pb-4">
      {people.map(a => (
        <li key={a.id} className="flex items-center">
          <UserCircle className="h-4 w-4 mr-1.5" /> {a.body.title}
        </li>
      ))}
    </ul>
  )

}