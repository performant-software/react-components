import React, { useState } from 'react';
import MediaSelect from '../../../performant-ui/src/components/MediaSelect';
import { FaPlus } from "react-icons/fa";

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
