import type {JestConfigWithTsJest} from 'ts-jest';
import {pathsToModuleNameMapper} from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '~': ['src'],
      '~/*': ['src/*'],
    },
    {
      prefix: '<rootDir>/',
      useESM: true,
    }
  ),
};

export default config;
