module.exports = {
    env: {
      commonjs: true,
      es6: true,
      node: true,
      jest: true
    },
    extends: 'standard',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    plugins: ['prettier'],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    rules: {
      semi: [2, 'always']
    }
    };