import React, { useState } from 'react';
import MediaSelect from '../../../performant-ui/src/components/MediaSelect';
import { FaPlus } from "react-icons/fa";
import { action } from 'storybook/actions';
import fc from '../assets/faircopy_image.png';

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
      onChange={action('change')}
    />
  );
};

export const Prepopulated = () => {
  const [files, setFiles] = useState([])

  return (
    <MediaSelect
      description='This will be visible to clients on the project.'
      fileDescription='PNG, JPG, GIF up to 2MB'
      onChange={action('change')}
      imageUrl={fc}
    />
  );
};

export const WithLabel = () => {
  const [files, setFiles] = useState([])

  return (
    <MediaSelect
      description='This will be visible to clients on the project.'
      label='Project Image'
      fileDescription='PNG, JPG, GIF up to 2MB'
      label='Label'
      onChange={action('change')}
    />
  );
};

export const NoHelperText = () => {
  const [files, setFiles] = useState([])

  return (
    <MediaSelect
      onChange={action('change')}
    />
  );
};

export const WithRemove = () => {
  const [files, setFiles] = useState([])

  return (
    <MediaSelect
      description='This will be visible to clients on the project.'
      fileDescription='PNG, JPG, GIF up to 2MB'
      onChange={action('change')}
      onRemoveFile={action('click')}
    />
  );
};
