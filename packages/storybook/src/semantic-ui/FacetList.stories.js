// @flow

import { action } from '@storybook/addon-actions';
import React, { useCallback, useRef } from 'react';
import { Button } from 'semantic-ui-react';
import FacetList from '../../../semantic-ui/src/components/FacetList';

export default {
  title: 'Components/Semantic UI/FacetList',
  component: FacetList
};

export const Default = () => (
  <FacetList
    title='Make'
    useRefinementList={() => ({
      items: [{
        label: 'Chevrolet',
        count: 783,
        value: 'chevrolet'
      }, {
        label: 'Ford',
        count: 399,
        value: 'ford'
      }, {
        label: 'Toyota',
        count: 236,
        value: 'toyota'
      }, {
        label: 'Acura',
        count: 122,
        value: 'acura'
      }],
      refine: action('refine'),
      canToggleShowMore: false,
      isShowingMore: false,
      searchForItems: action('search'),
      toggleShowMore: action('show more')
    })}
  />
);

export const ShowMore = () => (
  <FacetList
    title='Brand'
    useRefinementList={() => ({
      items: [{
        label: 'Apple',
        count: 45,
        value: 'apple'
      }, {
        label: 'HP',
        count: 34,
        value: 'hp'
      }, {
        label: 'Dell',
        count: 30,
        value: 'dell'
      }, {
        label: 'Acer',
        count: 10,
        value: 'acer'
      }],
      refine: action('refine'),
      canToggleShowMore: true,
      isShowingMore: false,
      searchForItems: action('search'),
      toggleShowMore: action('show more')
    })}
  />
);

export const Searchable = () => (
  <FacetList
    searchable
    title='States'
    useRefinementList={() => ({
      items: [{
        label: 'Alabama',
        count: 55,
        value: 'alabama'
      }, {
        label: 'Alaska',
        count: 3,
        value: 'alaska'
      }, {
        label: 'Arizona',
        count: 70,
        value: 'arizona'
      }, {
        label: 'Arkansas',
        count: 12,
        value: 'arkansas'
      }, {
        label: 'California',
        count: 269,
        value: 'california'
      }, {
        label: 'Colorado',
        count: 100,
        value: 'colorado'
      }],
      refine: action('refine'),
      canToggleShowMore: false,
      isShowingMore: false,
      searchForItems: action('search'),
      toggleShowMore: action('show more')
    })}
  />
);

export const Toggleable = () => (
  <FacetList
    toggleable
    title='States'
    useRefinementList={() => ({
      items: [{
        label: 'Alabama',
        count: 55,
        value: 'alabama'
      }, {
        label: 'Alaska',
        count: 3,
        value: 'alaska'
      }, {
        label: 'Arizona',
        count: 70,
        value: 'arizona'
      }, {
        label: 'Arkansas',
        count: 12,
        value: 'arkansas'
      }, {
        label: 'California',
        count: 269,
        value: 'california'
      }, {
        label: 'Colorado',
        count: 100,
        value: 'colorado'
      }],
      refine: action('refine'),
      canToggleShowMore: true,
      isShowingMore: false,
      searchForItems: action('search'),
      toggleShowMore: action('show more')
    })}
  />
);

export const ExpandCollapse = () => {
  const ref = useRef();

  /**
   * Collapses the facet via the imperative function.
   *
   * @type {(function(): void)|*}
   */
  const onCollapse = useCallback(() => {
    const { current: instance } = ref;

    if (instance) {
      instance.collapse();
    }
  }, [ref.current]);

  /**
   * Expands the facet via the imperative function.
   *
   * @type {(function(): void)|*}
   */
  const onExpand = useCallback(() => {
    const { current: instance } = ref;

    if (instance) {
      instance.expand();
    }
  }, [ref.current]);

  return (
    <>
      <FacetList
        ref={ref}
        toggleable
        title='States'
        useRefinementList={() => ({
          items: [{
            label: 'Alabama',
            count: 55,
            value: 'alabama'
          }, {
            label: 'Alaska',
            count: 3,
            value: 'alaska'
          }, {
            label: 'Arizona',
            count: 70,
            value: 'arizona'
          }, {
            label: 'Arkansas',
            count: 12,
            value: 'arkansas'
          }, {
            label: 'California',
            count: 269,
            value: 'california'
          }, {
            label: 'Colorado',
            count: 100,
            value: 'colorado'
          }],
          refine: action('refine'),
          canToggleShowMore: true,
          isShowingMore: false,
          searchForItems: action('search'),
          toggleShowMore: action('show more')
        })}
      />
      <Button
        content='Expand'
        onClick={onExpand}
      />
      <Button
        content='Collapse'
        onClick={onCollapse}
      />
    </>
  );
};
