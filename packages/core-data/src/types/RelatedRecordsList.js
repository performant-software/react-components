// @flow

import type { RelatedRecord } from './RelatedRecord';

export type RelatedRecordsList = {
  /**
   * When set to true, items will be displayed in a row rather than a column
   */
  horizontal?: boolean,

  /**
   * Icon to use in front of each list item. Defaults to none. Note this is overridden if a renderItem prop is provided
   */
  icon?: JSX.Element,

  /**
   * List of related items
   */
  items: Array<RelatedRecord>,

  /**
   * Optional render prop to render the title and count; defaults to `${title} (${count})`
   */
  renderTitle?: (title: String, count?: number | string) => JSX.Element,

  /**
   * Optional render prop to render each item in the list
  */
  renderItem?: (item: RelatedRecord) => JSX.Element,

  /**
   * The title of the related model
   */
  title: string,
}
