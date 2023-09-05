/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: false,
  bracketSameLine: true,
  jsxBracketSameLine: true,
  arrowParens: 'always',
  printWidth: 120,
  overrides: [
    {
      files: '*.{css,postcss}',
      options: {
        singleQuote: false,
      },
    },
  ],
  importOrder: [
    'app/**',
    'pages/*/**',
    'widgets/*/**',
    'features/*/**',
    'entities/*/**',
    'shared/*/*/**',
    '../**/app',
    '../**/pages',
    '../**/widgets',
    '../**/features',
    '../**/entities',
    '../**/shared',
  ],
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
