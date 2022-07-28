module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'detox'],
  rules: {
    'arrow-parens': 0,
    'react/jsx-filename-extension': 'off',
    'import/no-named-default': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'import/no-named-as-default': 'off',
    'react/prop-types': [
      'error',
      {
        ignore: ['route', 'theme', 'navigation'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
};
