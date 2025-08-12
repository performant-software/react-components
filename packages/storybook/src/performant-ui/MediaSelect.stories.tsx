import React, { useState } from 'react';
import MediaSelect from '../../../performant-ui/src/components/MediaSelect';
import { FaPlus } from "react-icons/fa";
import { action } from 'storybook/actions';

export default {
  title: 'Components/Performant UI/MediaSelect',
  component: MediaSelect
};

export const Default = () => {
  const [files, setFiles] = useState([])

  return (
    <MediaSelect
      description='This will be visible to clients on the project.'
      fileDescription='PNG, JPG, GIF up to 2MB'
      label='Label'
      onChange={setFiles}
      value={files}
    />
  );
};

export const Multiple = () => {
  const [files, setFiles] = useState([])

  return (
    <MediaSelect
      description='This will be visible to clients on the project.'
      fileDescription='PNG, JPG, GIF up to 2MB'
      label='Label'
      multiple
      onChange={setFiles}
      value={files}
    />
  );
};

export const NoHelperText = () => {
  const [files, setFiles] = useState([])

  return (
    <MediaSelect
      multiple
      onChange={setFiles}
      value={files}
    />
  );
};

export const WithRemove = () => {
  const [files, setFiles] = useState([])

  return (
    <MediaSelect
      description='This will be visible to clients on the project.'
      fileDescription='PNG, JPG, GIF up to 2MB'
      label='Label'
      multiple
      onChange={setFiles}
      onRemoveFile={action('click')}
      value={files}
    />
  );
};
