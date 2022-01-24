# Tests for jest-fail-on-console

This repo provides 2 test environment for [jest-fail-on-console](https://github.com/ricardo-ch/jest-fail-on-console) for [issue #10](https://github.com/ricardo-ch/jest-fail-on-console/issues/10)

1. [`2.0.4`](./2.0.4) contains tests for v2.0.4
1. [`2.1.1`](./2.1.1) contains tests for v2.1.1

Each repo contains 2 test files:

1. `should-fail.test.js` writes to `console.error` and should therefore fail.
1. `should-fail-and-resets.tests.js` writes to `console.error` but also resets all mocks in a `beforeEach` block and should also fail.

Each repo contains 3 npm run scripts:

1. `test` configures jest with `jest-fail-on-console` and runs all tests, both test suites should fail. **Only 1 test suite fails in `v2.1.1` indicating the problem, `v2.0.4` all tests fail.**
1. `test-restore` configures jest with `jest-fail-on-console` _and_ `restoreMocks` and runs all tests, both test suites should fail. **Only 1 test suite fails in `v2.1.1` indicating the problem, `v2.0.4` all tests fail.**
1. `test-reset` configures jest with `jest-fail-on-console` _and_ `resetMocks` and runs all tests, both test suites should fail. **Only 1 test suite fails in `v2.1.1` indicating the problem, `v2.0.4` all tests fail.**
