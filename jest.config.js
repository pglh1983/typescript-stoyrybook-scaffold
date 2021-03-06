const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths,
    { prefix: '<rootDir>/src/' }
  ),
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // transform: {
  //   '\\.ts$': 'ts-jest',
  //   '\\.tsx$': 'ts-jest',
  // }
};
