// @flow

import React, { useCallback, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import { type PaginationProps } from '../types/InstantSearch';

type Props = PaginationProps & {
  /**
   * If `true`, we'll scroll to the top of the page after applying the new page value.
   */
  scrollToTop?: boolean
};

/**
 * This component is used with the `usePagination` hook from Instant Search Hooks and renders a list of page numbers
 * that can be selected by the user. If the `scrollToTop` prop is set to `true`, the window will scroll to the top
 * after applying a new value.
 */
const SearchPagination = ({ usePagination, ...props }: Props) => {
  const { currentRefinement, nbPages: pages, refine } = usePagination(props);
  const onPageChange = useCallback((e, { activePage }) => refine(activePage - 1), [refine]);

  /**
   * Scroll to the top of the page when the current page changes.
   */
  useEffect(() => {
    if (props.scrollToTop) {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }, [currentRefinement, props.scrollToTop]);

  /**
   * Return null if there are no pages.
   */
  if (pages === 0) {
    return null;
  }

  return (
    <Pagination
      activePage={currentRefinement + 1}
      onPageChange={onPageChange}
      totalPages={pages}
    />
  );
};

SearchPagination.defaultProps = {
  scrollToTop: false
};

export default SearchPagination;
