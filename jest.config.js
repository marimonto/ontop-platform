module.exports = {
/*   moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  }, */
  moduleNameMapper: {
    '^lodash-es$': 'lodash'
  },
  testEnvironment: 'jsdom',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: [
    '<rootDir>/src/**/*.spec.ts',
  ],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/node_modules/**',
    '!**/src/**/*.module.ts',
    '!test/**',
    '!**/polyfills.ts',
    '!**/environments/**',
    '!**/src/setupJest.ts'
  ]
};

