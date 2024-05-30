// @flow

import type { SourceTitle } from './SourceTitle';

export type Instance = {
  uuid: string,
  primary_name: SourceTitle,
  source_titles: Array<SourceTitle>
};
