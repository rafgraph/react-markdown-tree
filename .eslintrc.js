module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: [
    'react',
    'import',
  ],
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^react$'] }], // because React is a peer dependency
  }
};
