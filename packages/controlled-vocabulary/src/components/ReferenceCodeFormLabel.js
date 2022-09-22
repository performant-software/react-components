// @flow

import React, { type ComponentType } from 'react';
import {
  Button,
  Header,
  Icon,
  Popup
} from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import './ReferenceCodeFormLabel.css';

type Props = {
  label: string,
  onClick: () => void,
  referenceTable: string
};

const ReferenceCodeFormLabel: ComponentType<any> = (props: Props) => (
  <>
    <label
      className='reference-code-form-label'
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
  </>
);

export default ReferenceCodeFormLabel;
