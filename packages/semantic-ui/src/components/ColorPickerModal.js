// @flow

import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { Button, Modal } from 'semantic-ui-react';
import i18n from '../i18n/i18n';
import ModalContext from '../context/ModalContext';
import './ColorPickerModal.css';

type Props = {
  color: string,
  onClose: () => void,
  onSave: (selectedColor: string) => void,
  open: boolean
};

type State = {
  selectedColor: string
};

class ColorPickerModal extends Component<Props, State> {
  /**
   * Constructs a new ColorPickerModal component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedColor: props.color
    };
  }

  /**
   * Renders the ColorPickerModal component.
   *
   * @returns {*}
   */
  render() {
    return (
      <ModalContext.Consumer>
        { (mountNode) => (
          <Modal
            className='color-picker-modal'
            mountNode={mountNode}
            onClose={this.props.onClose.bind(this)}
            open={this.props.open}
          >
            <Modal.Content>
              <SketchPicker
                color={this.state.selectedColor}
                disableAlpha={false}
                onChangeComplete={(selectedColor) => this.setState({ selectedColor })}
              />
            </Modal.Content>
            <Modal.Actions>
              <Button
                onClick={this.props.onSave.bind(this, this.state.selectedColor)}
                primary
                size='medium'
                type='submit'
              >
                { i18n.t('Common.buttons.save') }
              </Button>
              <Button
                basic
                onClick={this.props.onClose.bind(this)}
                size='medium'
                type='button'
              >
                { i18n.t('Common.buttons.cancel') }
              </Button>
            </Modal.Actions>
          </Modal>
        )}
      </ModalContext.Consumer>
    );
  }
}

export default ColorPickerModal;
