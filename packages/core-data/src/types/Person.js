// @flow

import type { Annotation } from './Annotation';

export type Person = Annotation & {
  id: string,
  type: 'Person',
  record_id: string,
  title: string,
  biography: string
};
