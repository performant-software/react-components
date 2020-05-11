// @flow

import React, { Component } from 'react';
import { Popup } from 'semantic-ui-react';

type Props = {
  content: string,
  delayInterval?: number,
  renderPopup?: () => Component,
  popupContent?: string
}

/**
 * Renders the DescriptorField component. This component can be used to static text as with a popup on hover.
 *
 * @param props
 *
 * @returns {*}
 *
 * @constructor
 */
const DescriptorField = (props : Props) => (
  <Popup
    content={props.popupContent}
    hoverable
    mouseEnterDelay={props.delayInterval}
    trigger={props.renderPopup
      ? props.renderPopup()
      : (<span className='text'>{ props.content }</span>)}
    wide
  />
);

DescriptorField.defaultProps = {
  delayInterval: 1000,
  renderPopup: undefined,
  popupContent: undefined
};

export default DescriptorField;
