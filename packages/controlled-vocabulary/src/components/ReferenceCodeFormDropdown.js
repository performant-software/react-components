// @flow

import { EditModal } from '@performant-software/semantic-components';
import React, { type ComponentType, useState } from 'react';
import { Form } from 'semantic-ui-react';
import ReferenceCodeDropdown from './ReferenceCodeDropdown';
import ReferenceCodeFormLabel from './ReferenceCodeFormLabel';
import ReferenceTableModal from './ReferenceTableModal';
import ReferenceTablesService from '../services/ReferenceTables';

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
    referenceTable,
    ...rest
  } = props;

  const [modal, setModal] = useState(false);
  const [dropdownKey, setDropdownKey] = useState(0);

  return (
    <>
      <Form.Input
        error={error}
        label={(
          <ReferenceCodeFormLabel
            label={label}
            onClick={() => setModal(true)}
            referenceTable={referenceTable}
          />
        )}
        required={required}
      >
        <ReferenceCodeDropdown
          {...rest}
          id={referenceTable}
          referenceTable={referenceTable}
          key={dropdownKey}
        />
      </Form.Input>
      { modal && (
        <EditModal
          component={ReferenceTableModal}
          item={{ id: referenceTable, key: referenceTable }}
          onClose={() => setModal(false)}
          onInitialize={(key) => (
            ReferenceTablesService
              .fetchByKey(key)
              .then(({ data }) => ({
                ...data.reference_table,
                key
              }))
          )}
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
