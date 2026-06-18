// @flow

import React, { type Component } from 'react';
import { Popup } from 'semantic-ui-react';

type Props = {
  className?: string,
  content: string,
  delayInterval?: number,
  renderPopup?: () => Component<any>,
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
const DescriptorField = ({delayInterval = 1000, renderPopup = undefined, popupContent = undefined, ...props}: Props) => (
  <Popup
    className={props.className}
    content={popupContent}
    hoverable
    mouseEnterDelay={delayInterval}
    trigger={renderPopup
      ? renderPopup()
      : (<span className='text'>{ props.content }</span>)}
    wide
  />
);

export default DescriptorField;
