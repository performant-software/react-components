// @flow

import { UserCircle } from 'lucide-react';
import React, { useCallback } from 'react';
import _ from 'underscore';
import RelatedList from './RelatedList';

const NAME_SEPARATOR = ' ';

type Props = {
  /**
   * Name of the class(es) to apply to the <ul> element.
   */
  className?: string,

  /**
   * A message to display when no records are returned from the API.
   */
  emptyMessage?: string,

  /**
   * Number of items to display in each row of the grid.
   */
  itemsPerRow?: number,

  /**
   * Callback fired when the component is mounted to fetch the data.
   */
  onLoad: () => any
};

/**
 * This component renders the related Core Data organizations.
 */
const RelatedPeople = (props: Props) => {
  /**
   * Returns a concatenation of the person's name attributes.
   *
   * @type {function(*): *}
   */
  const getName = useCallback((person) => _.compact([
    person.first_name,
    person.middle_name,
    person.last_name
  ]).join(NAME_SEPARATOR), []);

  return (
    <RelatedList
      className={props.className}
      collectionName='people'
      emptyMessage={props.emptyMessage}
      itemsPerRow={props.itemsPerRow}
      onLoad={props.onLoad}
      renderItem={(person) => (
        <>
          <UserCircle
            className='h-4 w-4 mr-1.5'
          />
          { getName(person) }
        </>
      )}
    />
  );
};

export default RelatedPeople;
