// @flow

import { createContext } from 'react';

type I18nContextType = {
  translations: any
};

const I18nContext = createContext<I18nContextType>();

export default I18nContext;
