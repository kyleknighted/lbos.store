import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import prettierPluginAstro from "prettier-plugin-astro";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  eslintConfigPrettier,
  prettierPluginAstro,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
    overrides: [
      {
        files: "*.astro",
        options: {
          parser: "astro",
        },
      },
    ],
  },
];
