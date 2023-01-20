module.exports = {
	ignorePatterns: ['scripts/**/*'],
	plugins: ['import', 'prettier', 'tailwindcss'],
	overrides: [
		{
			extends: [
				'canonical',
				'canonical/module',
				'canonical/browser',
				'canonical/jsx-a11y',
				'canonical/typescript',
				'plugin:prettier/recommended',
			],
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: './tsconfig.json',
			},
			rules: {
				// typescript
				'@typescript-eslint/no-throw-literal': 'off',
				'@typescript-eslint/return-await': ['error', 'in-try-catch'],
				'@typescript-eslint/no-use-before-define': [
					2,
					{
						classes: true,
						functions: false,
						variables: false,
					},
				],
				'@typescript-eslint/array-type': ['error', { default: 'generic' }],
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/consistent-type-imports': [
					'error',
					{ prefer: 'type-imports', fixStyle: 'inline-type-imports' },
				],
				// jsx-a11y
				'jsx-a11y/label-has-associated-control': 'off',
				// canonical
				'canonical/filename-match-exported': 'off',
				'canonical/filename-match-regex': 'off',
				'canonical/id-match': 'off',
				'canonical/import-specifier-newline': 'off',
				'canonical/destructuring-property-newline': 'off',
				'canonical/prefer-inline-type-import': 2,
				'canonical/sort-keys': 'off',
				// unicorn
				'unicorn/prevent-abbreviations': 'off',
				'unicorn/no-array-reduce': 'off',
				'unicorn/no-array-for-each': 'off',
				// prettier
				'prettier/prettier': 'error',
				// tailwind
				'tailwindcss/classnames-order': 'error',
				'tailwindcss/enforces-negative-arbitrary-values': 'error',
				'tailwindcss/enforces-shorthand': 'error',
				'tailwindcss/migration-from-tailwind-2': 'error',
				'tailwindcss/no-arbitrary-value': 'off',
				'tailwindcss/no-custom-classname': 'error',
				'tailwindcss/no-contradicting-classname': 'error',
				// builtin
				'no-restricted-imports': [
					'error',
					{
						patterns: [
							{
								group: ['.*'],
								message: "Don't use relative imports",
							},
						],
					},
				],
			},
		},
	],
};
