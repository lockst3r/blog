module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    endOfLine: 'lf',
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'es5',
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
    },
  },
  globals: {
    require: 'false',
    console: 'false',
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: [
    'react',
    'brackets',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'cypress',
    'no-only-tests',
    'markdown',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        extensions: ['.ts', '.tsx'],
      },
    },
    react: {
      version: '16.13.0',
    },
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'no-case-declarations': 'error',
    'no-duplicate-imports': 'error',
    'no-console': 'error',
    'no-alert': 'error',
    'new-cap': 'error',
    'prefer-template': 'error',
    'no-shadow': 'error',
    'no-underscore-dangle': 'error',
    'prefer-rest-params': 'error',
    'consistent-return': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    camelcase: 'error',
    'object-shorthand': 'error',
    'no-param-reassign': ['error', { props: true }],
    'react/no-unused-prop-types': 'error',
    'react/prop-types': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
        },
        block: {
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
  },
};
