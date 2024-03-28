// @flow

import { Building2 } from 'lucide-react';
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
 * This component renders the related Core Data organizations records.
 */
const RelatedOrganizations = (props: Props) => (
  <RelatedList
    emptyMessage={i18n.t('RelatedOrganizations.labels.empty')}
    onLoad={props.onLoad}
    renderItem={(organization) => (
      <>
        <Building2
          className='h-4 w-4 mr-1.5'
        />
        { organization.body.title }
      </>
    )}
  />
);

export default RelatedOrganizations;
