module.exports = {
  preset: 'ts-jest',
  roots: [
    "src", "__tests__"
  ],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    "node_modules/(ethereum-cryptography)/.+\\.(j|t)sx?$": "ts-jest",
    "node_modules/@layerzerolabs/.+\\.(j|t)sx?$": "ts-jest"
  },
  transformIgnorePatterns: [ 'node_modules/((?!ethereum-cryptography)/.*)', "node_modules/(?!@layerzerolabs/.*)"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
      useESM: true
    }
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '__tests__/(.*)$': '<rootDir>/__tests__/$1',
  },
  testTimeout: 300_000
};
