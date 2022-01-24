// Make the tests fail when there are warnings about prop types with react-testing-library
// This dep is in the root of the monorepo, keep the linter happy
const failOnConsole = require('jest-fail-on-console')

failOnConsole()
