module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: ".",
    ecmaFeatures: {
     jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: [
    "@typescript-eslint",
    "prettier",
    "react",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    'prettier/prettier': "error",
    'react/react-in-jsx-scope': 2,
    'react/display-name': 0,
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    'no-console': 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-interface': 'off'
  }
}
