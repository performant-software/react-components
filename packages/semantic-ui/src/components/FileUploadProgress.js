// @flow

import React, { useMemo, type ComponentType } from 'react';
import { Header, Icon, Progress } from 'semantic-ui-react';
import './FileUploadProgress.css';

type Props = {
  completed: number,
  total: number,
  uploading?: boolean
};

const FileUploadProgress: ComponentType<any> = (props: Props) => {
  /**
   * Sets the "complete" variable to "true" if the number of completed items is equal to the total and
   * greater than zero.
   *
   * @type {unknown}
   */
  const complete = useMemo(() => (
    props.completed > 0 && props.completed === props.total
  ), [props.completed, props.total]);

  /**
   * Sets the percent of completed items.
   *
   * @type {number|number}
   */
  const percent = useMemo(() => (
    props.total > 0 ? (props.completed / props.total) : 0
  ), [props.completed, props.total]);

  /**
   * Sets the formatted percent view.
   */
  const percentView = useMemo(() => (
    Number(percent)
      .toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 0
      })
  ), [percent]);

  return (
    <div
      className='file-upload-progress'
    >
      <Icon
        color='blue'
        name='cloud upload'
        size='big'
      />
      <div
        className='progress-container'
      >
        <Header>
          <Header.Content
            content={percentView}
          />
          <Header.Subheader>
            { !(props.uploading || complete) && 'Getting Started' }
            { props.uploading && 'Uploading...' }
            { complete && 'Completed' }
          </Header.Subheader>
        </Header>
        <Progress
          color='blue'
          percent={percent * 100}
        />
      </div>
    </div>
  );
};

export default FileUploadProgress;
