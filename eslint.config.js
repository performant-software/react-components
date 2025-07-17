import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import flowtype from 'eslint-plugin-flowtype';
import { importX } from 'eslint-plugin-import-x';
import jest from 'eslint-plugin-jest';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';

export default [
  importX.flatConfigs.recommended,
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...jest.environments.globals.globals,
        __dirname: 'readonly',
        Atomics: 'readonly',
        JSX: 'readonly',
        SharedArrayBuffer: 'readonly',
        TimeoutID: 'readonly',
        process: 'readonly'
      },
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        requireConfigFile: false,
        babelOptions: {
          parserOpts: {
            plugins: ['jsx']
          }
        }
      },
      sourceType: 'module'
    },
    plugins: {
      react,
      flowtype,
      jest,
      'jsx-a11y': jsxA11y,
      '@stylistic': stylistic
    },
    rules: {
      'class-methods-use-this': 'off',
      '@stylistic/comma-dangle': ['error', 'never'],
      "import-x/no-named-as-default": "off",
      "import-x/no-named-as-default-member": "off",
      'import-x/prefer-default-export': 'off',
      'jsx-a11y/media-has-caption': 'off',
      '@stylistic/jsx-quotes': ['error', 'prefer-single'],
      '@stylistic/lines-between-class-members': 'off',
      '@stylistic/max-len': ['error', {
        code: 120,
        ignoreStrings: true
      }],
      'no-underscore-dangle': 'off',
      'no-use-before-define': 'off',
      '@stylistic/quote-props': ['error', 'as-needed', {
        keywords: false,
        unnecessary: true,
        numbers: true
      }],
      'react/display-name': 'off',
      'react/default-props-match-prop-types': 'off',
      'react/destructuring-assignment': 'off',
      'react/jsx-filename-extension': [1, {
        extensions: ['.js', '.jsx']
      }],
      'react/jsx-no-bind': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'off',
      'react/no-did-update-set-state': 'off',
      'react/prefer-stateless-function': 'off',
      'react/require-default-props': 'off',
      'react/sort-comp': 'off',
      'react/static-property-placement': 'off',
      '@stylistic/semi-style': ['error', 'last'],
      '@stylistic/semi': ['error', 'always']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...jest.environments.globals.globals,
        __dirname: 'readonly',
        Atomics: 'readonly',
        JSX: 'readonly',
        SharedArrayBuffer: 'readonly',
        TimeoutID: 'readonly',
        process: 'readonly'
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json'
      },
      sourceType: 'module'
    },
    plugins: {
      react,
      '@typescript-eslint': typescriptEslint,
      jest,
      'jsx-a11y': jsxA11y
    },
    rules: {
      'class-methods-use-this': 'off',
      'comma-dangle': ['error', 'never'],
      "import-x/no-named-as-default": "off",
      "import-x/no-named-as-default-member": "off",
      'import-x/prefer-default-export': 'off',
      'jsx-a11y/media-has-caption': 'off',
      'jsx-quotes': ['error', 'prefer-single'],
      'lines-between-class-members': 'off',
      'max-len': ['error', {
        code: 120,
        ignoreStrings: true
      }],
      'no-underscore-dangle': 'off',
      'quote-props': ['error', 'as-needed', {
        keywords: false,
        unnecessary: true,
        numbers: true
      }],
      'react/display-name': 'off',
      'react/default-props-match-prop-types': 'off',
      'react/destructuring-assignment': 'off',
      'react/jsx-filename-extension': [1, {
        extensions: ['.tsx']
      }],
      'react/jsx-no-bind': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import-x/no-unresolved': [ 2, {ignore: '\\.tsx$'}],
      'react/no-array-index-key': 'off',
      'react/no-did-update-set-state': 'off',
      'react/prefer-stateless-function': 'off',
      'react/require-default-props': 'off',
      'react/sort-comp': 'off',
      'react/static-property-placement': 'off',
      'semi-style': ['error', 'last'],
      'no-use-before-define': 'off',
      'no-unused-vars': 'off',
      'no-shadow': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: [
      '**/dist/*'
    ]
  }
];
