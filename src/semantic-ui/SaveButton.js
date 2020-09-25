// @flow

import React from 'react';
import { Button, Loader } from 'semantic-ui-react';
import i18n from '../i18n/i18n';

type Props = {
  onClick: (item: any) => Promise<any>,
  saving: boolean
};

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
