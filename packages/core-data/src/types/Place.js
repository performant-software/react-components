// @flow

import type { FeatureGeometry } from '@peripleo/peripleo';
import type { Annotation } from './Annotation';

export type Place = Annotation & {
  type: 'Place',
  geometry: FeatureGeometry
};
