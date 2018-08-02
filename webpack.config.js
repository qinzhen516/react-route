const path = require('path');
const webpack = require('webpack'); 
module.exports = {
	entry : './src/index.js',
	output : {
		//filename : 'bundle.js',
		/*eslint-disable no-undef*/
		filename: 'bundle.js',
		path : __dirname+'/dist/'
		/*eslint-disable no-undef*/
	},
	module:{
		rules:[{
			test:/\.js$/,
			exclude: /node_modules/, 
			loader: ['babel-loader']

		},
		
		{
			test: /\.scss/,// SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
			use: [{
				loader: 'style-loader',
			},{
				loader: 'css-loader',
				options: {
					modules: true,
					localIdentName: '[path][name]__[local]--[hash:base64:5]'
				}
			},{
				loader: 'sass-loader',
			}],
		}
			
		],
  
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
      
	], 
	
      
	devServer: {
		/*eslint-disable no-undef*/
		contentBase: path.join(__dirname, 'dist'),
		/*eslint-disable no-undef*/
		hot: true,
		open: true,
		historyApiFallback: true,
		compress: true,
		overlay: {
			warnings: true,
			errors: true,
		},
		stats: {
			colors: true
		},
		port: 3000
	}
};