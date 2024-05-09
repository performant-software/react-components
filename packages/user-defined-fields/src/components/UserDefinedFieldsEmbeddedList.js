// @flow

import { BooleanIcon, EmbeddedList } from '@performant-software/semantic-components';
import type { EmbeddedListProps } from '@performant-software/semantic-components/types';
import React, { useCallback } from 'react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import UserDefinedFieldModal from './UserDefinedFieldModal';
import UserDefinedFields from '../utils/UserDefinedFields';

type Props = EmbeddedListProps & {
  actions?: Array<any>,
  defaults: any,
  excludeColumns?: Array<string>
};

const OMIT_PROPS = [
  'columns',
  'defaults',
  'excludeColumns',
  'modal'
];

const DEFAULT_ORDER = 0;

const UserDefinedFieldsEmbeddedList = (props: Props) => {
  /**
   * Returns true if the passed column should be hidden by default.
   *
   * @type {function(*): *}
   */
  const isHidden = useCallback((column) => _.contains(props.excludeColumns, column), [props.excludeColumns]);

  return (
    <EmbeddedList
      {..._.omit(props, OMIT_PROPS)}
      columns={[{
        name: 'table_name',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.table'),
        hidden: isHidden('table_name')
      }, {
        name: 'column_name',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.name'),
        hidden: isHidden('column_name')
      }, {
        name: 'data_type',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.dataType'),
        hidden: isHidden('data_type')
      }, {
        name: 'required',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.required'),
        render: (udf) => <BooleanIcon value={udf.required} />,
        hidden: isHidden('required')
      }, {
        name: 'order',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.order'),
        hidden: isHidden('order')
      }, {
        name: 'uuid',
        label: i18n.t('UserDefinedFieldsEmbeddedList.columns.uuid'),
        hidden: isHidden('uuid')
      }]}
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
    />
  );
};

UserDefinedFieldsEmbeddedList.defaultProps = {
  actions: [{
    name: 'edit'
  }, {
    name: 'delete'
  }]
};

export default UserDefinedFieldsEmbeddedList;
