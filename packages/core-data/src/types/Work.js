// @flow

import type { SourceTitle } from './SourceTitle';

export type Work = {
  uuid: string,
  primary_name: SourceTitle,
  source_titles: Array<SourceTitle>
};
