module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  jsxBracketSameLine: true,
  bracketSpacing: false,
  tabWidth: 2,
  semi: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^data/?(.*)$',
    '^services/?(.*)$',
    '^core/?(.*)$',
    '^presentation/?(.*)$',
    '^assets/?(.*)$',
    '^styles/?(.*)$',
    '^./',
  ],
  importOrderSeparation: true,
};
