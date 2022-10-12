// @flow

import React, { useCallback, useEffect, useMemo } from 'react';
import _ from 'underscore';
import CreatorField from './CreatorField';

type Props = {
  creatorTypes: Array<any>,
  onChange: (creators: Array<any>) => void,
  value: Array<any>
};

const Creators = (props: Props) => {
  /**
   * Sets the default creator type.
   *
   * @type {unknown}
   */
  const defaultCreatorType = useMemo(() => (
    props.creatorTypes && props.creatorTypes.length && props.creatorTypes[0].value
  ), [props.creatorTypes]);

  /**
   * Adds a new creator record with the default type.
   *
   * @type {function(): *}
   */
  const onAddCreator = useCallback(() => props.onChange([
    ...(props.value || []),
    { creatorType: defaultCreatorType }
  ]), [props.onChange, props.value]);

  /**
   * Deletes the creator at the passed index.
   *
   * @type {function(*): *}
   */
  const onDeleteCreator = useCallback((index) => props.onChange(
    _.filter(props.value, (v, i) => i !== index)
  ), [props.onChange, props.value]);

  /**
   * Updates the creator at the passed index.
   *
   * @type {function(*, *): *}
   */
  const onUpdateCreator = useCallback((index, value) => props.onChange(
    _.map(props.value, (v, i) => (i === index ? value : v))
  ), [props.onChange, props.value]);

  /**
   * Updates the creator type on the items if the selected value is not longer valid.
   *
   * @type {(function(*): (*))|*}
   */
  const onUpdateCreatorType = useCallback((item) => {
    const creatorType = _.findWhere(props.creatorTypes, { value: item.creatorType });
    if (creatorType) {
      return item;
    }

    return {
      ...item,
      creatorType: defaultCreatorType
    };
  }, [props.creatorTypes, defaultCreatorType]);

  /**
   * Add the first creator when the component is mounted.
   */
  useEffect(() => {
    onAddCreator();
  }, []);

  /**
   * If the list of creator types changes, reset any invalid creator types to the default value.
   */
  useEffect(() => {
    if (props.value && props.value.length) {
      props.onChange(_.map(props.value, onUpdateCreatorType));
    }
  }, [onUpdateCreatorType, props.creatorTypes]);

  return _.map(props.value, (creator, index) => (
    <CreatorField
      allowDelete={props.value.length > 1}
      creator={creator}
      creatorTypes={props.creatorTypes}
      key={index}
      onAdd={() => onAddCreator()}
      onDelete={() => onDeleteCreator(index)}
      onUpdate={(value) => onUpdateCreator(index, value)}
    />
  ));
};

export default Creators;
