// @flow

import React, { useCallback, useEffect } from 'react';
import { usePagination } from 'react-instantsearch-hooks-web';
import { Pagination } from 'semantic-ui-react';

type Props = {
  scrollToTop?: boolean
};

const SearchPagination = (props: Props) => {
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
