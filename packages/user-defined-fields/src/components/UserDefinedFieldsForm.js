// @flow

import { DatePicker, FuzzyDate } from '@performant-software/semantic-components';
import { FuzzyDateTransform, RichTextArea } from '@performant-software/shared-components';
import React, {
  useCallback,
  useEffect,
  useState,
  type ComponentType
} from 'react';
import { Form } from 'semantic-ui-react';
import _ from 'underscore';
import { DataTypes } from '../constants/DataTypes';
import UserDefinedFieldsService from '../services/UserDefinedFields';

type Props = {
  data: any,
  defineableId?: number,
  defineableType?: string,
  fields?: Array,
  isError: (key: string) => boolean,
  onChange: (obj: any) => void,
  onClearValidationError: (...keys: Array<string>) => void,
  required?: boolean,
  tableName?: string
};

const UserDefinedFieldsForm: ComponentType<any> = (props: Props) => {
  const [fields, setFields] = useState(props.fields || []);

  /**
   * Returns the key for the passed field.
   *
   * @type {function(*): string}
   */
  const getFieldKey = useCallback((field) => `user_defined[${field.uuid}]`, []);

  /**
   * Returns true if an error exists on the state for the passed field.
   *
   * @type {function(*): *}
   */
  const isError = useCallback((field) => props.isError(getFieldKey(field)), [getFieldKey, props.isError]);

  /**
   * Changes the value for the passed item.
   *
   * @type {(function(*, *): void)|*}
   */
  const onChange = useCallback((field, value) => {
    props.onChange({ ...props.data, [field.uuid]: value });

    // Clear the validation error if one exists
    if (props.onClearValidationError) {
      props.onClearValidationError(getFieldKey(field));
    }
  }, [getFieldKey, props.data, props.onChange, props.onClearValidationError]);

  /**
   * Renders the passed item.
   *
   * @type {function(*): *}
   */
  const renderItem = useCallback((field, index) => {
    let rendered;

    const fieldValue = props.data && props.data[field.uuid];

    if (field.data_type === DataTypes.string) {
      rendered = (
        <Form.Input
          error={isError(field)}
          key={index}
          label={field.column_name}
          required={field.required}
          onChange={(e, { value }) => onChange(field, value)}
          value={fieldValue || ''}
        />
      );
    }

    if (field.data_type === DataTypes.number) {
      rendered = (
        <Form.Input
          error={isError(field)}
          key={index}
          label={field.column_name}
          required={field.required}
          onChange={(e, { value }) => onChange(field, value)}
          value={fieldValue || 0}
          type='number'
        />
      );
    }

    if (field.data_type === DataTypes.select) {
      rendered = (
        <Form.Dropdown
          clearable
          error={isError(field)}
          key={index}
          label={field.column_name}
          multiple={field.allow_multiple}
          required={field.required}
          options={_.map(field.options, (option) => ({ key: option, value: option, text: option }))}
          onChange={(e, { value }) => onChange(field, value)}
          selectOnBlur={false}
          selection
          value={field.allow_multiple
            ? (fieldValue || [])
            : (fieldValue || '')}
        />
      );
    }

    if (field.data_type === DataTypes.text) {
      rendered = (
        <Form.TextArea
          error={isError(field)}
          key={index}
          label={field.column_name}
          required={field.required}
          onChange={(e, { value }) => onChange(field, value)}
          value={fieldValue || ''}
        />
      );
    }

    if (field.data_type === DataTypes.date) {
      rendered = (
        <Form.Input
          error={isError(field)}
          key={index}
          label={field.column_name}
          required={field.required}
        >
          <DatePicker
            onChange={(date) => onChange(field, date && date.toISOString())}
            value={fieldValue && new Date(fieldValue)}
          />
        </Form.Input>
      );
    }

    if (field.data_type === DataTypes.fuzzyDate) {
      rendered = (
        <Form.Input
          error={isError(field)}
          key={index}
          label={field.column_name}
          required={field.required}
        >
          <FuzzyDate
            centered={false}
            date={FuzzyDateTransform.toFuzzyDate(fieldValue) || {}}
            onChange={(date) => onChange(field, FuzzyDateTransform.toData(date))}
            title={field.column_name}
          />
        </Form.Input>
      );
    }

    if (field.data_type === DataTypes.boolean) {
      rendered = (
        <Form.Checkbox
          checked={!!fieldValue}
          error={isError(field)}
          key={index}
          label={field.column_name}
          onChange={(e, { checked }) => onChange(field, checked)}
        />
      );
    }

    if (field.data_type === DataTypes.richText) {
      rendered = (
        <Form.Input
          error={isError(field)}
          key={index}
          label={field.column_name}
          required={field.required}
        >
          <RichTextArea
            onChange={(value) => onChange(field, value)}
            value={fieldValue}
          />
        </Form.Input>
      );
    }

    return rendered;
  }, [props.data, isError, onChange]);

  /**
   * Fetches the user defined fields when the component mounts.
   */
  useEffect(() => {
    // If the fields have been provided as a prop, there is no need to query them here.
    if (props.fields) {
      return;
    }

    const params = {
      defineable_id: props.defineableId,
      defineable_type: props.defineableType,
      per_page: 0,
      required: props.required,
      sort_by: 'order',
      table_name: props.tableName
    };

    UserDefinedFieldsService
      .fetchAll(params)
      .then(({ data }) => setFields(data.user_defined_fields));
  }, []);

  return (
    <>
      { _.map(fields, renderItem.bind(this)) }
    </>
  );
};

export default UserDefinedFieldsForm;
