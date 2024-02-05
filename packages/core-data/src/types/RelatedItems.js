// @flow

import type { Annotation } from './Annotation';
import type { AnnotationPage } from './AnnotationPage';

export type RelatedItems = {
  endpoint: string,
  ui_label: string,
  default_open?: boolean,
  data?: AnnotationPage<Annotation>,
  error?: Error
};
