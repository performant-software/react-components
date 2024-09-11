// @flow

import { BooleanIcon } from '@performant-software/semantic-components';
import { Date as DateUtils, FuzzyDate as FuzzyDateUtils } from '@performant-software/shared-components';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import _ from 'underscore';
import { DataTypes } from '../constants/DataTypes';
import UserDefinedFieldsService from '../services/UserDefinedFields';

/**
 * Returns the loading state and list of user defined columns for the passed defineable ID and defineable type.
 *
 * @param defineableId
 * @param defineableType
 * @param options
 *
 * @returns {{userDefinedColumns: [], loading: boolean}}
 */
const useUserDefinedColumns = (defineableId, defineableType, options = {}) => {
  const [userDefinedFields, setUserDefinedFields] = useState([]);
  const [loading, setLoading] = useState(false);

  const { sortable = true } = options;

  /**
   * Resolves the user defined field value for the passed item.
   *
   * @type {(function(*, *): (null|*))|*}
   */
  const resolveValue = useCallback((item, field) => {
    let record = item;

    if (options.resolveRecord) {
      record = options.resolveRecord(item);
    }

    if (!record.user_defined) {
      return null;
    }

    return record.user_defined[field.uuid];
  }, [options.resolveRecord]);

  /**
   * Memo-izes the columns.
   *
   * @type {[]}
   */
  const userDefinedColumns = useMemo(() => {
    const columns = [];

    _.each(userDefinedFields, (field) => {
      const column = {
        name: field.uuid,
        label: field.column_name,
        hidden: true,
        sortable
      };

      if (field.data_type === DataTypes.boolean) {
        columns.push({
          ...column,
          render: (item) => (
            <BooleanIcon
              value={resolveValue(item, field)}
            />
          )
        });
      } else if (field.data_type === DataTypes.date) {
        columns.push({
          ...column,
          resolve: (item) => DateUtils.formatDate(resolveValue(item, field))
        });
      } else if (field.data_type === DataTypes.fuzzyDate) {
        columns.push({
          ...column,
          resolve: (item) => FuzzyDateUtils.getDateView(resolveValue(item, field))
        });
      } else if (field.data_type !== DataTypes.richText) {
        columns.push({
          ...column,
          resolve: (item) => resolveValue(item, field)
        });
      }
    });

    return columns;
  }, [resolveValue, userDefinedFields]);

  /**
   * Fetches the user defined fields for the passed defineable ID and defineable type.
   */
  useEffect(() => {
    setLoading(true);

    UserDefinedFieldsService
      .fetchAll({ defineable_id: defineableId, defineable_type: defineableType })
      .then(({ data }) => setUserDefinedFields(data.user_defined_fields))
      .finally(() => setLoading(false));
  }, [defineableId, defineableId]);

  return {
    loading,
    userDefinedColumns,
    userDefinedFields
  };
};

export default useUserDefinedColumns;
