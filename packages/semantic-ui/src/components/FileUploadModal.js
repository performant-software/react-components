// @flow

import React, {
  useCallback,
  useMemo,
  useState,
  type ComponentType
} from 'react';
import {
  Button,
  Dimmer,
  Form,
  Item,
  Loader, Message,
  Modal
} from 'semantic-ui-react';
import _ from 'underscore';
import FileUpload from './FileUpload';
import FileUploadStatus from './FileUploadStatus';
import FileUploadProgress from './FileUploadProgress';
import i18n from '../i18n/i18n';
import ModalContext from '../context/ModalContext';

type Props = {
  /**
   * If <code>true</code>, the modal will close once the upload has completed.
   */
  closeOnComplete?: boolean,

  /**
   * Component to render within the modal.
   */
  itemComponent: ComponentType<any>,

  /**
   * Callback fired when a file is added.
   */
  onAddFile: (file: File) => any,

  /**
   * Callback fired when the close button is clicked.
   */
  onClose: () => void,

  /**
   * Callback fired when the save button is clicked. See <code>strategy</code> prop.
   */
  onSave: (items: Array<any>) => Promise<any>,

  /**
   * An object with keys containing the names of properties that are required.
   */
  required?: { [key: string]: string },

  /**
   * If <code>true</code>, a full page loader will display while uploading is in progress.
   */
  showPageLoader?: boolean,

  /**
   * The upload strategy to use. If <code>batch</code>, we'll execute one <code>onSave</code> request with each item
   * as an array in the body. If <code>single</code>, we'll execute an <code>onSave</code> request for each item.
   */
  strategy?: string
};

const Strategy = {
  batch: 'batch',
  single: 'single'
};

const Status = {
  pending: 'pending',
  processing: 'processing',
  complete: 'complete',
  error: 'error'
};

/**
 * The <code>FileUploadModal</code> is a convenience wrapper for the <code>FileUpload</code> component, allowing
 * it to render in a modal.
 */
const FileUploadModal: ComponentType<any> = (props: Props) => {
  const [items, setItems] = useState([]);
  const [uploadCount, setUploadCount] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [statuses, setStatuses] = useState({});

  /**
   * Sets the <code>hasErrors</code> value to <code>true</code> if at least one item on the state contains errors.
   */
  const hasErrors = useMemo(() => !!_.find(items, (item) => !_.isEmpty(item.errors)), [items]);

  /**
   * Calls the <code>onAddFile</code> prop for each item in the passed collection of files and adds them
   * to the items on the state.
   *
   * @type {function(*): void}
   */
  const onAddFiles = useCallback((files) => (
    setItems((prevItems) => [
      ...prevItems,
      ..._.map(files, props.onAddFile)
    ])
  ), []);

  /**
   * Updates the passed association for the passed item.
   *
   * @type {function(*, string, string, *): void}
   */
  const onAssociationInputChange = useCallback((item: any, idAttribute: string, attribute: string, value: any) => (
    setItems((prevItems) => _.map(prevItems, (i) => (i !== item ? i : {
      ...i,
      [idAttribute]: value.id,
      [attribute]: value,
      errors: _.without(item.errors, idAttribute)
    })))
  ), []);

  /**
   * Calls the <code>onSave</code> prop with the current list of items.
   *
   * @type {function(): *}
   */
  const onBatchUpload = useCallback(() => (
    props
      .onSave(items)
      .then(() => setUploadCount(1))
  ), [items]);

  /**
   * Sets the uploading state <code>false</code> and calls the <code>onClose</code> prop if necessary.
   *
   * @type {(function(): void)|*}
   */
  const onComplete = useCallback(() => {
    setUploading(false);

    if (props.closeOnComplete) {
      props.onClose();
    }
  }, [props.closeOnComplete, props.onClose]);

  /**
   * Deletes the passed item from the state.
   *
   * @type {function(*): void}
   */
  const onDelete = useCallback((item) => (
    setItems((prevItems) => _.filter(prevItems, (i) => i !== item))
  ), []);

  /**
   * Sets the status for the item at the passed index.
   *
   * @type {function(*, *): void}
   */
  const setStatus = useCallback((index, status) => (
    setStatuses((prevStatuses) => ({ ...prevStatuses, [index]: status }))
  ));

  /**
   * Iterates of the list of items and sequentially calls the <code>onSave</code> prop for each.
   *
   * @type {function(): Promise<unknown>}
   */
  const onSingleUpload = useCallback(async () => {
    for (let i = 0; i < items.length; i += 1) {
      const item = items[i];

      // Update the status for the item
      setStatus(i, Status.processing);

      let error = false;

      // Do the upload
      try {
        // eslint-disable-next-line no-await-in-loop
        await props.onSave(item);
      } catch (e) {
        error = true;
      }

      // Update the status for the item
      if (error) {
        setStatus(i, Status.error);
      } else {
        setStatus(i, Status.complete);
      }

      // Update the upload count
      setUploadCount((prevCount) => prevCount + 1);
    }

    return Promise.resolve();
  }, [items, props.onSave]);

  /**
   * Updates the text value for the passed item.
   *
   * @type {function(*, string, Event, {value: *}): void}
   */
  const onTextInputChange = useCallback((item: any, attribute: string, e: Event, { value }: { value: any }) => (
    setItems((prevItems) => _.map(prevItems, (i) => (i !== item ? i : {
      ...i,
      [attribute]: value,
      errors: _.without(item.errors, attribute)
    })))
  ), []);

  /**
   * Updates the passed item with the passed object of attributes.
   *
   * @type {function(*, *): void}
   */
  const onUpdate = useCallback((item, attributes) => (
    setItems((prevItems) => _.map(prevItems, (i) => (i !== item ? i : { ...i, ...attributes })))
  ), []);

  /**
   * Updates the passed item with the passed props.
   *
   * @type {(function(): void)|*}
   */
  const onUpload = useCallback(() => {
    // Set the uploading indicator
    setUploading(true);

    // Upload the files
    onValidate()
      .then(() => (
        props.strategy === Strategy.batch
          ? onBatchUpload()
          : onSingleUpload()
      ))
      .finally(onComplete);
  }, [onBatchUpload, onComplete, onSingleUpload, props.strategy]);

  /**
   * Validates the items on the state.
   *
   * @type {function(): Promise<void>}
   */
  const onValidate = useCallback(() => {
    let error = false;

    setItems((prevItems) => _.map(prevItems, (item) => {
      const valid = validateItem(item);

      if (!_.isEmpty(item.errors)) {
        error = true;
      }

      return valid;
    }));

    return error ? Promise.reject() : Promise.resolve();
  }, [items]);

  /**
   * Renders the error message for the passed item.
   *
   * @type {(function(*, *): (null|*))|*}
   */
  const renderMessageItem = useCallback((item, index) => {
    if (_.isEmpty(item.errors)) {
      return null;
    }

    const filename = !_.isEmpty(item.name) ? item.name : `File ${index}`;
    const fields = _.map(item.errors, (e) => props.required[e]).join(', ');

    return (
      <Message.Item
        content={i18n.t('FileUploadModal.errors.required', { filename, fields })}
        key={index}
      />
    );
  }, []);

  /**
   * Validates the passed item.
   *
   * @type {function(*): *&{errors: []}}
   */
  const validateItem = useCallback((item) => {
    const errors = [];

    _.each(_.keys(props.required), (key) => {
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

    return {
      ...item,
      errors
    };
  }, [props.required]);

  /**
   * Memoization and case correction for the <code>itemComponent</code> prop.
   *
   * @type {React$AbstractComponent<*, *>}
   */
  const UploadItem = useMemo(() => props.itemComponent, [props.itemComponent]);

  return (
    <ModalContext.Consumer>
      { (mountNode) => (
        <Modal
          centered={false}
          className='serial-upload-modal'
          mountNode={mountNode}
          open
        >
          { props.showPageLoader && (
            <Dimmer
              active={uploading}
              inverted
            >
              <Loader
                content={i18n.t('FileUploadModal.loader')}
              />
            </Dimmer>
          )}
          <Modal.Header>
            { props.strategy === Strategy.batch && i18n.t('FileUploadModal.title') }
            { props.strategy === Strategy.single && (
              <FileUploadProgress
                completed={uploadCount}
                total={items.length}
                uploading={uploading}
              />
            )}
          </Modal.Header>
          <Modal.Content
            scrolling
          >
            { hasErrors && (
              <Message
                error
              >
                <Message.Header
                  content={'An error occurred'}
                />
                <Message.List>
                  { _.map(items, renderMessageItem) }
                </Message.List>
              </Message>
            )}
            <FileUpload
              onFilesAdded={onAddFiles}
            />
            <Item.Group
              as={Form}
              divided
              noValidate
              relaxed='very'
            >
              { _.map(items, (item, index) => (
                <UploadItem
                  isError={(key) => _.contains(item.errors, key)}
                  isRequired={(key) => !!(props.required && props.required[key])}
                  item={item}
                  key={index}
                  onAssociationInputChange={onAssociationInputChange.bind(this, item)}
                  onDelete={onDelete.bind(this, item)}
                  onTextInputChange={onTextInputChange.bind(this, item)}
                  onUpdate={onUpdate.bind(this, item)}
                >
                  { props.strategy === Strategy.single && (
                    <FileUploadStatus
                      status={statuses[index]}
                    />
                  )}
                </UploadItem>
              ))}
            </Item.Group>
          </Modal.Content>
          <Modal.Actions>
            <Button
              content={i18n.t('Common.buttons.upload')}
              disabled={uploading || uploadCount > 0}
              icon='cloud upload'
              loading={uploading && !props.showPageLoader}
              onClick={onUpload}
              primary
            />
            <Button
              content={uploadCount > 0
                ? i18n.t('Common.buttons.close')
                : i18n.t('Common.buttons.cancel')}
              disabled={uploading}
              onClick={props.onClose}
            />
          </Modal.Actions>
        </Modal>
      )}
    </ModalContext.Consumer>
  );
};

FileUploadModal.defaultProps = {
  closeOnComplete: true,
  strategy: Strategy.batch,
  showPageLoader: true
};

export default FileUploadModal;
