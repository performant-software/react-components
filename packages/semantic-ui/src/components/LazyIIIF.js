// @flow

import React, { useState, type Node } from 'react';
import { Button } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import IIIFModal from './IIIFModal';
import LazyMedia from './LazyMedia';

type Props = {
  children?: Node,
  manifest?: string
};

const LazyIIIF = (props: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LazyMedia
        {...props}
      >
        { props.manifest && (
          <Button
            content={i18n.t('Common.buttons.open')}
            icon='images outline'
            onClick={() => setModal(true)}
          />
        )}
        { props.children }
      </LazyMedia>
      { modal && (
        <IIIFModal
          manifestId={props.manifest}
          onClose={() => setModal(false)}
          options={{
            showIIIFBadge: false
          }}
        />
      )}
    </>
  );
};

export default LazyIIIF;
