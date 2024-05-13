// @flow

import { BooleanIcon } from '@performant-software/semantic-components';
import { Date as DateUtils } from '@performant-software/shared-components';
import React, { useEffect, useMemo, useState } from 'react';
import _ from 'underscore';
import { DataTypes } from '../constants/DataTypes';
import UserDefinedFieldsService from '../services/UserDefinedFields';

/**
 * Returns the loading state and list of user defined columns for the passed defineable ID and defineable type.
 *
 * @param defineableId
 * @param defineableType
 *
 * @returns {{userDefinedColumns: [], loading: boolean}}
 */
const useUserDefinedColumns = (defineableId, defineableType) => {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false);

  /**
   * Memo-izes the columns.
   *
   * @type {[]}
   */
  const userDefinedColumns = useMemo(() => {
    const columns = [];

    _.each(fields, (field) => {
      const column = {
        name: field.column_name,
        label: field.column_name,
        hidden: true,
        sortable: true
      };

      if (field.data_type === DataTypes.boolean) {
        columns.push({
          ...column,
          render: (item) => (
            <BooleanIcon
              value={item.user_defined[field.uuid]}
            />
          )
        });
      }

      if (field.data_type === DataTypes.date) {
        columns.push({
          ...column,
          resolve: (item) => DateUtils.formatDate(item.user_defined[field.uuid])
        });
      }

      if (field.data_type !== DataTypes.richText) {
        columns.push({
          ...column,
          resolve: (item) => item.user_defined[field.uuid]
        });
      }
    });

    return columns;
  }, [fields]);

  /**
   * Fetches the user defined fields for the passed defineable ID and defineable type.
   */
  useEffect(() => {
    setLoading(true);

    UserDefinedFieldsService
      .fetchAll({ defineable_id: defineableId, defineable_type: defineableType })
      .then(({ data }) => setFields(data.user_defined_fields))
      .finally(() => setLoading(false));
  }, [defineableId, defineableId]);

  return {
    loading,
    userDefinedColumns
  };
};

export default useUserDefinedColumns;
