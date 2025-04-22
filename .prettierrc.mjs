/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  useTabs: false,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: ['**/*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}
