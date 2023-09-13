// @flow

import { BooleanIcon, EmbeddedList } from '@performant-software/semantic-components';
import React, { useMemo } from 'react';
import i18n from '../i18n/i18n';
import UserDefinedFieldModal from './UserDefinedFieldModal';
import UserDefinedFields from '../utils/UserDefinedFields';

type Props = {
  defaults: any,
  items: Array<any>,
  modal?: {
    defaults: any,
    props: any
  },
  onDelete: (item: any) => Promise<any>,
  onSave: (item: any) => Promise<any>
};

const DEFAULT_ORDER = 0;

const UserDefinedFieldsEmbeddedList = (props: Props) => {
  const defaults = useMemo(() => props.modal?.defaults || {}, [props.modal]);
  const modalProps = useMemo(() => props.modal?.props || {}, [props.modal]);

  return (
    <EmbeddedList
      actions={[{
        name: 'edit'
      }, {
        name: 'delete'
      }]}
      columns={[{
        name: 'table_name',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.table')
      }, {
        name: 'column_name',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.name')
      }, {
        name: 'data_type',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.dataType')
      }, {
        name: 'required',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.required'),
        render: (udf) => <BooleanIcon value={udf.required} />
      }, {
        name: 'order',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.order')
      }]}
      items={props.items}
      modal={{
        component: UserDefinedFieldModal,
        props: {
          defaults: {
            order: DEFAULT_ORDER,
            ...defaults
          },
          ...modalProps,
          validate: UserDefinedFields.validateUserDefinedField.bind(this)
        }
      }}
      onDelete={props.onDelete}
      onSave={props.onSave}
    />
  );
};

export default UserDefinedFieldsEmbeddedList;
