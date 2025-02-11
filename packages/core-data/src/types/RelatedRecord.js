// @flow

export type RelatedRecord = {
  /**
   * Optional data prop to pass other fields, e.g. if needed for rendering
  */
  data?: any,
  
  /**
    * Optional event fired when the item is clicked. Note this will be overridden if a renderItem prop is provided in the parent list
  */
  onClick?: () => void,

  /**
   * The primary name of the record (will display as text of the list item by default)
   */
  name: string,
}