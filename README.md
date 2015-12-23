# Cue - Hapi Starter

This project acts as a baseline scaffold for Cue services based on Node.js & Hapi. The project should be used as a guideline in implementation of new services. In the project you will find examples of:
  - Configuration documents (`./server/configuration/*.js`)
  - RESTful interface (`./server/api/index.js`)
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

This will not only run `lab`, executing all tests in the `./test` folder, it will also run `eslint` against the project. Along with executing tests and linting the code, lab will also check the level of code coverage; reporting missing lines. Any issues will be reported in your terminal.

**Note:** You can generate a HTML document report also, see `npm run` for command.

Each service is expected to have +90% code coverage, and will not be published to production unless all tests are passing. Any new bugs found should first be replicated with a new test before being fixed. Approach everything with a TDD mentality.

## IDE Configuration

**[EditorConfig](http://editorconfig.org/)** - To make it easier to comply with the style guide standards we have added [EditorConfig](http://editorconfig.org/) to this project. EditorConfig has plugins for all popular IDEs that will automatically configure your IDE settings as necessary for this project - for example, 2 spaces rather than tab indents.

**[ESLint](http://eslint.org/)** - As we will be using ESlint it is highly recommended to add a plugin, if not already, to your IDE for giving you real-time feedback on code issues. ESlint has plugins for all popular IDEs. This will greatly reduce time spent going back and styling code and fixing errors after the fact.

Both of these have plugins available for all popular IDEs, please be sure to add a plugin to your IDE.
