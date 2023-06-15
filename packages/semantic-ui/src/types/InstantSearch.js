// @flow

export type ClearRefinementsProps = {
  useClearRefinements: (props: any) => ({ canRefine: boolean, refine: () => void })
};

export type CurrentRefinementsProps = {
  useCurrentRefinements: (props: any) => ({ items: Array<any> })
};

export type HitsPerPageProps = {
  useHitsPerPage: (props: any) => ({
    items: Array<{ value: number, label: string, default: boolean}>,
    refine: (value: number) => void
  })
};

export type HitsProps = {
  useHits: (props: any) => ({
    hits: Array<any>
  })
};

export type PaginationProps = {
  usePagination: (props: any) => ({
    currentRefinement: number,
    nbPages: number,
    refine: (value: number) => void
  })
};

export type RangeSliderProps = {
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
  useRefinementList: (props: any) => ({
    items: Array<any>,
    refine: (value: any) => void,
    canToggleShowMore: boolean,
    isShowingMore: boolean,
    toggleShowMore: () => void
  })
};

export type SearchBoxProps = {
  useSearchBox: (props: any) => ({
    query: string,
    refine: (value: string) => void,
    clear: () => void,
    isSearchStalled: boolean
  })
};

export type StatsProps = {
  useStats: (props: any) => ({
    nbHits: number,
    processingTimeMS: number
  })
};

export type ToggleRefinementProps = {
  useToggleRefinement: (props: any) => ({
    value: {
      isRefined: boolean,
      count: number
    },
    refine: (value: boolean) => void
  })
};
