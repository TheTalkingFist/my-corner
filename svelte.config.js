import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';
const repo = 'my-corner'; // ← replace this with your repo name!

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html' // GitHub Pages serves this instead of missing routes
		}),
		paths: {
			base: dev ? '' : '/my-corner' // only needed if NOT your username.github.io root site
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
