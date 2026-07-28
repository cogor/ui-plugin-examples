module.exports = {
  env: {
    test: {
      plugins: [
        [
          'module-resolver',
          {
            root:  ['.'],
            alias: {
              '@': '.',
              '~': '.',
            },
          },
        ],
        'babel-plugin-transform-require-context',
      ],
    },
  },
};
