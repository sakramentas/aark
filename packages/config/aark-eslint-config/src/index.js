module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier', 'react-hooks'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'import/no-default-export': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'import/prefer-default-export': 'off',
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: true }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 90,
        singleQuote: true,
        trailingComma: 'es5',
        parser: 'babel',
      },
    ],
  },
};
