// @flow

import { Building2 } from 'lucide-react';
import React from 'react';
import i18n from '../i18n/i18n';
import type { AnnotationPage } from '../types/AnnotationPage';
import type { Organization } from '../types/Organization';
import RelatedList from './RelatedList';

type Props = {
  /**
   * The annotation page containing the Core Data organizations to render.
   */
  data: AnnotationPage<Organization>
};

/**
 * This component renders the related Core Data organizations records.
 */
const RelatedOrganizations = (props: Props) => (
  <RelatedList
    data={props.data}
    emptyMessage={i18n.t('RelatedOrganizations.labels.empty')}
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
