// @flow

import React, { useState, type Node } from 'react';
import { Button } from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import IIIFModal from './IIIFModal';
import LazyMedia from './LazyMedia';

type Props = {
  children?: Node,
  color?: string,
  content?: string,
  manifest?: string,
  options?: any
};

const LazyIIIF = ({ manifest, options = {}, ...props }: Props) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LazyMedia
        {...props}
      >
        { manifest && (
          <Button
            color={props.color}
            content={props.content || i18n.t('Common.buttons.iiif')}
            icon='images outline'
            onClick={() => setModal(true)}
          />
        )}
        { props.children }
      </LazyMedia>
      { modal && (
        <IIIFModal
          manifestId={manifest}
          onClose={() => setModal(false)}
          options={_.defaults(options, { showIIIFBadge: false })}
        />
      )}
    </>
  );
};

export default LazyIIIF;
