module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module',
    },
    'rules': {
        'indent': [
            'error',
            4,
        ],
        'linebreak-style': [
            'error',
            'unix',
        ],
        'quotes': [
            'error',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'eol-last': [
            'error',
            'always',
        ],
        'spaced-comment': [
            'error',
            'always',
        ],
        'no-console': [
            'warn',
            {
                'allow': [
                    'warn',
                    'error',
                ],
            },
        ],
        'no-trailing-spaces': 'error',
    },
};
