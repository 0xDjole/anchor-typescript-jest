module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['*.cjs'],
    rules: { 'typescript-eslint/no-unsafe-assignment': 'ignore' },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2019,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json']
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    }
}
