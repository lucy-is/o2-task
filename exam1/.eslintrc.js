module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': 'off'
  }
};
