// @flow

const addRoutes = (router) => {
  router.get('/user_defined_fields/data_types', (request, response) => {
    response.send({
      data_types: [
        'Boolean',
        'Date',
        'Number',
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
    const fields = [];

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
