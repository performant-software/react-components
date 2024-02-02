// @flow

import { AnnotationPage } from '@peripleo/peripleo';
import { ListTree } from 'lucide-react';
import React from 'react';
import RelatedList from './RelatedList';
import type { Taxonomy } from '../types/Taxonomy';

type Props = {
  data: AnnotationPage<Taxonomy>
};

const RelatedTaxonomies = (props: Props) => (
  <RelatedList
    data={props.data}
    emptyMessage={'No related taxonomies'}
    renderItem={(taxonomy) => (
      <>
        <ListTree
          className='h-4 w-4 mr-1.5'
        />
        { taxonomy.body.title }
      </>
    )}
  />
);

export default RelatedTaxonomies;
