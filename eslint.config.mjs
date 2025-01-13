import eslintPluginJsonc from 'eslint-plugin-jsonc';
import stylistic from '@stylistic/eslint-plugin';
import tailwind from 'eslint-plugin-tailwindcss';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	{
		ignores: ['**/*.md', 'archive/'],
	},
	...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
	stylistic.configs.customize({
		indent: 'tab',
		semi: true,
		arrowParens: true,
	}),
	...tailwind.configs['flat/recommended'],
	{
		files: ['**/*.js', '**/*.ts', '**/*.vue', '**/*.md', '**/*.json'],
		rules: {
			// Misc
			'curly': ['error', 'multi-line'],
			'dot-notation': ['error'],
			'@stylistic/space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
			'@stylistic/no-extra-semi': ['warn'],

			// Tailwind
			'tailwindcss/classnames-order': ['warn', {
				callees: ['classnames', 'cn'],
				removeDuplicates: true,
			}],

			// TypeScript
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/unified-signatures': ['warn', { ignoreDifferentlyNamedParameters: false }],
			'@stylistic/padding-line-between-statements': [
				'error',
				{ blankLine: 'always', prev: '*', next: ['interface', 'type'] },
				{ blankLine: 'never', prev: ['interface', 'type'], next: '*' },
			],
			// Vue
			'vue/max-attributes-per-line': 'off',
			'vue/singleline-html-element-content-newline': 'off',
			'vue/no-v-html': 'off',
			'vue/html-indent': ['error', 'tab', { baseIndent: 1 }],
			'vue/script-indent': ['error', 'tab', { baseIndent: 1, switchCase: 1 }],
			'vue/no-multiple-template-root': 'off',
			'vue/html-self-closing': ['error', {
				html: { void: 'always' },
			}],
			'vue/multi-word-component-names': 'off',
			'vue/padding-line-between-blocks': ['error', 'always'],
			'vue/no-duplicate-attributes': ['error', {
				allowCoexistClass: false,
				allowCoexistStyle: false,
			}],
			'vue/object-curly-spacing': ['error', 'always'],
			'vue/template-curly-spacing': ['error', 'never'],
			'vue/block-lang': ['error', {
				script: { lang: 'ts' },
				style: { lang: 'scss' },
			}],
			'vue/component-api-style': ['error', ['script-setup']],
			'vue/define-props-declaration': ['error', 'type-based'],
			'vue/require-macro-variable-name': 'error',
			'vue/require-toggle-inside-transition': 'off',
			'vue/quote-props': ['error', 'consistent-as-needed'],
			'vue/no-multi-spaces': 'error',
			'vue/array-bracket-spacing': 'error',
			'vue/comma-spacing': 'error',

			// JSONC
			'jsonc/indent': ['error', 'tab'],
			'jsonc/array-bracket-spacing': ['error', 'never'],
			'jsonc/comma-style': ['error', 'last'],
			'jsonc/key-spacing': ['error', {
				beforeColon: false,
				afterColon: true,
				mode: 'strict',
			}],
			'jsonc/object-curly-spacing': ['error', 'always'],
			'jsonc/key-name-casing': ['warn', {
				'SCREAMING_SNAKE_CASE': false,
				'PascalCase': false,
				'snake_case': false,
				'camelCase': true,
				'kebab-case': true,
				'ignores': ['/', ':', '.'],
			}],

			// Import
			'import/order': [
				'error',
				{
					'pathGroups': [
						{
							pattern: '~/assets/**',
							group: 'internal',
							position: 'after',
						},
						{
							pattern: '~/components/**',
							group: 'internal',
							position: 'after',
						},
						{
							pattern: '~/store',
							group: 'internal',
							position: 'after',
						},
						{
							pattern: '~/types',
							group: 'internal',
							position: 'after',
						},
					],
					'pathGroupsExcludedImportTypes': [
						['external', 'internal'],
					],
					'groups': [
						'builtin',
						'external',
						'internal',
						'unknown',
						'parent',
						'sibling',
						'index',
						'object',
						'type',
					],
					'newlines-between': 'never',
				},
			],
		},
	},
	{
		files: ['**/*.vue'],
		rules: {
			'@stylistic/indent': 'off',
		},
	},
);
