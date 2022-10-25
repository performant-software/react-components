// @flow

import React, { Component, createRef } from 'react';
import { Icon, Message } from 'semantic-ui-react';
import { Trans } from 'react-i18next';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import './FileUpload.css';

type Props = {
  /**
   * A list of file types to include
   */
  fileTypes?: Array<string>,

  /**
   * The maximum size for a single file
   */
  maxSize?: number,

  /**
   * Call back for when files are added
   */
  onFilesAdded: (files: Array<File>) => void,
};

type State = {
  errors: ?Array<string>
};

type FileEvent = {
  dataTransfer: HTMLInputElement,
  preventDefault: () => void,
  target: HTMLInputElement
};

/**
 * The <code>FileUpload</code> component renders a dropzone and allows a user to drop or select one or more files
 * from their local file system. Optionally, the files can be limited by size or type.
 */
class FileUpload extends Component<Props, State> {
  fileInput: any;
  filePattern: any;

  /**
   * Constructs a new FileUpload component.
   *
   * @param props
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      errors: null
    };

    this.fileInput = createRef();
    this.filePattern = this.props.fileTypes && new RegExp(`(.*?)\\.${this.props.fileTypes.join('|')}$`);
  }

  /**
   * Triggers the file input click.
   */
  onClickDropzone() {
    this.fileInput.current.click();
  }

  /**
   * Adds the selected files.
   *
   * @param e
   */
  onDropFiles(e: FileEvent) {
    e.preventDefault();
    const files = this.toArray(e.dataTransfer.files);
    const validFiles = this.validate(files);
    if (validFiles.length === files.length) {
      this.props.onFilesAdded(files);
    }
  }

  /**
   * Adds the selected files.
   *
   * @param e
   */
  onFilesAdded(e: FileEvent) {
    e.preventDefault();
    const files = this.toArray(e.target.files);
    const validFiles = this.validate(files);
    if (validFiles.length === files.length) {
      this.props.onFilesAdded(files);
    }
  }

  /**
   * Renders the FileUpload component.
   */
  render() {
    return (
      <div
        className='file-upload'
      >
        <Message
          error
          header={i18n.t('Common.errors.title')}
          hidden={!(this.state.errors && this.state.errors.length)}
          visible={this.state.errors && this.state.errors.length}
          onDismiss={() => this.setState({ errors: null })}
          list={this.state.errors}
        />
        <div
          className='file-dropzone'
          onClick={this.onClickDropzone.bind(this)}
          onDragLeave={(e) => { e.preventDefault(); }}
          onDragOver={(e) => { e.preventDefault(); }}
          onDrop={this.onDropFiles.bind(this)}
          onKeyDown={() => {}}
          role='button'
          tabIndex={-1}
        >
          <Icon
            color='blue'
            name='cloud upload'
            size='large'
          />
          <div className='file-dropzone-text'>
            <Trans i18nKey='FileUpload.add'>
              <span className='link-text'>Add files</span>
              &nbsp;or drop files here
            </Trans>
          </div>
          <input
            ref={this.fileInput}
            className='file-input'
            type='file'
            multiple
            onChange={this.onFilesAdded.bind(this)}
          />
        </div>
      </div>
    );
  }

  /**
   * Converts the passed file list to an array.
   *
   * @param fileList
   *
   * @returns {[]}
   */
  toArray(fileList: any) {
    const array = [];

    for (let i = 0; i < fileList.length; i += 1) {
      array.push(fileList.item(i));
    }

    return array;
  }

  /**
   * Validates the passed list of files.
   *
   * @param files
   *
   * @returns {[]|*}
   */
  validate(files: Array<File>) {
    if (!this.props.maxSize && !this.props.fileTypes) {
      return files;
    }

    const validFiles = [];
    const errors = [];

    _.each(files, (file) => {
      let valid = true;

      // Files are invalid if they exceed the maximum size
      if (this.props.maxSize && file.size > this.props.maxSize) {
        valid = false;
        errors.push(i18n.t('FileUpload.errors.maxSize', { name: file.name }));
      }

      // Files are invalid if they do not match the acceptable types
      if (this.filePattern && !file.name.match(this.filePattern)) {
        valid = false;
        errors.push(i18n.t('FileUpload.errors.fileType', { name: file.name, type: /[^.]+$/.exec(file.name) }));
      }

      if (valid) {
        validFiles.push(file);
      }
    });

    this.setState({ errors });

    return validFiles;
  }
}

export default FileUpload;
