// @flow

import React, { type Element, type Node } from 'react';
import ItemCollection from './ItemCollection';
import { type HitsProps } from '../types/InstantSearch';

type Props = HitsProps & {
  /**
   * Renders the component as the passed `as` prop.
   */
  as?: Element<any>,

  /**
   * Additional props to pass to the container component.
   */
  asProps?: any,

  /**
   * If `true` each item will be rendered as a Link.
   */
  link?: boolean,

  /**
   * Renders the description for the passed item.
   */
  renderDescription?: (item: any) => Node,

  /**
   * Component to render if the list contains no records.
   */
  renderEmptyList?: () => Node,

  /**
   * Renders the extra content for the passed item.
   */
  renderExtra?: (item: any) => Node,

  /**
   * Renders the header for the passed item.
   */
  renderHeader?: (item: any) => Node,

  /**
   * Renders the image for the passed item.
   */
  renderImage?: (item: any) => Node,

  /**
   * Renders the meta for the passed item.
   */
  renderMeta?: (item: any) => Node
};

/**
 * This component is used with the `useHits` hook from Instant Search Hooks and renders a pass-through to the
 * `ItemCollection` component.
 */
const SearchResults = ({ useHits, ...props }: Props) => {
  const { hits } = useHits(props);

  const {
    as,
    asProps,
    link,
    renderDescription,
    renderEmptyList,
    renderExtra,
    renderHeader,
    renderImage,
    renderMeta
  } = props;

  return (
    <ItemCollection
      as={as}
      asProps={asProps}
      hideToggle
      items={hits}
      link={link}
      renderDescription={renderDescription}
      renderEmptyList={renderEmptyList}
      renderExtra={renderExtra}
      renderHeader={renderHeader}
      renderImage={renderImage}
      renderMeta={renderMeta}
    />
  );
};

SearchResults.defaultProps = {
  as: undefined,
  asProps: undefined,
  link: undefined,
  renderDescription: undefined,
  renderEmptyList: undefined,
  renderExtra: undefined,
  renderHeader: undefined,
  renderImage: undefined,
  renderMeta: undefined
};

export default SearchResults;
