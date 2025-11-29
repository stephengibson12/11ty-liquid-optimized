// svgo.config.mjs - Optimized sprite config
export default {
	multipass: true,
	plugins: [
		{
			name: "preset-default",
			params: {
				overrides: {
					// Core sprite protections
					cleanupIds: false,
					removeUselessDefs: false,
					removeHiddenElems: false,
				},
			},
		},
		{
			name: "removeStyleElement",
			active: false,
		},
		{
			name: "removeViewBox",
			active: false,
		},
	],
};
