// @flow

import React, {
  useCallback,
  useEffect,
  useState,
  type ComponentType
} from 'react';
import _ from 'underscore';
import useScript from './Script';

type Props = {
  id: string,
  location?: string,
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
  const onAccept = useCallback(() => {
    setStatus(Status.accepted);

    if (window.initializeAnalytics) {
      window.initializeAnalytics();
    }
  }, []);

  /**
   * Sets the "rejected" status.
   *
   * @type {(function(): void)|*}
   */
  const onDecline = useCallback(() => {
    setStatus(Status.rejected);
  }, []);

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
    if (props.location && status === Status.accepted && window.gtag) {
      window.gtag('config', props.id);
    }
  }, [status, props.id, props.location]);

  return (
    <>
      <GoogleAnalyticsScript
        id={props.id}
        storageKey={props.storageKey}
      />
      { status === Status.notSet && (
        <BannerComponent
          {...props}
          onAccept={onAccept}
          onDecline={onDecline}
        />
      )}
    </>
  );
};

/**
 * Renders the component to insert the necessary scripts for Google Analytics.
 *
 * @param props
 *
 * @returns {JSX.Element|null}
 *
 * @constructor
 */
const GoogleAnalyticsScript = (props: Props) => {
  // Only include the script if an API key is provided.
  if (_.isEmpty(props.id)) {
    return null;
  }

  useScript(`https://www.googletagmanager.com/gtag/js?id=${props.id}`);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const cookies = localStorage.getItem('${props.storageKey}');

            window.initializeAnalytics = () => {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${props.id}');
            };

            if (cookies === '${Status.accepted}') {
              window.initializeAnalytics();
            }
          `,
        }}
      />
    </>
  );
};

export default withGoogleAnalytics;
