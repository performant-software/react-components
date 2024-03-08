// @flow

export type FeatureGeometry = {
  type: 'Point' | 'Polygon' | 'Polyline' | 'GeometryCollection';
  coordinates: number[] | number[][] | number[][][];
};
