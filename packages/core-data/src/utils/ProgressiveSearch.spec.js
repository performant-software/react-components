import { getCacheAction, isCurrentPage } from './ProgressiveSearch';

const results = (page, extra = {}) => ({ page, hits: [], ...extra });

describe('getCacheAction', () => {
  it('skips when there are no results yet', () => {
    expect(getCacheAction(undefined, undefined)).toEqual('skip');
    expect(getCacheAction(null, undefined)).toEqual('skip');
  });

  it('skips a re-render of the results object already processed', () => {
    const first = results(0);
    expect(getCacheAction(first, first)).toEqual('skip');
  });

  it('skips the artificial results InstantSearch renders before a search completes', () => {
    expect(getCacheAction(results(0, { __isArtificial: true }), undefined)).toEqual('skip');
  });

  it('resets the cache when a first page arrives', () => {
    expect(getCacheAction(results(0), undefined)).toEqual('reset');
    expect(getCacheAction(results(undefined), undefined)).toEqual('reset');
  });

  it('merges when a later page arrives', () => {
    expect(getCacheAction(results(1), results(0))).toEqual('merge');
    expect(getCacheAction(results(2), results(1))).toEqual('merge');
  });

  it('resets again when a new search starts, even if the state was patched to look unchanged', () => {
    // InstantSearch patches `_state` on the previous results to the current state
    // (optimistic UI), so two different results objects can carry an identical `_state`.
    // Only the page number of the received results says whether a new search began.
    const state = { disjunctiveFacetsRefinements: { facet: ['value'] }, page: 0 };
    const stale = results(0, { _state: state, hits: [{ uuid: 'a' }, { uuid: 'b' }] });
    const fresh = results(0, { _state: state, hits: [{ uuid: 'a' }] });

    expect(getCacheAction(stale, undefined)).toEqual('reset');
    expect(getCacheAction(fresh, stale)).toEqual('reset');
  });
});

describe('isCurrentPage', () => {
  it('is true when the search state points at the page of the results', () => {
    expect(isCurrentPage(results(0, { _state: { page: 0 } }))).toEqual(true);
    expect(isCurrentPage(results(2, { _state: { page: 2 } }))).toEqual(true);
  });

  it('is true for a first page when the search state carries no page number', () => {
    expect(isCurrentPage(results(0, { _state: {} }))).toEqual(true);
    expect(isCurrentPage(results(undefined, { _state: {} }))).toEqual(true);
  });

  it('is false once a later page has been requested', () => {
    // InstantSearch points `_state` on the latest results at the current search state
    // (optimistic UI), so the state's page runs ahead of the results' page while a
    // request for a later page is in flight.
    const first = results(0, { _state: { page: 0 } });
    expect(isCurrentPage(first)).toEqual(true);

    first._state = { page: 1 };
    expect(isCurrentPage(first)).toEqual(false);
  });

  it('is false when a new search has started since the results arrived', () => {
    expect(isCurrentPage(results(3, { _state: { page: 0 } }))).toEqual(false);
  });
});
