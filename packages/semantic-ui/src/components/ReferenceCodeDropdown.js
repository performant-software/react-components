// @flow

import { ReferenceCodesService } from '@performant-software/shared-components';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';
import { Dropdown } from 'semantic-ui-react';
import _ from 'underscore';

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
   * Sets the "value" variable for the Dropdown component.
   */
  const value = useMemo(() => {
    const v = _.pluck(_.filter(props.value, (x) => !x._destroy), 'reference_code_id');
    return props.multiple ? v : _.first(v);
  }, [props.multiple, props.value]);

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
  const onChange = useCallback((e, data) => {
    let referenceCodeIds;

    if (props.multiple) {
      referenceCodeIds = data.value;
    } else {
      referenceCodeIds = _.compact([data.value]);
    }

    const items = [];

    // Find existing records or create new records
    _.each(referenceCodeIds, (referenceCodeId) => {
      let newValue = _.findWhere(props.value, { reference_code_id: referenceCodeId });

      if (!newValue) {
        newValue = toItem(referenceCodeId);
      }

      items.push(_.omit(newValue, '_destroy'));
    });

    // Mark records for delete
    _.each(props.value, (v) => {
      if (v.id && !_.contains(referenceCodeIds, v.reference_code_id)) {
        items.push({ ...v, _destroy: true });
      }
    });

    props.onChange(items);
  }, [toItem, props.multiple, props.onChange, props.value]);

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
