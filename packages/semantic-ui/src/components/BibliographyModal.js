// @flow

import type { EditContainerProps } from '@performant-software/shared-components/types';
import React, { useCallback, useEffect, useState } from 'react';
import { Form, Modal } from 'semantic-ui-react';
import _ from 'underscore';
import BibliographyUtils from '../utils/Bibliography';
import Creators from './Creators';
import i18n from '../i18n/i18n';

type Props = EditContainerProps & {
  item: any
};

// Field constants
const FIELD_ABSTRACT_NOTE = 'abstractNote';
const FIELD_CREATORS = 'creators';
const FIELD_EXTRA = 'extra';
const FIELD_ITEM_TYPE = 'itemType';

const BibliographyModal = (props: Props) => {
  const [creators, setCreators] = useState([]);
  const [fields, setFields] = useState([]);

  /**
   * Renders the input element for the passed field.
   *
   * @type {(function(*): *)|*}
   */
  const renderField = useCallback((field) => {
    if (field.key === FIELD_ITEM_TYPE) {
      return (
        <Form.Dropdown
          disabled={field.readonly}
          key={field.key}
          label={field.label}
          onChange={props.onTextInputChange.bind(this, field.key)}
          options={_.map(field.options, (option) => ({
            key: option.value,
            value: option.value,
            text: option.label
          }))}
          selectOnBlur={false}
          selection
          value={props.item[field.key]}
        />
      );
    }

    if (field.key === FIELD_CREATORS) {
      return (
        <Creators
          creatorTypes={creators}
          key={field.key}
          onChange={(value) => props.onSetState({ [field.key]: value })}
          value={props.item[field.key]}
        />
      );
    }

    if (field.key === FIELD_ABSTRACT_NOTE || field.key === FIELD_EXTRA) {
      return (
        <Form.TextArea
          disabled={field.readonly}
          key={field.key}
          label={field.label}
          onChange={props.onTextInputChange.bind(this, field.key)}
          value={props.item[field.key]}
        />
      );
    }

    return (
      <Form.Input
        disabled={field.readonly}
        key={field.key}
        label={field.label}
        onChange={props.onTextInputChange.bind(this, field.key)}
        value={props.item[field.key]}
      />
    );
  }, [creators, props.item]);

  /**
   * Load the metadata for the selected item type.
   */
  useEffect(() => {
    BibliographyUtils
      .getItemTypeMeta(props.item.itemType)
      .then((data) => {
        const itemTypes = _.map(data.itemTypes, (it) => ({
          value: it.itemType,
          label: it.localized
        }));

        const itemTypeCreatorTypes = _.map(data.itemTypeCreatorTypes, (ct) => ({
          value: ct.creatorType,
          label: ct.localized
        }));

        setCreators(itemTypeCreatorTypes);

        const bibliographyData = BibliographyUtils.getFieldsAndItem(props.item, data.itemTypeFields, itemTypes);
        setFields(bibliographyData.fields);
      });
  }, [props.item.itemType]);

  return (
    <Modal
      as={Form}
      centered={false}
      open
    >
      <Modal.Header
        content={i18n.t('BibliographyModal.title')}
      />
      <Modal.Content>
        { _.map(fields, renderField) }
      </Modal.Content>
      { props.children }
    </Modal>
  );
};

export default BibliographyModal;
