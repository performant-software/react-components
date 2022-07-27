// @flow

import React, { type ComponentType } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Button,
  Header,
  Icon,
  Popup
} from 'semantic-ui-react';
import i18n from '../i18n/i18n';

type Props = {
  label: string,
  onClick: () => void,
  referenceTable: string
};

const ReferenceCodeFormLabel: ComponentType<any> = withTranslation()((props: Props) => (
  <div>
    <label
      htmlFor={props.referenceTable}
    >
      { props.label }
    </label>
    <Popup
      hoverable
      trigger={(
        <Icon
          name='info circle'
          style={{
            marginLeft: '0.3em'
          }}
        />
      )}
    >
      <Header
        content={props.label}
      />
      <p>{ i18n.t('ReferenceCodeFormLabel.content', { name: props.label })}</p>
      <Button
        content={i18n.t('Common.buttons.edit')}
        icon='edit'
        primary
        onClick={props.onClick}
      />
    </Popup>
  </div>
));

export default ReferenceCodeFormLabel;
