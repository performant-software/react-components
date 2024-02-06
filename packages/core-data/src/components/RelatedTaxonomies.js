// @flow

import { ListTree } from 'lucide-react';
import React from 'react';
import i18n from '../i18n/i18n';
import type { AnnotationPage } from '../types/AnnotationPage';
import RelatedList from './RelatedList';
import type { Taxonomy } from '../types/Taxonomy';

type Props = {
  /**
   * The annotation page containing the Core Data taxonomies to render.
   */
  data: AnnotationPage<Taxonomy>
};

/**
 * This component renders the related Core Data taxonomies.
 */
const RelatedTaxonomies = (props: Props) => (
  <RelatedList
    data={props.data}
    emptyMessage={i18n.t('RelatedTaxonomies.labels.empty')}
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
