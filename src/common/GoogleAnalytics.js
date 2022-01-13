// @flow

import React, {
  useCallback,
  useEffect,
  useState,
  type ComponentType
} from 'react';
import _ from 'underscore';

type Props = {
  id: string,
  storageKey: string
};

const GoogleAnalyticsStatus = {
  accepted: 'accepted',
  notSet: 'not_set',
  rejected: 'rejected'
};

/**
 * Returns the Google Analytics consent value from local storage.
 *
 * @param storageKey
 *
 * @returns {string|string}
 */
const getGoogleAnalyticsConsent = (storageKey) => localStorage.getItem(storageKey) || GoogleAnalyticsStatus.notSet;

/**
 * Sets the Google Analytics consent value in local storage.
 *
 * @param storageKey
 * @param status
 */
const setGoogleAnalyticsConsent = (storageKey: string, status: string) => localStorage.setItem(storageKey, status);

/**
 * Sends the page view event to Google Analytics.
 *
 * @param id
 * @param url
 */
const pageView = (id: string, storageKey: string, url: string) => {
  const status = getGoogleAnalyticsConsent(storageKey);
  if (status === GoogleAnalyticsStatus.accepted && window.gtag) {
    window.gtag('config', id, { page_path: url });
  }
};

/**
 * Higher order component function used to wrap a "cookie consent" banner with Google Analytics.
 *
 * @param BannerComponent
 *
 * @returns {function(Props)}
 */
const withGoogleAnalytics = (BannerComponent: ComponentType<any>) => (props: Props) => {
  const [status, setStatus] = useState(GoogleAnalyticsStatus.notSet);

  /**
   * Sets the "accepted" status and initializes analytics.
   *
   * @type {(function(): void)|*}
   */
  const onAccept = useCallback(() => {
    setStatus(GoogleAnalyticsStatus.accepted);

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
    setStatus(GoogleAnalyticsStatus.rejected);
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
    setGoogleAnalyticsConsent(props.storageKey, status);
  }, [status, props.storageKey]);

  return (
    <>
      <GoogleAnalyticsScript
        id={props.id}
        storageKey={props.storageKey}
      />
      { status === GoogleAnalyticsStatus.notSet && (
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

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${props.id}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const cookies = localStorage.getItem('${props.storageKey}');

            window.initializeAnalytics = () => {
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', '${props.id}', {
                page_path: window.location.pathname,
              });
            };

            if (cookies === '${GoogleAnalyticsStatus.accepted}') {
              window.initializeAnalytics();
            }
          `,
        }}
      />
    </>
  );
};

export default withGoogleAnalytics;

export {
  pageView
};
