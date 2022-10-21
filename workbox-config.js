module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{js,css}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};