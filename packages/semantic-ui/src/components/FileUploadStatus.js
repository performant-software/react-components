// @flow

import React, { useMemo, type ComponentType } from 'react';
import { Icon, Label, Loader } from 'semantic-ui-react';
import './FileUploadStatus.css';

type Props = {
  status: string
};

const Status = {
  pending: 'pending',
  processing: 'processing',
  complete: 'complete',
  error: 'error'
};

const ColorsByStatus = {
  [Status.processing]: 'black',
  [Status.complete]: 'green',
  [Status.error]: 'red'
};

const IconsByStatus = {
  [Status.pending]: 'clock outline',
  [Status.complete]: 'checkmark',
  [Status.error]: 'warning circle'
};

const TextByStatus = {
  [Status.pending]: 'Pending',
  [Status.processing]: 'Processing',
  [Status.complete]: 'Complete',
  [Status.error]: 'Error'
};

const FileUploadStatus: ComponentType<any> = ({ status = Status.pending }: Props) => {
  const color = useMemo(() => ColorsByStatus[status], [status]);
  const icon = useMemo(() => IconsByStatus[status], [status]);
  const text = useMemo(() => TextByStatus[status], [status]);

  return (
    <Label
      className='file-upload-status'
      color={color}
    >
      { status === Status.processing && (
        <Loader
          active
          inline
          inverted
          size='mini'
        />
      )}
      { icon && (
        <Icon
          name={icon}
        />
      )}
      { text }
    </Label>
  );
};

export default FileUploadStatus;
