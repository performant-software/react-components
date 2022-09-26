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
      table_name: 'People',
      column_name: 'First name',
      data_type: 'String',
      required: true
    }, {
      table_name: 'People',
      column_name: 'Last name',
      data_type: 'String',
      required: true
    }, {
      table_name: 'People',
      column_name: 'Date of birth',
      data_type: 'Date'
    }, {
      table_name: 'People',
      column_name: 'Biography',
      data_type: 'RichText'
    }, {
      table_name: 'People',
      column_name: 'Favorite color',
      data_type: 'Select',
      options: ['Red', 'Blue', 'Green', 'Orange', 'Yellow']
    }, {
      table_name: 'People',
      column_name: 'Year of service',
      data_type: 'Number'
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

module.exports = {
  addRoutes
};
