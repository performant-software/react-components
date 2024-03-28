// @flow

import { ListTree } from 'lucide-react';
import React from 'react';
import i18n from '../i18n/i18n';
import RelatedList from './RelatedList';

type Props = {
  /**
   * Callback fired when the component is mounted to fetch the data.
   */
  onLoad: () => any,
};

/**
 * This component renders the related Core Data taxonomies.
 */
const RelatedTaxonomies = (props: Props) => (
  <RelatedList
    emptyMessage={i18n.t('RelatedTaxonomies.labels.empty')}
    onLoad={props.onLoad}
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
