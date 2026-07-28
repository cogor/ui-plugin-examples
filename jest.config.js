module.exports = {
  roots:                  ['<rootDir>/pkg'],
  testEnvironment:        'jsdom',
  testEnvironmentOptions: { customExportConditions: ['node', 'node-addons'] },
  watchman:               false,
  moduleFileExtensions:   ['js', 'ts', 'json', 'vue'],
  modulePaths:            ['<rootDir>'],
  moduleNameMapper:       {
    '^~\\/(.*)$':          '<rootDir>/$1',
    '^@\\/(.*)$':          '<rootDir>/$1',
    '@shell\\/(.*)':       '<rootDir>/node_modules/@rancher/shell/$1',
    '@components\\/(.*)':  '<rootDir>/node_modules/@rancher/shell/rancher-components/$1',
    '\\.(jpe?g|png|gif|webp|svg|mp4|webm|wav|mp3|m4a|aac|oga|eot|ttf|woff2?)$': '<rootDir>/utils/svgTransform.js',
  },
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  transform:                {
    '^.+\\.vue$':  '@vue/vue3-jest',
    '^.+\\.tsx?$': ['ts-jest', {
      tsconfig: { sourceMap: true },
      isolatedModules: true,
    }],
    '^.+\\.jsx?$': ['babel-jest', {
      configFile: false,
      presets:    [['@babel/preset-env', { targets: { node: 'current' } }]],
    }],
    '^.+\\.svg$': '<rootDir>/utils/svgTransform.js',
  },
  transformIgnorePatterns: ['/node_modules/(?!@rancher/shell).+\\.js$'],
  testMatch:               ['**/__tests__/**/*.test.ts'],
};
