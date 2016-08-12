# Cue - Hapi Starter

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [IDE Configuration](#ide-configuration)
- [Service's Environment-Based Configuration](#services-environment-based-configuration)

<!-- /TOC -->

## Overview

This project acts as a baseline scaffold for Cue services based on Node.js & Hapi. The project should be used as a guideline in implementation of new services. In the project you will find examples of:
  - Configuration documents (`./server/configuration/*.js`)
  - RESTful API interface (`./server/api/index.js`)
  - Schema validation (`./server/validation/**/*.js`)
  - Testing w/ 100% code coverage (`./test/**/*.js`)
  - Automated API documentation
  - Server-Side Caching (`./server/api/index.js` - see `cache` constant and its use)

This project is made up of a few key packages listed below; it is worth taking time to read their individual READMEs:
  - [Hapi](https://www.npmjs.com/package/hapi) - HTTP framework
  - [Joi](https://www.npmjs.com/package/joi) - Schema
  - [Confidence](https://www.npmjs.com/package/confidence) - Configuration
  - [Glue](https://www.npmjs.com/package/glue) - Hapi composer
  - [Lab](https://www.npmjs.com/package/lab) - Testing
  - [nsp](https://www.npmjs.com/package/nsp) - Dependency vulnerability scan
  - [Code](https://www.npmjs.com/package/code) - Assertion
  - [ESLint](https://www.npmjs.com/package/eslint) - Linter
  - [Catbox](https://www.npmjs.com/package/catbox) - Server-Side Caching

This project should and will continue to be updated as the project moves along. Should you see something of value to add back to this project, please follow the branch and pull request process. Keep in mind, new code must come with tests to cover the feature.

## Getting Started

After cloning the project, `cd` to the root of the project.

Install dependencies:

```
npm install
```

Start application:

```
npm start
```

Note there are other useful scripts, you can see a list of these with `npm run`.

## Testing

The shortcut to run the test suite is:

```
npm test
```

This will not only run `lab`, executing all tests in the `./test` folder, it will also run `eslint` against the project. Along with executing tests and static code analysis, lab will also check the level of code coverage; reporting missed code. Any issues will be reported in your terminal.

**Note:** You can generate a HTML document report also with `npm run test-cov`.

Each service is expected to have +95% code coverage, and will not be published to production unless all tests are passing. Any new bugs found should first be replicated with a new test before being fixed. Approach everything with TDD.

## IDE Configuration

**[EditorConfig](http://editorconfig.org/)** - To make it easier to comply with the style guide standards we have added [EditorConfig](http://editorconfig.org/) to this project. EditorConfig has plugins for all popular IDEs that will automatically configure your IDE settings as necessary for this project - for example, 2 spaces rather than tab indents.

**[ESLint](http://eslint.org/)** - As we will be using ESlint it is highly recommended to add a plugin, if not already, to your IDE for giving you real-time feedback on code issues. ESlint has plugins for all popular IDEs. This will greatly reduce time spent going back and styling code and fixing errors after the fact.

Both of these have plugins available for all popular IDEs, please be sure to add a plugin to your IDE.

## Service's Environment-Based Configuration

The configuration documents for the service are created using the [confidence](https://www.npmjs.com/package/confidence) library. This allows us to set [`$filter`](https://www.npmjs.com/package/confidence#filters) values which are based on the `NODE_ENV` environment variable. It is recommended new developers take some time to read the confidence documentation to get an understanding of this.

Now, based on the `NODE_ENV` we apply different configuration values for the service. For example, in order to connect to Redis the service needs to know a connection string for that instance of Redis. When `NODE_ENV` is `undefined` the configuration will use the `$default` value, which will attempt to connect to a local (`127.0.0.1:6379`) Redis server. However, in a hosted environment where a `NODE_ENV` variable is set and matches one of the options in the document, such as staging (`stage`), it will look for the `REDIS_URL` environment variable.

**Note:** This example, brings up an important point. We are careful to avoid storage of sensitive information in the configuration documents, we use environment variables for this purpose. For exmaple, we do not store things like: database credentials, cache credentials, tokens, keys, certificates, etc.

This format of configuration allows for clean manipulation of the service's state with little developer involvement.
