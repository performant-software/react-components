import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import postcss from 'rollup-plugin-postcss';
import resolve from "@rollup/plugin-node-resolve";

import packageJson from "./package.json";

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  external: [
    'react',
    'react-dom'
  ],
  plugins: [
    babel(),
    resolve(),
    commonjs({
      exclude: [
        'node_modules/symbol-observable/**'
      ]
    }),
    postcss({
      plugins: []
    })
  ]
};