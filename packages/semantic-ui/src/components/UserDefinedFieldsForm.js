// @flow

import { RichTextArea, UserDefinedFieldsService } from '@performant-software/shared-components';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ComponentType
} from 'react';
import { Form } from 'semantic-ui-react';
import _ from 'underscore';
import DatePicker from './DatePicker';

type Props = {
  defineableId?: number,
  defineableType?: string,
  isError: (key: string) => boolean,
  item: any,
  onChange: (obj: any) => void,
  onClearValidationError: (...keys: Array<string>) => void
};

const DataTypes = {
  boolean: 'Boolean',
  date: 'Date',
  number: 'Number',
  richText: 'RichText',
  select: 'Select',
  string: 'String',
  text: 'Text'
};

const UserDefinedFieldsForm: ComponentType<any> = (props: Props) => {
  const [fields, setFields] = useState([]);

  /**
   * Sets the parsed value by parsing the JSON stored in the "user_defined" prop of the item.
   *
   * @type {unknown}
   */
  const parsedValue = useMemo(() => {
    let value = {};

    if (_.isString(props.item.user_defined)) {
      value = JSON.parse(props.item.user_defined);
    }

    return value;
  }, [props.item.user_defined]);

  /**
   * Returns the key for the passed field.
   *
   * @type {function(*): string}
   */
  const getFieldKey = useCallback((field) => `user_defined[${field.column_name}]`, []);

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
    props.onChange(JSON.stringify({ ...parsedValue, [field.column_name]: value }));

    // Clear the validation error if one exists
    if (props.onClearValidationError) {
      props.onClearValidationError(getFieldKey(field));
    }
  }, [getFieldKey, parsedValue, props.onChange, props.onClearValidationError]);

  /**
   * Renders the passed item.
   *
   * @type {function(*): *}
   */
  const renderItem = useCallback((field) => {
    let rendered;

    const fieldValue = parsedValue && parsedValue[field.column_name];

    if (field.data_type === DataTypes.string) {
      rendered = (
        <Form.Input
          error={isError(field)}
          label={field.column_name}
          required={field.required}
          onChange={(e, { value }) => onChange(field, value)}
          value={fieldValue}
        />
      );
    }

    if (field.data_type === DataTypes.number) {
      rendered = (
        <Form.Input
          error={isError(field)}
          label={field.column_name}
          required={field.required}
          onChange={(e, { value }) => onChange(field, value)}
          value={fieldValue}
          type='number'
        />
      );
    }

    if (field.data_type === DataTypes.select) {
      rendered = (
        <Form.Dropdown
          clearable
          error={isError(field)}
          label={field.column_name}
          multiple={field.allow_multiple}
          required={field.required}
          options={_.map(field.options, (option) => ({ key: option, value: option, text: option }))}
          onChange={(e, { value }) => onChange(field, value)}
          selectOnBlur={false}
          selection
          value={fieldValue}
        />
      );
    }

    if (field.data_type === DataTypes.text) {
      rendered = (
        <Form.TextArea
          error={isError(field)}
          label={field.column_name}
          required={field.required}
          onChange={(e, { value }) => onChange(field, value)}
          value={fieldValue}
        />
      );
    }

    if (field.data_type === DataTypes.date) {
      rendered = (
        <Form.Input
          error={isError(field)}
          label={field.column_name}
          required={field.required}
        >
          <DatePicker
            onChange={(date) => onChange(field, date && date.toString())}
            value={fieldValue && new Date(fieldValue)}
          />
        </Form.Input>
      );
    }

    if (field.data_type === DataTypes.boolean) {
      rendered = (
        <Form.Checkbox
          checked={!!fieldValue}
          error={isError(field)}
          label={field.column_name}
          onChange={(e, { checked }) => onChange(field, checked)}
        />
      );
    }

    if (field.data_type === DataTypes.richText) {
      rendered = (
        <Form.Input
          error={isError(field)}
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
  }, [parsedValue, isError, onChange]);

  /**
   * Fetches the user defined fields when the component mounts.
   */
  useEffect(() => {
    const params = {
      defineable_id: props.defineableId,
      defineable_type: props.defineableType
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
