// @flow

import type { Annotation } from './Annotation';

export type MediaContent = Annotation & {
  content_download_url: string,
  content_iiif_url: string,
  content_preview_url: string,
  content_thumbnail_url: string,
  content_url: string,
  manifest_url: string,
  type: 'MediaContent'
};
