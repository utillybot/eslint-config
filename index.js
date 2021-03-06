module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        es2020: true,
        node: true,
    },
    plugins: ['@typescript-eslint'],

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    rules: {
        'prefer-const': ['error'],
        '@typescript-eslint/array-type': ['warn', { default: 'array-simple' }],
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/class-literal-property-style': ['warn', 'fields'],
        '@typescript-eslint/consistent-type-definitions': ['warn'],
        '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'no-type-imports' }],
        '@typescript-eslint/member-delimiter-style': ['warn'],
        '@typescript-eslint/member-ordering': ['warn'],
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'default',
                format: ['camelCase'],
            },
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
            },
            {
                selector: ['typeLike'],
                format: ['PascalCase'],
            },
        ],
    },
};
