// @flow

import { ReferenceTablesService } from '@performant-software/shared-components';
import React, { type ComponentType, useEffect, useState } from 'react';
import { Form } from 'semantic-ui-react';
import EditModal from './EditModal';
import ReferenceCodeDropdown from './ReferenceCodeDropdown';
import ReferenceCodeFormLabel from './ReferenceCodeFormLabel';
import ReferenceTableModal from './ReferenceTableModal';

type Props = {
  error?: boolean,
  label?: string,
  required?: boolean,
  referenceTable: string
};

const ReferenceCodeFormDropdown: ComponentType<any> = (props: Props) => {
  const {
    error,
    label,
    required,
    referenceTable: key,
    ...rest
  } = props;

  const [modal, setModal] = useState(false);
  const [dropdownKey, setDropdownKey] = useState(0);
  const [referenceTable, setReferenceTable] = useState({ key });

  /**
   * Looks up the existing reference table base on the passed key.
   */
  useEffect(() => (
    ReferenceTablesService
      .fetchByKey(key)
      .then(({ data }) => setReferenceTable((prevTable) => ({
        ...prevTable,
        ...data.reference_table
      })))
  ), [key]);

  return (
    <>
      <Form.Input
        error={error}
        label={(
          <ReferenceCodeFormLabel
            label={label}
            onClick={() => setModal(true)}
            referenceTable={referenceTable.key}
          />
        )}
        required={required}
      >
        <ReferenceCodeDropdown
          {...rest}
          id={referenceTable}
          referenceTable={referenceTable.key}
          key={dropdownKey}
        />
      </Form.Input>
      { modal && (
        <EditModal
          component={ReferenceTableModal}
          item={referenceTable}
          onClose={() => setModal(false)}
          onSave={(record) => (
            ReferenceTablesService
              .save(record)
              .then(({ data }) => data.reference_table)
              .then(() => setDropdownKey((prevKey) => prevKey + 1))
              .finally(() => setModal(false))
          )}
        />
      )}
    </>
  );
};

export default ReferenceCodeFormDropdown;
