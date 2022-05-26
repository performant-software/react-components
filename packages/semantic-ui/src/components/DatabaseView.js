// @flow

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import axios from 'axios';
import _ from 'underscore';
import ListTable from './ListTable';
import MenuSidebar from './MenuSidebar';

type Props = {
  columnCount?: number,
  title: string,
  url: string
};

const DatabaseView = (props: Props) => {
  const [columns, setColumns] = useState([]);
  const [selectedTable, setSelectedTable] = useState();
  const [tables, setTables] = useState([]);

  const menuRef = useRef();

  const service = useMemo(() => ({
    getColumns: (params) => axios.get(`${props.url}/api/columns`, { params }),
    getData: (params) => axios.post(`${props.url}/api/search`, params),
    getTables: () => axios.get(`${props.url}/api/tables`)
  }), [props.url]);

  const resolveValue = useCallback((column, item) => {
    let value = item[column.column_name];

    const { data_type: dataType } = column;

    if (value) {
      switch (dataType) {
        case 'timestamp without time zone':
          value = new Date(value).toLocaleDateString();
          break;

        default:
        // Value is already set
      }
    }

    return value;
  }, []);

  useEffect(() => {
    if (service) {
      service
        .getTables()
        .then(({ data }) => {
          setTables(data);
          setSelectedTable(_.first(data));
        });
    }
  }, [service]);

  useEffect(() => {
    if (selectedTable) {
      service
        .getColumns({ table_name: selectedTable.table_name })
        .then(({ data }) => setColumns(data));
    }
  }, [selectedTable, service]);

  const test = useMemo(() => _.map(columns, (column, index) => ({
    name: column.column_name,
    label: column.column_name,
    resolve: resolveValue.bind(this, column),
    sortable: true,
    hidden: index > props.columnCount
  })), [columns, resolveValue, props.columnCount]);

  return (
    <div
      className='database-view'
    >
      <MenuSidebar
        contextRef={menuRef}
        header={{
          content: props.title,
          inverted: true
        }}
        inverted
        items={[{
          items: _.map(tables, (table) => ({
            active: selectedTable === table,
            content: table.table_name,
            onClick: () => setSelectedTable(table)
          }))
        }]}
        style={{
          overflow: 'auto',
          width: '250px'
        }}
      />
      <div
        style={{
          marginLeft: '250px'
        }}
      >
        { selectedTable && (
          <ListTable
            collectionName='items'
            columns={test}
            onLoad={(params) => service.getData({ ...params, table_name: selectedTable.table_name })}
            perPageOptions={[10, 25, 50, 100]}
            searchable
          />
        )}
      </div>
    </div>
  );
};

DatabaseView.defaultProps = {
  columnCount: Number.MAX_SAFE_INTEGER
};

export default DatabaseView;
