// @flow

import { ListTable } from '@performant-software/semantic-components';
import React from 'react';
import ReferenceTableModal from './ReferenceTableModal';
import ReferenceTablesService from '../services/ReferenceTables';

const ReferenceTablesList = () => (
  <ListTable
    actions={[{
      name: 'edit'
    }, {
      name: 'copy'
    }, {
      name: 'delete'
    }]}
    collectionName='reference_tables'
    columns={[{
      name: 'name',
      label: 'Name',
      sortable: true
    }, {
      name: 'key',
      label: 'Key',
      sortable: true
    }]}
    modal={{
      component: ReferenceTableModal,
      props: {
        onInitialize: (id) => (
          ReferenceTablesService
            .fetchOne(id)
            .then(({ data }) => data.reference_table)
        ),
        required: ['name', 'key']
      }
    }}
    onDelete={(referenceTable) => ReferenceTablesService.delete(referenceTable)}
    onLoad={(params) => ReferenceTablesService.fetchAll(params)}
    onSave={(referenceTable) => ReferenceTablesService.save(referenceTable)}
  />
);

export default ReferenceTablesList;
