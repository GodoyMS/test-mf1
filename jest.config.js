module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  testMatch: ['**/test/**/*.test.(ts|tsx|js)'],

  moduleDirectories: ['node_modules', '<rootDir>/src'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],

  rootDir: './',
};
