// @flow

export type ClearRefinementsProps = {
  /**
   * Instant-Search hook to clear current refinements values.
   */
  useClearRefinements: (props: any) => ({ canRefine: boolean, refine: () => void })
};

export type CurrentRefinementsProps = {
  /**
   * Instant-Search hook to provide current refinements values.
   */
  useCurrentRefinements: (props: any) => ({ items: Array<any> })
};

export type HitsPerPageProps = {
  /**
   * Instant-Search hook to provide number of hits per page values.
   */
  useHitsPerPage: (props: any) => ({
    items: Array<{ value: number, label: string, default: boolean}>,
    refine: (value: number) => void
  })
};

export type HitsProps = {
  /**
   * Instant-Search hook to provide search hits values.
   */
  useHits: (props: any) => ({
    hits: Array<any>
  })
};

export type PaginationProps = {
  /**
   * Instant-Search hook to provide pagination values.
   */
  usePagination: (props: any) => ({
    currentRefinement: number,
    nbPages: number,
    refine: (value: number) => void
  })
};

export type RangeSliderProps = {
  /**
   * Instant-Search hook to provide range values.
   */
  useRangeSlider: (props: any) => ({
    start: Array<number>,
    range: {
      min: number,
      max: number
    },
    refine: ({ min: number, max: number }) => void
  })
};

export type RefinementListProps = {
  /**
   * Instant-Search hook to provide refinement list values.
   */
  useRefinementList: (props: any) => ({
    items: Array<any>,
    refine: (value: any) => void,
    canToggleShowMore: boolean,
    isShowingMore: boolean,
    toggleShowMore: () => void
  })
};

export type SearchBoxProps = {
  /**
   * Instant-Search hook to provide search box values.
   */
  useSearchBox: (props: any) => ({
    query: string,
    refine: (value: string) => void,
    clear: () => void,
    isSearchStalled: boolean
  })
};

export type StatsProps = {
  /**
   * Instant-Search hook to provide search statistic values.
   */
  useStats: (props: any) => ({
    nbHits: number,
    processingTimeMS: number
  })
};

export type ToggleRefinementProps = {
  /**
   * Instant-Search hook to provide toggle refinement values.
   */
  useToggleRefinement: (props: any) => ({
    value: {
      isRefined: boolean,
      count: number
    },
    refine: (value: boolean) => void
  })
};
