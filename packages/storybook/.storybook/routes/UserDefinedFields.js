// @flow

const addRoutes = (router) => {
  router.get('/user_defined_fields/data_types', (request, response) => {
    response.send({
      data_types: [
        'Boolean',
        'Date',
        'Number',
        'RichText',
        'Select',
        'String',
        'Text'
      ]
    });

    response.end();
  });

  router.get('/user_defined_fields/tables', (request, response) => {
    response.send({
      tables: [
        'People',
        'Places',
        'Sources',
        'Media'
      ]
    });

    response.end();
  });

  router.get('/user_defined_fields/user_defined_fields', (request, response) => {
    const fields = [{
      uuid: '1a82328e-3642-4fc6-9045-f42f48e3a415',
      table_name: 'People',
      column_name: 'First name',
      data_type: 'String',
      required: true,
      order: 10
    }, {
      uuid: 'b1956bf4-625f-4ce9-aa44-6c7ef621d7e6',
      table_name: 'People',
      column_name: 'Last name',
      data_type: 'String',
      required: true,
      order: 20
    }, {
      uuid: 'e399563e-46cb-4c28-a717-6d98823abfc5',
      table_name: 'People',
      column_name: 'Date of birth',
      data_type: 'Date',
      order: 30
    }, {
      uuid: '3aefc504-737d-4771-806c-e55ce84ef4fe',
      table_name: 'People',
      column_name: 'Biography',
      data_type: 'RichText',
      order: 40
    }, {
      uuid: '378091ba-f053-48a4-905c-cc8337992db7',
      table_name: 'People',
      column_name: 'Favorite color',
      data_type: 'Select',
      order: 50,
      options: ['Red', 'Blue', 'Green', 'Orange', 'Yellow']
    }, {
      uuid: 'dd83405b-0b5b-4a11-9f51-5fd744fc316d',
      table_name: 'People',
      column_name: 'Year of service',
      data_type: 'Number',
      order: 60
    }, {
      uuid: '4c1557ae-1321-4a58-9096-7cfd2accf394',
      table_name: 'People',
      column_name: 'Fuzzy Date',
      data_type: 'FuzzyDate',
      order: 70
    }];

    response.send({
      list: {
        count: fields.length,
        page: 1,
        pages: 1
      },
      user_defined_fields: fields
    });

    response.end();
  });
};

export default {
  addRoutes
};
