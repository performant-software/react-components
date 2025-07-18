// @flow

import React, { useCallback, useEffect, useMemo } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import _ from 'underscore';
import i18n from '../i18n/i18n';
import './CreatorField.css';

const NameTypes = {
  single: 0,
  full: 1
};

type Props = {
  allowDelete?: boolean,
  creatorTypes: Array<any>,
  creator: any,
  onAdd: () => void,
  onDelete: () => void,
  onUpdate: (props: any) => void
};

const CreatorField = (props: Props) => {
  /**
   * Updates the passed attribute for the current creator.
   *
   * @type {function(string, ?Event, *): *}
   */
  const onUpdate = useCallback((attribute: string, e: ?Event, { value }: any) => (
    props.onUpdate({ ...props.creator || {}, [attribute]: value })
  ), [props.creator, props.onUpdate]);

  /**
   * Updates the passed attributes for the current creator.
   *
   * @type {function(*): *}
   */
  const onUpdateAttributes = useCallback((attributes) => (
    props.onUpdate({ ...props.creator || {}, ...attributes })
  ), [props.creator, props.onUpdate]);

  /**
   * Sets the label attribute as a dropdown of the passed creatorTypes prop.
   *
   * @type {unknown}
   */
  const label = useMemo(() => (
    <label>
      <Dropdown
        onChange={onUpdate.bind(this, 'creatorType')}
        options={_.map(props.creatorTypes, (ct) => ({
          key: ct.value,
          value: ct.value,
          text: ct.label
        }))}
        value={props.creator.creatorType}
      />
    </label>
  ), [props.creator.creatorType, props.creatorTypes]);

  /**
   * Default the nameType property to full (first name/last name).
   */
  useEffect(() => {
    if (!_.has(props.creator, 'nameType')) {
      onUpdateAttributes({ nameType: NameTypes.full });
    }
  }, [props.creator, onUpdateAttributes]);

  /**
   * Convert between firstName/lastName and name attributes depending on the name type.
   */
  useEffect(() => {
    if (props.creator.name && props.creator.nameType === NameTypes.full) {
      const [firstName, lastName] = props.creator.name.split(' ');
      onUpdateAttributes({ name: null, firstName, lastName });
    } else if ((props.creator.firstName || props.creator.lastName) && props.creator.nameType === NameTypes.single) {
      const name = _.compact([props.creator.firstName, props.creator.lastName]).join(' ');
      onUpdateAttributes({ firstName: null, lastName: null, name });
    }
  }, [props.creator.nameType]);

  return (
    <Form.Group
      className='creator-field'
    >
      { props.creator.nameType === NameTypes.full && (
        <>
          <Form.Input
            className='flex'
            label={label}
            onChange={onUpdate.bind(this, 'firstName')}
            placeholder={i18n.t('CreatorField.labels.firstName')}
            value={props.creator.firstName}
          />
          <Form.Input
            className='flex'
            onChange={onUpdate.bind(this, 'lastName')}
            placeholder={i18n.t('CreatorField.labels.lastName')}
            value={props.creator.lastName}
          />
          <Form.Button
            icon='exchange'
            onClick={() => onUpdateAttributes({ nameType: NameTypes.single })}
          />
        </>
      )}
      { props.creator.nameType === NameTypes.single && (
        <>
          <Form.Input
            className='flex'
            label={label}
            onChange={onUpdate.bind(this, 'name')}
            placeholder={i18n.t('CreatorField.labels.name')}
            value={props.creator.name}
          />
          <Form.Button
            icon='exchange'
            onClick={() => onUpdateAttributes({ nameType: NameTypes.full })}
          />
        </>
      )}
      <Form.Button
        icon='plus'
        onClick={props.onAdd}
      />
      <Form.Button
        disabled={!props.allowDelete}
        icon='minus'
        onClick={props.onDelete}
      />
    </Form.Group>
  );
};

export default CreatorField;
