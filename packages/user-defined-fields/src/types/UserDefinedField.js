// @flow

export type UserDefinedField = {
  id: number,
  defineable_id: number,
  defineable_type: string,
  column_name: string,
  table_name: string,
  data_type: string,
  required: boolean,
  searchable: boolean,
  allow_multiple: boolean,
  options: Array<string>,
  order: number
};
