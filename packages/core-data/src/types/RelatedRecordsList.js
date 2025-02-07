// @flow

import type { RelatedRecord } from './RelatedRecord';

export type RelatedRecordsList = {  
  /**
   * If true, will render the item count in parentheses after the title. Note this is overridden if a renderTitle prop is provided
   */
  count?: boolean,
  
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