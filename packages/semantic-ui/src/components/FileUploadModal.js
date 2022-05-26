// @flow

import React, { Component, type ComponentType } from 'react';
import {
  Button,
  Dimmer,
  Form,
  Item,
  Loader,
  Message,
  Modal
} from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import FileUpload from './FileUpload';
import ModalContext from '../context/ModalContext';
import Toaster from './Toaster';

type Props = {
  button: string,
  includeButton?: boolean,
  itemComponent: ComponentType<any>,
  onAddFile: (file: File) => any,
  onClose?: () => void,
  onSave: (items: Array<any>) => Promise<any>,
  required: { [string]: string },
  title?: string
};

type State = {
  items: Array<any>,
  modal: boolean,
  saving: boolean
};

const LIST_DELIMITER = ', ';

class FileUploadModal extends Component<Props, State> {
  static defaultProps: any;

  /**
   * Constructs a new FileUploadModal component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = this.getInitialState();
  }

  /**
   * Returns the initial component state.
   *
   * @returns {{saving: boolean, items: [], modal: boolean}}
   */
  getInitialState() {
    return {
      items: [],
      modal: !this.props.includeButton,
      saving: false
    };
  }

  /**
   * Returns true if any of the items contain errors.
   *
   * @returns {boolean}
   */
  hasErrors() {
    return !!_.find(this.state.items, (item) => !_.isEmpty(item.errors));
  }

  /**
   * Adds the passed collection of files to the state. Typically files will be added as a property of another model.
   * This component calls the onAddFiles prop to transform the items stored in the state.
   *
   * @param files
   */
  onAddFiles(files: Array<File>) {
    this.setState((state) => ({
      items: [
        ...state.items,
        ..._.map(files, this.props.onAddFile.bind(this))
      ]
    }));
  }

  /**
   * Updates the passed association for the passed item.
   *
   * @param item
   * @param idAttribute
   * @param attribute
   * @param value
   */
  onAssociationInputChange(item: any, idAttribute: string, attribute: string, value: any) {
    this.setState((state) => ({
      items: _.map(state.items, (i) => (i !== item ? i : ({
        ...i,
        [idAttribute]: value.id,
        [attribute]: value,
        errors: _.without(item.errors, idAttribute)
      })))
    }));
  }

  /**
   * Resets the state or calls the onClose prop.
   */
  onClose() {
    if (this.props.onClose) {
      this.props.onClose();
    } else {
      this.setState(this.getInitialState());
    }
  }

  /**
   * Deletes the passed item from the state.
   *
   * @param item
   */
  onDelete(item: any) {
    this.setState((state) => ({
      items: _.filter(state.items, (i) => i !== item)
    }));
  }

  /**
   * Clears the errors for all items in the state.
   */
  onDismissErrors() {
    this.setState((state) => ({
      items: _.map(state.items, (item) => _.omit(item, 'errors'))
    }));
  }

  /**
   * Validates the items and saves.
   */
  onSave() {
    this.setState((state) => ({
      items: _.map(state.items, this.validateItem.bind(this))
    }), this.save.bind(this));
  }

  /**
   * Updates the text value for the passed item.
   *
   * @param item
   * @param attribute
   * @param e
   * @param value
   */
  onTextInputChange(item: any, attribute: string, e: Event, { value }: { value: any }) {
    this.setState((state) => ({
      items: _.map(state.items, (i) => (i !== item ? i : ({
        ...i,
        [attribute]: value,
        errors: _.without(item.errors, attribute)
      })))
    }));
  }

  /**
   * Updates the passed item with the passed props.
   *
   * @param item
   * @param props
   */
  onUpdate(item: any, props: any) {
    this.setState((state) => ({
      items: _.map(state.items, (i) => (i !== item ? i : ({
        ...i,
        ...props,
        errors: _.without(item.errors, _.keys(props))
      })))
    }));
  }

  /**
   * Renders the FileUploadModal component.
   *
   * @returns {*}
   */
  render() {
    return (
      <>
        { this.props.includeButton && (
          <Button
            content={this.props.button}
            icon='cloud upload'
            onClick={() => this.setState({ modal: true })}
            primary
          />
        )}
        { this.state.modal && (
          <ModalContext.Consumer>
            { (mountNode) => (
              <Modal
                centered={false}
                className='file-upload-modal'
                mountNode={mountNode}
                open
              >
                <Dimmer
                  active={this.state.saving}
                  inverted
                >
                  <Loader
                    content={i18n.t('FileUploadModal.loader')}
                  />
                </Dimmer>
                { this.renderErrors() }
                <Modal.Header
                  content={this.props.title || i18n.t('FileUploadModal.title')}
                />
                <Modal.Content>
                  <FileUpload
                    onFilesAdded={this.onAddFiles.bind(this)}
                  />
                  { this.renderItems() }
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    content={i18n.t('Common.buttons.save')}
                    disabled={!(this.state.items && this.state.items.length)}
                    primary
                    onClick={this.onSave.bind(this)}
                  />
                  <Button
                    basic
                    content={i18n.t('Common.buttons.cancel')}
                    onClick={this.onClose.bind(this)}
                  />
                </Modal.Actions>
              </Modal>
            )}
          </ModalContext.Consumer>
        )}
      </>
    );
  }

  /**
   * Renders the error modal.
   *
   * @returns {null|*}
   */
  renderErrors() {
    if (!this.hasErrors()) {
      return null;
    }

    return (
      <Toaster
        onDismiss={this.onDismissErrors.bind(this)}
        timeout={0}
        type={Toaster.MessageTypes.negative}
      >
        <Message.Header
          content={i18n.t('Common.messages.error.header')}
        />
        <Message.List>
          { _.map(this.state.items, this.renderMessageItem.bind(this)) }
        </Message.List>
      </Toaster>
    );
  }

  /**
   * Renders the passed item.
   *
   * @param item
   *
   * @returns {*}
   */
  renderItem(item: any) {
    const FileItem = this.props.itemComponent;

    return (
      <FileItem
        isError={(key) => _.contains(item.errors, key)}
        isRequired={(key) => !!this.props.required[key]}
        item={item}
        onAssociationInputChange={this.onAssociationInputChange.bind(this, item)}
        onDelete={this.onDelete.bind(this, item)}
        onTextInputChange={this.onTextInputChange.bind(this, item)}
        onUpdate={this.onUpdate.bind(this, item)}
      />
    );
  }

  /**
   * Renders the list of items.
   *
   * @returns {null|*}
   */
  renderItems() {
    if (!(this.state.items && this.state.items.length)) {
      return null;
    }

    return (
      <Item.Group
        as={Form}
        divided
        noValidate
        relaxed='very'
      >
        { _.map(this.state.items, this.renderItem.bind(this)) }
      </Item.Group>
    );
  }

  /**
   * Renders the errors message for the passed item.
   *
   * @param item
   * @param index
   *
   * @returns {null|*}
   */
  renderMessageItem(item: any, index: number) {
    if (_.isEmpty(item.errors)) {
      return null;
    }

    const filename = !_.isEmpty(item.name) ? item.name : `File ${index}`;
    const fields = _.map(item.errors, (e) => this.props.required[e]).join(LIST_DELIMITER);

    return (
      <Message.Item
        content={i18n.t('FileUploadModal.errors.required', { filename, fields })}
        key={index}
      />
    );
  }

  /**
   * Saves the uploaded items.
   */
  save() {
    if (this.hasErrors()) {
      return;
    }

    this.setState({ saving: true }, () => {
      this.props
        .onSave(this.state.items)
        .then(this.onClose.bind(this));
    });
  }

  /**
   * Validates the list of items.
   */
  validate() {
    this.setState((state) => {
      const items = _.map(state.items, this.validateItem.bind(this));

      return {
        items,
        saving: !_.find(items, (item) => !_.isEmpty(item.errors))
      };
    }, this.save.bind(this));
  }

  /**
   * Validates the passed item.
   *
   * @param item
   *
   * @returns {{errors: []}}
   */
  validateItem(item: any) {
    const errors = [];

    _.each(_.keys(this.props.required), (key) => {
      const value = item[key];
      let invalid;

      if (_.isNumber(value)) {
        invalid = _.isEmpty(value.toString());
      } else {
        invalid = _.isEmpty(value);
      }

      if (invalid) {
        errors.push(key);
      }
    });

    return { ...item, errors };
  }
}

FileUploadModal.defaultProps = {
  includeButton: true
};

export type FileUploadProps = {
  isError: (key: string) => boolean,
  isRequired: (key: string) => boolean,
  item: any,
  onAssociationInputChange: (idKey: string, valueKey: string, item: any) => void,
  onDelete: (item: any) => void,
  onTextInputChange: (item: any, value: any) => void,
  onUpdate: (item: any, props: any) => void
};

export default FileUploadModal;
