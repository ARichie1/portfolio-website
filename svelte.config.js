import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Using adapter-node: this app deploys to Render as a Web Service
		// (a real Node process), rather than a serverless/static host.
		// See https://svelte.dev/docs/kit/adapter-node for configuration options.
		adapter: adapter()
	}
};

export default config;
