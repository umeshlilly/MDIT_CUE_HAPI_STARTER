'use strict';

const Confidence = require('confidence');
const Config = require('./');

/**
 * Criteria is passed to the document and can be used to select the correct
 * value from the options. See: https://github.com/hapijs/confidence#filters
 * @type {Object}
 */
const criteria = {
  env: process.env.NODE_ENV
};

/**
 * The manifest document is passed directly to the Glue module and is
 * the contract by which the server is built.
 * @type {Object}
 */
const manifest = {
  $meta: 'This document contains server level configuration.',
  server: {
    debug: {
      request: ['error']
    },
    connections: {
      routes: {
        security: true
      }
    },
    cache: [
      {
        name: 'memoryCache',
        engine: require('catbox-memory')
      }
    ]
  },
  connections: [{
    port: Config.get('/port/web'),
    labels: ['web']
  }],
  plugins: {
    'good': {
      opsInterval: 60000,
      reporters: [{
        reporter: require('good-console'),
        events: {
          log: {
            $filter: 'env',
            production: 'error',
            test: 'error',
            $default: '*'
          },
          response: {
            $filter: 'env',
            production: 'error',
            test: 'error',
            $default: '*'
          },
          request: {
            $filter: 'env',
            production: 'error',
            test: 'error',
            $default: '*'
          },
          ops: '*'
        }
      }]
    },
    'lout': {},
    'inert': {},
    'vision': {},
    './server/method/get': {},
    './server/api/': {}
  }
};


const store = new Confidence.Store(manifest);


exports.get = function(key) {

  return store.get(key, criteria);
};


exports.meta = function(key) {

  return store.meta(key, criteria);
};
