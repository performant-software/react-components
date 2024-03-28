// @flow

import { UserCircle } from 'lucide-react';
import React from 'react';
import i18n from '../i18n/i18n';
import RelatedList from './RelatedList';

type Props = {
  /**
   * Callback fired when the component is mounted to fetch the data.
   */
  onLoad: () => any
};

/**
 * This component renders the related Core Data organizations.
 */
const RelatedPeople = (props: Props) => (
  <RelatedList
    emptyMessage={i18n.t('RelatedPeople.labels.empty')}
    onLoad={props.onLoad}
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
