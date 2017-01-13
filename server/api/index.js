'use strict';

const Validation = {
  request: require('../validation/request/')
};

exports.register = (server, options, next) => {

  /**
   * GET /
   */
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {

      // This route is simply returning the status of our cache.
      // However, this route would retrieve paginated items and cache
      // those results from the remote endpoint.
      return reply(server.methods.getItem.cache.stats);
    }
  });

  /**
   * POST /
   * Typical CREATE endpoint for RESTful APIs
   */
  server.route({
    method: 'POST',
    path: '/',
    config: {
      validate: {
        payload: Validation.request
      }
    },
    handler: (request, reply) => {

      return reply({});
    }
  });


  /**
   * GET /{Unique_ID}
   * Typical GET endpoint for RESTful APIs
   */
  server.route({
    method: 'GET',
    path: '/{id}',
    handler: (request, reply) => {

      // Get item if in the cache or perform necessary action to retrieve it.
      return server.methods.getItem(request.params.id, (err, result) => {

        if (err) {
          return reply(err);
        }

        return reply(result);
      });
    }
  });


  /**
   * PUT /{Unique_ID}
   * Typical UPDATE endpoint for RESTful APIs
   */
  server.route({
    method: 'PUT',
    path: '/{id}',
    config: {
      validate: {
        payload: Validation.request
      }
    },
    handler: (request, reply) => {

      // @NOTE: Since we are performing an update we'll also want to drop
      // the item from the cache if it has previously been cached!
      server.methods.getItem.cache.drop(request.params.id, (err) => {

        if (err) {
          return reply(err);
        }

        return reply({});
      });
    }
  });


  /**
   * DELETE /{Unique_ID}
   * Typical DELETE endpoint for RESTful APIs
   */
  server.route({
    method: 'DELETE',
    path: '/{id}',
    handler: (request, reply) => {

      return reply({});
    }
  });


  return next();
};


exports.register.attributes = {
  name: 'api-index',
  dependencies: 'method-get'
};
