const { FlatCompat } = require("@eslint/eslintrc");

const __filename = __filename;
const __dirname = __dirname;

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

module.exports = eslintConfig;
