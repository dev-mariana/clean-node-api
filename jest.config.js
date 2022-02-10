module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  testEnvironment: "jest-environment-node",
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};