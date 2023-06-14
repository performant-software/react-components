// @flow

import React, { type Element, type Node } from 'react';
import ItemCollection from './ItemCollection';
import { type HitsProps } from '../types/InstantSearch';

type Props = HitsProps & {
  as?: Element<any>,
  asProps?: any,
  link?: boolean,
  renderDescription?: (item: any) => Node,
  renderEmptyList?: () => Node,
  renderExtra?: (item: any) => Node,
  renderHeader?: (item: any) => Node,
  renderImage?: (item: any) => Node,
  renderMeta?: (item: any) => Node
};

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
