// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';
import i18n from '../i18n/i18n';

type Props = {
  disabled: boolean,
  onClick: () => void
};

/**
 * A simple Cancel button component that accepts an onClick method.
 */

const CancelButton = (props: Props) => (
  <Button
    basic
    disabled={props.disabled}
    onClick={props.onClick.bind(this)}
    size='medium'
    type='button'
  >
    { i18n.t('Common.buttons.cancel') }
  </Button>
);

export default CancelButton;
