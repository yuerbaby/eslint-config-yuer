module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['eslint:recommended', 'yuer'],
  globals: {
    __inline: true,
    __uri: true,
    IS_SERVER: true
  }
}
