// @flow

import { UserDefinedFieldsService } from '@performant-software/shared-components';
import React, { type ComponentType } from 'react';
import i18n from '../i18n/i18n';
import BooleanIcon from './BooleanIcon';
import ListTable from './ListTable';
import UserDefinedFieldModal from './UserDefinedFieldModal';

const UserDefinedFieldsList: ComponentType<any> = () => (
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
    }]}
    collectionName='user_defined_fields'
    modal={{
      component: UserDefinedFieldModal
    }}
    onLoad={(params) => UserDefinedFieldsService.fetchAll(params)}
    onSave={(udf) => UserDefinedFieldsService.save(udf)}
    onDelete={(udf) => UserDefinedFieldsService.delete(udf)}
  />
);

export default UserDefinedFieldsList;
