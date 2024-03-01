// @flow

import { BooleanIcon, ListTable } from '@performant-software/semantic-components';
import type { ListTableProps } from '@performant-software/semantic-components/types';
import React, { type ComponentType, useCallback } from 'react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import UserDefinedFieldModal from './UserDefinedFieldModal';
import UserDefinedFields from '../utils/UserDefinedFields';
import UserDefinedFieldsService from '../services/UserDefinedFields';

type Props = ListTableProps & {
  defaults?: any,
  excludeColumns?: Array<string>
};

const OMIT_PROPS = [
  'actions',
  'collectionName',
  'columns',
  'defaults',
  'excludeColumns',
  'modal',
  'onDelete',
  'onLoad',
  'onSave'
];

const DEFAULT_ORDER = 0;

const UserDefinedFieldsList: ComponentType<any> = (props: Props) => {
  /**
   * Returns true if the passed column should be hidden by default.
   *
   * @type {function(*): *}
   */
  const isHidden = useCallback((column) => _.contains(props.excludeColumns, column), [props.excludeColumns]);

  return (
    <ListTable
      {..._.omit(props, OMIT_PROPS)}
      actions={[{
        name: 'edit'
      }, {
        name: 'delete'
      }]}
      columns={[{
        name: 'table_name',
        label: i18n.t('UserDefinedFieldsList.columns.table'),
        hidden: isHidden('table_name')
      }, {
        name: 'column_name',
        label: i18n.t('UserDefinedFieldsList.columns.name'),
        hidden: isHidden('column_name')
      }, {
        name: 'data_type',
        label: i18n.t('UserDefinedFieldsList.columns.dataType'),
        hidden: isHidden('data_type')
      }, {
        name: 'required',
        label: i18n.t('UserDefinedFieldsList.columns.required'),
        render: (udf) => <BooleanIcon value={udf.required} />,
        hidden: isHidden('required')
      }, {
        name: 'order',
        label: i18n.t('UserDefinedFieldsList.columns.order'),
        hidden: isHidden('order')
      }, {
        name: 'uuid',
        label: i18n.t('UserDefinedFieldsList.columns.uuid'),
        hidden: isHidden('uuid')
      }]}
      collectionName='user_defined_fields'
      modal={{
        component: UserDefinedFieldModal,
        props: {
          defaults: {
            order: DEFAULT_ORDER,
            ...(props.defaults || {})
          },
          hideTable: isHidden('table_name'),
          validate: UserDefinedFields.validateUserDefinedField.bind(this)
        }
      }}
      onDelete={(udf) => UserDefinedFieldsService.delete(udf)}
      onLoad={(params) => UserDefinedFieldsService.fetchAll(params)}
      onSave={(udf) => UserDefinedFieldsService.save(udf)}
    />
  );
};

export default UserDefinedFieldsList;
