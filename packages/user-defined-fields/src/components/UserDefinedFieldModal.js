// @flow

import React, {
  useCallback,
  useEffect,
  useState,
  type ComponentType
} from 'react';
import { Form, Modal } from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import UserDefinedFieldOptions from './UserDefinedFieldOptions';
import UserDefinedFieldsService from '../services/UserDefinedFields';

const DataTypes = {
  select: 'Select'
};

const UserDefinedFieldModal: ComponentType<any> = (props) => {
  const [dataTypeOptions, setDataTypeOptions] = useState([]);
  const [tableOptions, setTableOptions] = useState([]);

  /**
   * Transforms the passed array of items into a Semantic UI option object.
   *
   * @type {function(*): *}
   */
  const transformOptions = useCallback((items) => (
    _.map(items, (item) => ({ key: item, value: item, text: item }))
  ), []);

  /**
   * Fetch the available tables and data types.
   */
  useEffect(() => {
    UserDefinedFieldsService
      .fetchTables()
      .then(({ data }) => setTableOptions(transformOptions(data.tables)));

    UserDefinedFieldsService
      .fetchDataTypes()
      .then(({ data }) => setDataTypeOptions(transformOptions(data.data_types)));
  }, []);

  return (
    <Modal
      as={Form}
      centered={false}
      open
    >
      <Modal.Header
        content={props.item.id
          ? i18n.t('UserDefinedFieldModal.title.edit')
          : i18n.t('UserDefinedFieldModal.title.add')}
      />
      <Modal.Content>
        <Form.Dropdown
          clearable
          error={props.isError('table_name')}
          label={i18n.t('UserDefinedFieldModal.labels.table')}
          onChange={props.onTextInputChange.bind(this, 'table_name')}
          options={tableOptions}
          required={props.isRequired('table_name')}
          selection
          selectOnBlur={false}
          value={props.item.table_name || ''}
        />
        <Form.Input
          error={props.isError('column_name')}
          label={i18n.t('UserDefinedFieldModal.labels.name')}
          onChange={props.onTextInputChange.bind(this, 'column_name')}
          required={props.isRequired('column_name')}
          value={props.item.column_name || ''}
        />
        <Form.Dropdown
          clearable
          error={props.isError('data_type')}
          label={i18n.t('UserDefinedFieldModal.labels.dataType')}
          onChange={props.onTextInputChange.bind(this, 'data_type')}
          options={dataTypeOptions}
          required={props.isRequired('data_type')}
          selection
          selectOnBlur={false}
          value={props.item.data_type || ''}
        />
        <Form.Input
          error={props.isError('order')}
          label={i18n.t('UserDefinedFieldModal.labels.order')}
          onChange={props.onTextInputChange.bind(this, 'order')}
          required={props.isRequired('oder')}
          value={props.item.order || 0}
          type='number'
        />
        <Form.Group>
          <Form.Checkbox
            error={props.isError('required')}
            checked={props.item.required}
            label={i18n.t('UserDefinedFieldModal.labels.required')}
            onChange={props.onCheckboxInputChange.bind(this, 'required')}
          />
          <Form.Checkbox
            error={props.isError('searchable')}
            checked={props.item.searchable}
            label={i18n.t('UserDefinedFieldModal.labels.searchable')}
            onChange={props.onCheckboxInputChange.bind(this, 'searchable')}
          />
          { props.item.data_type === DataTypes.select && (
            <Form.Checkbox
              error={props.isError('allow_multiple')}
              checked={props.item.allow_multiple}
              label={i18n.t('UserDefinedFieldModal.labels.allowMultiple')}
              onChange={props.onCheckboxInputChange.bind(this, 'allow_multiple')}
            />
          )}
        </Form.Group>
        { props.item.data_type === DataTypes.select && (
          <UserDefinedFieldOptions
            options={props.item.options}
            onChange={(options) => props.onSetState({ options })}
          />
        )}
      </Modal.Content>
      { props.children }
    </Modal>
  );
};

export default UserDefinedFieldModal;
