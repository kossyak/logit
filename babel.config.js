module.exports = {
	presets: [
		[
			'@babel/preset-env', {
			targets: {
				chrome: '64',
			},
			useBuiltIns: "entry",
			corejs: "3.29"
		}
		]
	]
}