// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxt/eslint',
		'@nuxt/image',
		'@nuxt/icon',
		'@nuxt/fonts',
		'@nuxt/test-utils/module',
		'@nuxtjs/seo',
	],
	devtools: { enabled: true },
	site: {
		url: 'https://example.com',
		name: 'Awesome Site',
		description: 'Welcome to my awesome site!',
		defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
	},
	future: {	compatibilityVersion: 4	},
	experimental: {	typedPages: true },
	compatibilityDate: '2024-11-01',
});
