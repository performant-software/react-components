// @flow

import type { UserDefinedField } from './UserDefinedField';

export type Annotation = {
  id: string,
  record_id: string,
  uuid: string,
  title: string,
  user_defined: {
    [key: string]: UserDefinedField
  }
};
