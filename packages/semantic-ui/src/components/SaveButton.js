// @flow

import React from 'react';
import { Button, Loader } from 'semantic-ui-react';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * Callback fired when the save button is clicked
   * @param item
   */
  onClick: (item: any) => Promise<any>,
    /**
   * When `true`, displays a small loading icon within the button
   */
  saving?: boolean
};

/**
 * A simple Save button component that accepts an onClick method and handles Saving state
 */

const SaveButton = (props: Props) => (
  <Button
    onClick={props.onClick.bind(this)}
    primary
    size='medium'
    type='submit'
  >
    { i18n.t('Common.buttons.save') }
    { props.saving && (
      <Loader
        active
        className='saving'
        inline
        size='tiny'
      />
    )}
  </Button>
);

export default SaveButton;
