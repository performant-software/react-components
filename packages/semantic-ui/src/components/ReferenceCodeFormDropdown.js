// @flow

import { ReferenceTablesService } from '@performant-software/shared-components';
import React, { type ComponentType, useState } from 'react';
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
  const [modal, setModal] = useState(false);
  const [key, setKey] = useState(0);

  const {
    error,
    label,
    required,
    referenceTable,
    ...rest
  } = props;

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
          key={key}
        />
      </Form.Input>
      { modal && (
        <EditModal
          component={ReferenceTableModal}
          item={{ id: referenceTable }}
          onClose={() => setModal(false)}
          onInitialize={(id) => (
            ReferenceTablesService
              .fetchOne(id)
              .then(({ data }) => data.reference_table)
          )}
          onSave={(record) => (
            ReferenceTablesService
              .save(record)
              .then(({ data }) => data.reference_table)
              .then(() => setKey((prevKey) => prevKey + 1))
              .finally(() => setModal(false))
          )}
        />
      )}
    </>
  );
};

export default ReferenceCodeFormDropdown;
