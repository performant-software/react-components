// @flow

import React, {
  useCallback,
  useEffect,
  useState,
  type ComponentType
} from 'react';
import { Button, Input, Label } from 'semantic-ui-react';
import _ from 'underscore';
import './UserDefinedFieldOptions.css';

type Props = {
  options: Array<string>,
  onChange: (options: Array<string>) => void
};

const UserDefinedFieldOptions: ComponentType<any> = (props: Props) => {
  const [options, setOptions] = useState(_.map(props.options, (option) => ({ value: option })));

  /**
   * Adds a new option to the list.
   *
   * @type {(function(): void)|*}
   */
  const onAddOption = useCallback(() => {
    setOptions((prevOptions) => [...prevOptions, { new: true }]);
  }, []);

  /**
   * Deletes the option at the passed index from the list.
   *
   * @type {(function(*): void)|*}
   */
  const onDeleteOption = useCallback((findIndex) => {
    setOptions((prevOptions) => _.filter(prevOptions, (option, index) => index !== findIndex));
  }, []);

  /**
   * Removes the "new" indicator from the option at the passed index.
   *
   * @type {(function(*): void)|*}
   */
  const onSaveOption = useCallback((findIndex) => {
    setOptions((prevOptions) => _.map(
      prevOptions,
      (option, index) => (findIndex !== index ? option : ({ ...option, new: false }))
    ));
  }, [options]);

  /**
   * Updates the value of the option at the passed index.
   *
   * @type {(function(*, *, {value: *}): void)|*}
   */
  const onUpdateOption = useCallback((findIndex, e, { value }) => {
    setOptions((prevOptions) => _.map(
      prevOptions,
      (option, index) => (index !== findIndex ? option : ({ ...option, value }))
    ));
  }, []);

  /**
   * Calls the onChange prop when the list of options changes.
   */
  useEffect(() => {
    const savedOptions = _.filter(options, (option) => !option.new);
    props.onChange(_.pluck(savedOptions, 'value'));
  }, [options]);

  return (
    <div
      className='user-defined-field-options'
    >
      <Button
        basic
        icon='plus'
        onClick={onAddOption}
        type='button'
      />
      { _.map(options, (option, index) => (
        <>
          { option.new && (
            <Label>
              <Input
                autoFocus
                onChange={onUpdateOption.bind(this, index)}
                value={option.value}
              />
              <Button
                basic
                color='green'
                icon='checkmark'
                onClick={onSaveOption.bind(this, index)}
                type='button'
                size='tiny'
              />
            </Label>
          )}
          { !option.new && (
            <Label
              content={option.value}
              onRemove={onDeleteOption.bind(this, index)}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default UserDefinedFieldOptions;
