// @flow

import { BooleanIcon, ListTable } from '@performant-software/semantic-components';
import React, { type ComponentType, useMemo } from 'react';
import i18n from '../i18n/i18n';
import UserDefinedFieldModal from './UserDefinedFieldModal';
import UserDefinedFields from '../utils/UserDefinedFields';
import UserDefinedFieldsService from '../services/UserDefinedFields';

type Props = {
  modal?: {
    defaults: any,
    props: any
  }
};

const DEFAULT_ORDER = 0;

const UserDefinedFieldsList: ComponentType<any> = (props: Props) => {
  const defaults = useMemo(() => props.modal?.defaults || {}, [props.modal]);
  const modalProps = useMemo(() => props.modal?.props || {}, [props.modal]);

  return (
    <ListTable
      actions={[{
        name: 'edit'
      }, {
        name: 'delete'
      }]}
      columns={[{
        name: 'table_name',
        label: i18n.t('UserDefinedFieldsList.columns.table')
      }, {
        name: 'column_name',
        label: i18n.t('UserDefinedFieldsList.columns.name')
      }, {
        name: 'data_type',
        label: i18n.t('UserDefinedFieldsList.columns.dataType')
      }, {
        name: 'required',
        label: i18n.t('UserDefinedFieldsList.columns.required'),
        render: (udf) => <BooleanIcon value={udf.required} />
      }, {
        name: 'order',
        label: i18n.t('UserDefinedFieldsList.columns.order')
      }]}
      collectionName='user_defined_fields'
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
      onLoad={(params) => UserDefinedFieldsService.fetchAll(params)}
      onSave={(udf) => UserDefinedFieldsService.save(udf)}
      onDelete={(udf) => UserDefinedFieldsService.delete(udf)}
    />
  );
};

export default UserDefinedFieldsList;
