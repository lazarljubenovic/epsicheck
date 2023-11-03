import { JestConfigWithTsJest } from 'ts-jest'

export default {
  preset: 'ts-jest/presets/default-esm',
  resolver: 'ts-jest-resolver',
  testEnvironment: 'node',
} satisfies JestConfigWithTsJest
