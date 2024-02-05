// @flow

import type { FeatureGeometry } from './FeatureGeometry';

export type Feature = {
  id: number,
  type: 'Feature',
  properties: any,
  geometry: FeatureGeometry
};
