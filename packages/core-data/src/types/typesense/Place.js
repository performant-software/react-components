// @flow

export type Place = {
  uuid: string;
  record_id: string;
  type: string;
  name: string;
  names: string[];
  coordinates: number[];
  geometry: {
    type: 'Point' | 'GeometryCollection',
    coordinates: [ number, number ];
  }
};
