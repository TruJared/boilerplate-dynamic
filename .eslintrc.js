module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'consistent-return': 1,
    'implicit-arrow-linebreak': 1,
    'import/prefer-default-export': 0,
    'lines-between-class-members': [
      2,
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-console': 1,
    'no-return-assign': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
  },
};
