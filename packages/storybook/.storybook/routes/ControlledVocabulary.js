// @flow

const addRoutes = (router) => {
  const codes = [{
    id: 1,
    reference_table_id: 1,
    name: 'Boston, MA'
  }, {
    id: 2,
    reference_table_id: 1,
    name: 'New York, NY'
  }, {
    id: 3,
    reference_table_id: 1,
    name: 'Los Angeles, CA'
  }];

  router.get('/controlled_vocabulary/reference_codes', (request, response) => {
    response.send({
      list: {
        count: codes.length,
        page: 1,
        pages: 1
      },
      reference_codes: codes
    });

    response.end();
  });

  router.get('/controlled_vocabulary/reference_tables/:id', (request, response) => {
    response.send({
      reference_table: {
        id: 1,
        name: 'Locations',
        key: 'locations',
        reference_codes: codes
      }
    })

    response.end();
  });

  router.put('/controlled_vocabulary/reference_tables/:id', (request, response) => {
    response.end();
  });
};

export default {
  addRoutes
};
