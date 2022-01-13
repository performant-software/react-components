// @flow

import React from 'react';
import _ from 'underscore';

type Props = {
  id: string
};

const GA_CONSENT_KEY = 'ga_consent';

const GoogleAnalyticsStatus = {
  accepted: 'accepted',
  notSet: 'not_set',
  rejected: 'rejected',
};

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
            const cookies = localStorage.getItem('${GA_CONSENT_KEY}');
            
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

/**
 * Returns the "ga_consent" value from local storage.
 *
 * @returns {?string}
 */
const getGoogleAnalyticsConsent = () => localStorage.getItem(GA_CONSENT_KEY);

/**
 * Sets the "ga_consent" value on local storage.
 *
 * @param status
 */
const setGoogleAnalyticsConsent = (status: string) => localStorage.setItem(GA_CONSENT_KEY, status);

/**
 * Sends the page view event to Google Analytics.
 *
 * @param id
 * @param url
 */
const pageView = (id: string, url: string) => {
  const cookies = getGoogleAnalyticsConsent();
  if (cookies === GoogleAnalyticsStatus.accepted && window.gtag) {
    window.gtag('config', id, { page_path: url });
  }
};

export default {
  pageView,
  getGoogleAnalyticsConsent,
  setGoogleAnalyticsConsent
};

export {
  GoogleAnalyticsScript,
  GoogleAnalyticsStatus
};
