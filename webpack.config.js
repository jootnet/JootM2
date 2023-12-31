const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: "./src/JootM2.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "JootM2.js",
		library: 'JootM2',
        libraryTarget: 'var'
    },
	module: {
        rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	externals: {
		'pixi.js': "window.PIXI"
	},
	plugins: [
		new CleanWebpackPlugin()
    ]
};