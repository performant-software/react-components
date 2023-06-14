// @flow

import React, { useEffect } from 'react';
import {
  Checkbox,
  Icon,
  Label,
  List
} from 'semantic-ui-react';
import _ from 'underscore';
import Facet, { type Props as FacetProps } from './Facet';
import i18n from '../i18n/i18n';
import LinkButton from './LinkButton';
import { type RefinementListProps } from '../types/InstantSearch';

type Props = FacetProps & RefinementListProps & {
  defaultValue?: string
};

const FacetList = ({ useRefinementList, ...props }: Props) => {
  const {
    items,
    refine,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList(props);

  /**
   * Sets the default value if provided.
   */
  useEffect(() => {
    if (props.defaultValue) {
      refine(props.defaultValue);
    }
  }, [props.defaultValue]);

  /**
   * Do not render the component if no items are present.
   */
  if (_.isEmpty(items)) {
    return null;
  }

  return (
    <Facet
      defaultActive={props.defaultActive}
      divided={props.divided}
      title={props.title}
    >
      <List
        className='facet-list'
      >
        { _.map(items, (item, index) => (
          <List.Item
            key={index}
          >
            <Checkbox
              checked={item.isRefined}
              label={{
                children: (
                  <>
                    <span>{ item.label }</span>
                    <Label
                      circular
                      content={item.count}
                      size='small'
                    />
                  </>
                )
              }}
              onClick={() => refine(item.value)}
            />
          </List.Item>
        ))}
      </List>
      { canToggleShowMore && (
        <>
          <Icon
            name={isShowingMore ? 'angle up' : 'angle down'}
          />
          <LinkButton
            content={isShowingMore
              ? i18n.t('FacetList.buttons.showLess')
              : i18n.t('FacetList.buttons.showMore')}
            onClick={() => toggleShowMore()}
          />
        </>
      )}
    </Facet>
  );
};

export default FacetList;
