/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["*.ts"],
      extends: ["@myparcel-eslint/eslint-config-prettier-typescript", "@myparcel-eslint/eslint-config-import"],
    },
    {
      files: ["*.vue"],
      extends: ["@myparcel-eslint/eslint-config-prettier-typescript-vue", "@myparcel-eslint/eslint-config-import"],
    },
    {
      files: ["*.js", "*.cjs", "*.mjs"],
      extends: [
        "@myparcel-eslint/eslint-config-node",
        "@myparcel-eslint/eslint-config-esnext",
        "@myparcel-eslint/eslint-config-prettier",
        "@myparcel-eslint/eslint-config-import",
      ],
    },
  ],
};
