// @flow

import React, { useRef } from 'react';
import { Button } from 'semantic-ui-react';

type Props = {
  multiple?: boolean,
  onSelection: (files: Array<File>) => void
};

const FileInputButton = ({ onSelection, multiple, ...buttonProps }: Props) => {
  const fileInputRef = useRef();

  /**
   * Converts the passed file list to an array.
   *
   * @param fileList
   *
   * @returns {[]}
   */
  const toArray = (fileList) => {
    const array = [];

    for (let i = 0; i < fileList.length; i += 1) {
      array.push(fileList.item(i));
    }

    return array;
  };

  return (
    <>
      <Button
        {...buttonProps}
        onClick={() => fileInputRef.current && fileInputRef.current.click()}
      />
      <input
        ref={fileInputRef}
        type='file'
        multiple={multiple}
        onChange={(e) => onSelection(toArray(e.target.files))}
        style={{
          display: 'none'
        }}
      />
    </>
  );
};

FileInputButton.defaultProps = {
  multiple: false
};

export default FileInputButton;
