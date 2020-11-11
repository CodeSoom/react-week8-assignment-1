module.exports = {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^presentational/(.*)': '<rootDir>/src/presentational/$1',
    '^container/(.*)': '<rootDir>/src/container/$1',
    '^_redux/(.*)': '<rootDir>/src/redux/$1',
    '^utils': '<rootDir>/src/utils.js',
    '^services/(.*)': '<rootDir>/src/services/$1',
  },
};
