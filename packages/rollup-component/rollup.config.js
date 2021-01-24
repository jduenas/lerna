import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'RollupComponent'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    resolve(),
    peerDepsExternal(),
    postcss({
      extract: false,
      modules: true
    }),
    typescript({})
  ]
}
