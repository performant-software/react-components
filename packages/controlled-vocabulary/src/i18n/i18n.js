// @flow

import i18next from 'i18next';

import en from './en.json';

const resources = {
  en: {
    translation: en
  }
};

const i18n = i18next.createInstance();

i18n
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources
  });

export default i18n;
