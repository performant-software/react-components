// @flow

import React, {
  useCallback,
  useEffect,
  useState,
  type ComponentType
} from 'react';
import GoogleAnalytics from 'react-ga4';

type Props = {
  id: string,
  location?: any,
  storageKey: string,
};

/**
 * Status constants.
 *
 * @type {{rejected: string, notSet: string, accepted: string}}
 */
const Status = {
  accepted: 'accepted',
  notSet: 'not_set',
  rejected: 'rejected'
};

/**
 * Higher order component function used to wrap a "cookie consent" banner with Google Analytics.
 *
 * @param BannerComponent
 *
 * @returns {function(Props)}
 */
const withGoogleAnalytics = (BannerComponent: ComponentType<any>) => (props: Props) => {
  const [status, setStatus] = useState();

  /**
   * Returns the Google Analytics consent value from local storage.
   *
   * @param storageKey
   *
   * @returns {string|string}
   */
  const getGoogleAnalyticsConsent = (storageKey) => (
    localStorage.getItem(storageKey) || Status.notSet
  );

  /**
   * Sets the Google Analytics consent value in local storage.
   *
   * @param storageKey
   * @param newStatus
   */
  const setGoogleAnalyticsConsent = (storageKey: string, newStatus: string) => (
    localStorage.setItem(storageKey, newStatus)
  );

  /**
   * Sets the "accepted" status and initializes analytics.
   *
   * @type {(function(): void)|*}
   */
  const onAccept = useCallback(() => setStatus(Status.accepted), []);

  /**
   * Sets the "rejected" status.
   *
   * @type {(function(): void)|*}
   */
  const onDecline = useCallback(() => setStatus(Status.rejected), []);

  /**
   * Sets the initial status on the state from local storage.
   */
  useEffect(() => {
    setStatus(getGoogleAnalyticsConsent(props.storageKey));
  }, [props.storageKey]);

  /**
   * Sets the status on local storage when the state changes.
   */
  useEffect(() => {
    setGoogleAnalyticsConsent(props.storageKey, status || '');
  }, [status, props.storageKey]);

  /**
   * Sends the page view event if the location changes.
   */
  useEffect(() => {
    if (props.location && status === Status.accepted) {
      GoogleAnalytics.send('pageview');
    }
  }, [status, props.location]);

  /**
   * Initializes GoogleAnalytics when the status is set to accepted.
   */
  useEffect(() => {
    if (status === Status.accepted && props.id) {
      GoogleAnalytics.initialize(props.id);
    }
  }, [status]);

  if (status !== Status.notSet) {
    return null;
  }

  return (
    <BannerComponent
      {...props}
      onAccept={onAccept}
      onDecline={onDecline}
    />
  );
};

export default withGoogleAnalytics;
