// filepath: eslint.config.js
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    rules: {
      // Add your custom rules here
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  }),
];