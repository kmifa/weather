module.exports = {
  extends: ['plugin:tailwindcss/recommended', 'next/core-web-vitals'],
  plugins: ['tailwindcss'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js'],
      parser: '@typescript-eslint/parser',
    },
  ],
};
