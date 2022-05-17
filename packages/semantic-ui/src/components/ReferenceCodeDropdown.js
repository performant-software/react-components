// @flow

import { ReferenceCodesService } from '@performant-software/shared-components';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import _ from 'underscore';
import { Dropdown } from 'semantic-ui-react';

type Item = {
  reference_table_id: number,
  key: string
};

type Props = {
  fluid?: boolean,
  multiple?: boolean,
  onChange: (item: Item) => void,
  placeholder?: string,
  referenceTable: string,
  value: Item | Array<Item>
};

const ReferenceCodeDropdown = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  /**
   * Converts the passed ID to a reference code item.
   *
   * @type {function(*): {reference_code_id: *}}
   */
  const toItem = useCallback((id) => ({
    reference_code_id: id
  }), []);

  /**
   * Converts the passed reference code to a dropdown option.
   *
   * @type {function(*): {text: *, value: *, key: *}}
   */
  const toOption = useCallback((referenceCode) => ({
    key: referenceCode.id,
    value: referenceCode.id,
    text: referenceCode.name
  }), []);

  /**
   * Converts the selected values and calls the onChange prop.
   *
   * @type {(function(*, {value: *}): void)|*}
   */
  const onChange = useCallback((e, { value }) => {
    let values;

    if (props.multiple) {
      values = value;
    } else {
      values = _.compact([value]);
    }

    props.onChange(_.map(values, toItem));
  }, [toItem, props.multiple, props.onChange]);

  /**
   * Sets the "value" variable for the Dropdown component.
   */
  const value = useMemo(() => {
    const v = _.pluck(_.filter(props.value, (x) => !x._destroy), 'reference_code_id');
    return props.multiple ? v : _.first(v);
  }, [props.multiple, props.value]);

  /**
   * Loads the list of reference codes from the server.
   */
  useEffect(() => {
    setLoading(true);

    const params = {
      per_page: 0,
      reference_table: props.referenceTable,
      sort_by: 'name'
    };

    ReferenceCodesService
      .fetchAll(params)
      .then(({ data }) => setOptions(_.map(data.reference_codes, toOption)))
      .finally(() => setLoading(false));
  }, [toOption]);

  return (
    <Dropdown
      clearable
      disabled={loading}
      fluid={props.fluid}
      loading={loading}
      multiple={props.multiple}
      onChange={onChange}
      options={options}
      placeholder={props.placeholder}
      search
      selection
      selectOnBlur={false}
      value={value}
    />
  );
};

ReferenceCodeDropdown.defaultProps = {
  fluid: true,
  multiple: false,
  placeholder: undefined
};

export default ReferenceCodeDropdown;
