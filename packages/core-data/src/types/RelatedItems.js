// @flow

import { AnnotationPage } from '@peripleo/peripleo';
import type { Annotation } from './Annotation';

export type RelatedItems = {
  endpoint: string,
  ui_label: string,
  default_open?: boolean,
  data?: AnnotationPage<Annotation>,
  error?: Error
};
