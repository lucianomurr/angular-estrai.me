/* eslint-disable */
export default {
  displayName: 'estrai.me',
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/estrai.me',
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  extensionsToTreatAsEsm: ['.ts'],
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  globals: {},
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
        useESM: true,
      },
    ],
  },

  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  transformIgnorePatterns: [
    `node_modules/(?!@angular|@ngneat/spectator|array-move|lodash-es)`,
  ],
};
