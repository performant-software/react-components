// @flow

import type { SourceTitle } from './SourceTitle';

export type Item = {
  uuid: string,
  primary_name: SourceTitle,
  source_titles: Array<SourceTitle>
};
