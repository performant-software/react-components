// @flow

import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { Button, Form, Item } from 'semantic-ui-react';
import FileUploadModal from '../../../semantic-ui/src/components/FileUploadModal';

const withWrapper = (WrappedComponent) => (props) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Button
        content='Open'
        primary
        onClick={() => setModal(true)}
      />
      { modal && (
        <WrappedComponent
          {...props}
          onClose={() => setModal(false)}
        />
      )}
    </>
  );
};

export const Default = withWrapper((props) => (
  <FileUploadModal
    itemComponent={({ item }) => (
      <Form.Input
        label='Name'
        value={item.name || ''}
      />
    )}
    onAddFile={(file) => file}
    onClose={props.onClose}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
  />
));

export const Errors = withWrapper((props) => (
  <FileUploadModal
    closeOnComplete={false}
    itemComponent={({
      item,
      isError,
      isRequired,
      onDelete,
      onTextInputChange
    }) => (
      <Item>
        <Item.Image
          src={URL.createObjectURL(item.content)}
        />
        <Item.Content>
          <Form.Input
            error={isError('name')}
            label='Name'
            onChange={onTextInputChange.bind(this, 'name')}
            required={isRequired('name')}
            value={item.name || ''}
          />
          <Button
            basic
            color='red'
            icon='trash'
            onClick={onDelete}
          />
        </Item.Content>
      </Item>
    )}
    onAddFile={(file) => ({
      name: file.name,
      content: file,
      content_type: file.type
    })}
    onClose={props.onClose}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    required={{
      name: 'Name'
    }}
  />
));

export const Images = withWrapper((props) => (
  <FileUploadModal
    itemComponent={({ item, onTextInputChange }) => (
      <Item>
        <Item.Image
          src={URL.createObjectURL(item)}
        />
        <Item.Content>
          <Form.Input
            label='Name'
            onChange={onTextInputChange.bind(this, 'name')}
            value={item.name}
          />
        </Item.Content>
      </Item>
    )}
    onAddFile={(file) => file}
    onClose={props.onClose}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
  />
));

export const SingleUpload = withWrapper((props) => (
  <FileUploadModal
    closeOnComplete={false}
    itemComponent={({ item, onTextInputChange }) => (
      <Item>
        <Item.Image
          src={URL.createObjectURL(item)}
        />
        <Item.Content>
          <Form.Input
            label='Name'
            onChange={onTextInputChange.bind(this, 'name')}
            value={item.name}
          />
        </Item.Content>
      </Item>
    )}
    onAddFile={(file) => file}
    onClose={props.onClose}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    showPageLoader={false}
    strategy='single'
  />
));
