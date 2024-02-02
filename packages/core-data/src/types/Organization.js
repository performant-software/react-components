// @flow

import type { Annotation } from './Annotation';

export type Organization = Annotation & {
  type: 'Organization',
  biography: string
};
