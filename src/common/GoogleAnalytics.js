// @flow

import React from 'react';
import _ from 'underscore';

type GA = {
  id: string,
  key: string
};

type Props = {
  googleAnalytics: GA
};

const GA_CONSENT_KEY = 'ga_content';

const Status = {
  accepted: 'accepted',
  notSet: 'not_set',
  rejected: 'rejected',
};

const GoogleAnalyticsScript = (props: Props) => {
  // Only include the script if an API key is provided.
  if (_.isEmpty(props.googleAnalytics && props.googleAnalytics.id)) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${props.googleAnalytics.id}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            const cookies = localStorage.getItem('${props.googleAnalytics.key}');
            
            window.initializeAnalytics = () => {
              window.dataLayer = window.dataLayer || [];
              function gtag() { dataLayer.push(arguments); }
              gtag('js', new Date());
              gtag('config', '${props.googleAnalytics.id}', {
                page_path: window.location.pathname,
              });
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

/**
 * Returns the "ga_consent" value from local storage.
 *
 * @returns {?string}
 */
const getGoogleAnalyticsConsent = (key: string = GA_CONSENT_KEY) => localStorage.getItem(key);

/**
 * Sets the "ga_consent" value on local storage.
 *
 * @param status
 */
const setGoogleAnalyticsConsent = (key: string = GA_CONSENT_KEY, status: string) => localStorage.setItem(key, status);

/**
 * Sends the page view event to Google Analytics.
 *
 * @param ga
 * @param url
 */
const pageView = (ga: GA, url: string) => {
  const cookies = getGoogleAnalyticsConsent(ga.key);
  if (cookies === Status.accepted && window.gtag) {
    window.gtag('config', ga.id, { page_path: url });
  }
};

export default {
  pageView,
  getGoogleAnalyticsConsent,
  setGoogleAnalyticsConsent
};

export {
  GoogleAnalyticsScript
};
