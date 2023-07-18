// @flow

import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import CurrentFacetLabels, { type Item } from './CurrentFacetLabels';
import i18n from '../i18n/i18n';

type Props = {
  /**
   * An array of facet values.
   */
  items: Array<Item>,

  /**
   * Callback fired when the "Done" button is clicked.
   */
  onClose: () => void,

  /**
   * If `true` the modal will be visible.
   */
  open?: boolean
};

/**
 * This component displays all of the facets currently applied, without any limit.
 */
const CurrentFacetsModal = (props: Props) => (
  <Modal
    centered={false}
    open={props.open}
  >
    <Modal.Header
      content={i18n.t('CurrentFacetsModal.title')}
    />
    <Modal.Content>
      <CurrentFacetLabels
        items={props.items}
      />
    </Modal.Content>
    <Modal.Actions>
      <Button
        content={i18n.t('Common.buttons.done')}
        onClick={props.onClose}
        primary
      />
    </Modal.Actions>
  </Modal>
);

CurrentFacetsModal.defaultProps = {
  open: undefined
};

export default CurrentFacetsModal;
