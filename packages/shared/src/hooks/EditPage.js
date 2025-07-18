// @flow

import React, { useCallback, type ComponentType } from 'react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import useEditContainer from '../components/EditContainer';

type Config = {
  afterSave?: (item: any, tab: string) => Promise<any>,
  id: string,
  onCancel: () => void,
  onInitialize: (item: any) => Promise<any>,
  onSave: (item: any) => Promise<any>,
  required?: Array<string>,
  resolveValidationError?: (params: any) => any,
  validate?: (item: any) => any
};

const withEditPage = (WrappedComponent: ComponentType<any>, config: Config): any => (props: any) => {
  const { id } = config;

  let tab;

  /**
   * Adds the authorization error.
   *
   * @type {function(*): {}}
   */
  const resolveValidationError = useCallback((errorProps) => {
    const errors = {};

    if (config.resolveValidationError) {
      _.extend(errors, config.resolveValidationError(errorProps));
    }

    if (errorProps.status === 403) {
      _.extend(errors, { base: i18n.t('Common.errors.unauthorized') });
    }

    return errors;
  }, [config.resolveValidationError]);

  /**
   * Saves the passed item then calls the "afterSave" prop.
   *
   * @type {function(*): *}
   */
  const onSave = useCallback((item) => (
    config
      .onSave(item)
      .then((record) => config.afterSave && config.afterSave(record, tab))
  ), [config.afterSave, config.onSave]);

  const EditPage = (innerProps: any) => (
    <WrappedComponent
      {...innerProps}
      onTabClick={(newTab) => {
        tab = newTab;
      }}
    />
  );

  const EditContainer = useEditContainer(EditPage);

  return (
    <EditContainer
      {...props}
      item={{ id }}
      onCancel={config.onCancel}
      onInitialize={config.onInitialize}
      onSave={onSave}
      required={config.required}
      resolveValidationError={resolveValidationError}
      validate={config.validate}
    />
  );
};

export default withEditPage;

export type {
  Config
};
