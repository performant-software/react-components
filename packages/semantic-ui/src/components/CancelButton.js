// @flow

import React from 'react';
import { Button } from 'semantic-ui-react';
import i18n from '../i18n/i18n';

type Props = {
  disabled: boolean,
  onClick: () => void
};

const CancelButton = (props: Props) => (
  <Button
    disabled={props.disabled}
    inverted
    onClick={props.onClick.bind(this)}
    primary
    size='medium'
    type='button'
  >
    { i18n.t('Common.buttons.cancel') }
  </Button>
);

export default CancelButton;
