// @flow

export type SearchResult = {
  uuid: string,
  record_id: string,
  type: string,
  name: string,
  names: Array<string>,
  coordinates: Array<number>,
  geometry: {
    type: 'Point' | 'GeometryCollection',
    coordinates: [ number, number ]
  }
};
