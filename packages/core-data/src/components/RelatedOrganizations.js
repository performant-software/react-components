// @flow

import { Building2 } from 'lucide-react';
import React from 'react';
import type { AnnotationPage } from '../types/AnnotationPage';
import type { Organization } from '../types/Organization';
import RelatedList from './RelatedList';

type Props = {
  data: AnnotationPage<Organization>
};

const RelatedOrganizations = (props: Props) => (
  <RelatedList
    data={props.data}
    emptyMessage={'No related organization'}
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
