// @flow

import { action } from 'storybook/actions';
import React, { useState } from 'react';
import { Button, Form, Item } from 'semantic-ui-react';
import FileUploadModal from '../../../semantic-ui/src/components/FileUploadModal';

export default {
  title: 'Components/Semantic UI/FileUploadModal',
  component: FileUploadModal
};

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
    onAddFile={(file) => ({
      name: file.name,
      content: file,
      type: file.type
    })}
    onClose={props.onClose}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
  />
));

export const InputErrors = withWrapper((props) => (
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

export const UploadErrors = withWrapper((props) => (
  <FileUploadModal
    errors={['File too large.']}
    itemComponent={({ item }) => (
      <Form.Input
        label='Name'
        value={item.name || ''}
      />
    )}
    onAddFile={(file) => ({
      name: file.name,
      content: file,
      type: file.type
    })}
    onClose={props.onClose}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
  />
));

export const Images = withWrapper((props) => (
  <FileUploadModal
    itemComponent={({ item, onTextInputChange }) => (
      <Item>
        <Item.Image
          src={URL.createObjectURL(item.content)}
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
    onAddFile={(file) => ({
      name: file.name,
      content: file,
      type: file.type
    })}
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
    itemComponent={({
      item,
      onDelete,
      onTextInputChange,
      renderStatus
    }) => (
      <Item>
        <Item.Image
          src={URL.createObjectURL(item.content)}
        />
        <Item.Content>
          <Form.Input
            label='Name'
            onChange={onTextInputChange.bind(this, 'name')}
            value={item.name}
          />
          <Button
            basic
            color='red'
            icon='trash'
            onClick={onDelete}
          />
          { renderStatus() }
        </Item.Content>
      </Item>
    )}
    onAddFile={(file) => ({
      name: file.name,
      content: file,
      type: file.type
    })}
    onClose={props.onClose}
    onSave={() => {
      action('save')();
      return Promise.resolve();
    }}
    showPageLoader={false}
    strategy='single'
  />
));
