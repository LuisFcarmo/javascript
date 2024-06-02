// .eslintrc.js
module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@eslint/js/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@eslint/js',
  ],
  rules: {
    // Adicione ou sobrescreva regras específicas aqui
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        // Regras específicas para arquivos .js
      },
    },
  ],
  globals: {
    ...require("globals").node,
  },
};
