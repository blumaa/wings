/** @type {import('jest').Config} */
export default {
  transform: {
    "\\.js?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(lit|@lit|@lit-labs/ssr-dom-shim|@open-wc|redux-saga-test-plan))",
  ],
  testMatch: ["**/test/**/**.test.js"],
  moduleFileExtensions: ["js"],
  verbose: true,
  testEnvironment: "jsdom",
};
