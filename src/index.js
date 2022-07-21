/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    "@thecodesmithy/eslint-config-common",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
};
