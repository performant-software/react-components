// @flow

import React, { useEffect, useState, type ComponentType } from 'react';

const Status = {
  accepted: 'accepted',
  notSet: 'not_set',
  rejected: 'rejected'
};

const withCookiePolicy = (WrappedComponent: ComponentType<any>, storageKey: string) => (props: any) => {
  const [status, setStatus] = useState(Status.notSet);

  /**
   * Set the status in local storage when the state changes.
   */
  useEffect(() => {
    localStorage.setItem(storageKey, status);
  }, [status, storageKey]);

  /**
   * Load the initial status value from local storage.
   */
  useEffect(() => {
    setStatus(localStorage.getItem(storageKey) || Status.notSet);
  }, [storageKey]);

  return (
    <WrappedComponent
      {...props}
      onAccept={() => setStatus(Status.accepted)}
      onDecline={() => setStatus(Status.rejected)}
      status={status}
    />
  );
};

export default withCookiePolicy;

export {
  Status
};
