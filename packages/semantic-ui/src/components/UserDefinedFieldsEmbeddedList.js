// @flow

import React from 'react';
import i18n from '../i18n/i18n';
import BooleanIcon from './BooleanIcon';
import EmbeddedList from './EmbeddedList';
import UserDefinedFieldModal from './UserDefinedFieldModal';

type Props = {
  items: Array<any>,
  onDelete: (item: any) => Promise<any>,
  onSave: (item: any) => Promise<any>
};

const UserDefinedFieldsEmbeddedList = (props: Props) => (
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
    }]}
    items={props.items}
    modal={{
      component: UserDefinedFieldModal
    }}
    onDelete={props.onDelete}
    onSave={props.onSave}
  />
);

export default UserDefinedFieldsEmbeddedList;
