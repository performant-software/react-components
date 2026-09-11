import { getCacheAction } from './ProgressiveSearch';

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
