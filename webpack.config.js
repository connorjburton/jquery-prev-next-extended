module.exports = {
	entry: './src/jquery-prev-next-extended.js',
	output: {
		path: './dist/',
		filename: 'jquery-prev-next-extended.js'
	},
	module: {
	  loaders: [
	    {
	      test: /\.js?$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel?presets[]=es2015&cacheDirectory'
	    }
	  ]
	}
}
