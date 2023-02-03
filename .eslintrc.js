module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [{
    files: ["*.ts", "*.tsx"],
    rules: {
      "@typescript-eslint/no-shadow": ["error"],
      "no-shadow": "off",
      "no-undef": "off",
      quotes: [2, "double", "avoid-escape"],
      "max-len": ["error", {
        code: 110
      }]
    }
  }]
};