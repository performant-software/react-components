// @flow

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Button, Dropdown } from 'semantic-ui-react';
import './ModalDropdown.css';

type Props = {
  onClear: () => void,
  renderModal: ({ onClose: () => void, open: boolean }) => void,
  searchQuery: ?string,
  t: (key: string) => string
};

type State = {
  modalVisible: boolean
};

class ModalDropdown extends Component<Props, State> {
  /**
   * Constructs a new ModalDropdown component.
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };
  }

  /**
   * Closes the modal.
   */
  onClose() {
    this.setState({ modalVisible: false });
  }

  /**
   * Renders the ModalDropdown component.
   *
   * @returns {*}
   */
  render() {
    return (
      <>
        <Dropdown
          className='modal-dropdown'
          onClick={() => this.setState({ modalVisible: true })}
          onSearchChange={() => {}}
          open={false}
          search
          selection
          searchQuery={this.props.searchQuery || ''}
        />
        <Button.Group>
          <Button
            basic
            content={this.props.t('Common.buttons.clear')}
            icon='times'
            onClick={this.props.onClear.bind(this)}
            type='button'
          />
        </Button.Group>
        { this.renderModal() }
      </>
    );
  }

  /**
   * Renders the modal.
   *
   * @returns {*}
   */
  renderModal() {
    return this.props.renderModal({
      onClose: this.onClose.bind(this),
      open: this.state.modalVisible
    });
  }
}

export default withTranslation()(ModalDropdown);
