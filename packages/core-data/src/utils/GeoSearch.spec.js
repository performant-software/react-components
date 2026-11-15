import { canFilterByBounds } from './GeoSearch';

const corners = (west, east) => [{ lat: 60, lng: east }, { lat: 0, lng: west }];

describe('canFilterByBounds', () => {
  it('is true for bounds narrower than half of the globe', () => {
    expect(canFilterByBounds(...corners(-150, -60))).toBe(true);
    expect(canFilterByBounds(...corners(-198, -20))).toBe(true);
  });

  it('is true for narrow bounds that cross the antimeridian', () => {
    expect(canFilterByBounds(...corners(-194, -24))).toBe(true);
    expect(canFilterByBounds(...corners(170, 200))).toBe(true);
  });

  it('is false for bounds that span half of the globe', () => {
    expect(canFilterByBounds(...corners(-180, 0))).toBe(false);
  });

  it('is false for bounds wider than half of the globe', () => {
    expect(canFilterByBounds(...corners(-200, -18))).toBe(false);
    expect(canFilterByBounds(...corners(-204, -14))).toBe(false);
  });

  it('is false when the map shows the whole globe more than once', () => {
    expect(canFilterByBounds(...corners(-400, 400))).toBe(false);
  });
});
