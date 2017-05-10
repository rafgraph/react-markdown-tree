module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  plugins: ['flowtype', 'react', 'import', 'prettier'],
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^react$'] }], // because React is a peer dependency
    'prettier/prettier': ['warn', { trailingComma: 'all', singleQuote: true }],
  },
};
