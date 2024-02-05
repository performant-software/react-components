// @flow

import type { Annotation } from './Annotation';
import type { FeatureGeometry } from './FeatureGeometry';

export type Place = Annotation & {
  type: 'Place',
  geometry: FeatureGeometry
};
