// @flow

import type { EditContainerProps } from '@performant-software/shared-components/types';
import React from 'react';
import { Form, Modal } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import BibliographyForm from './BibliographyForm';

type Props = EditContainerProps & {
  item: any
};

const BibliographyModal = (props: Props) => (
  <Modal
    as={Form}
    centered={false}
    open
  >
    <Modal.Header
      content={i18n.t('BibliographyModal.title')}
    />
    <Modal.Content>
      <BibliographyForm
        {...props}
      />
    </Modal.Content>
    { props.children }
  </Modal>
);

export default BibliographyModal;
