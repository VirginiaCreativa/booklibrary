const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: ['./src/index.js', './src/imports.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
  		compress: true,
		port: 3000
	},
	module: {

		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
				  		presets: ['es2015', 'react', 'stage-2'],
					}
				}
			},
			{
				test: /\.(png|svg|jpe?g|gif|ico)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 8192,
						outputPath: 'images/',
                        name: '[name].[ext]?[hash]'
					}
				} 			
			}, 
			{
				test: /(\.css|\.scss)$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
		        	fallback: "style-loader",
		        	use:[
			        	{
			        		loader: "css-loader",
			        		options: { 
			        			minimize: true,
                                sourceMap: true
			        		}
			        	},
						{
						  loader: 'postcss-loader', 
						  options: {
						    plugins: function () { 
						      return [
						        require('precss'),
						        require('autoprefixer')
						      ];
						    }
						  }
						},
			        	{
			        		loader: "sass-loader"
			        	}
		        	]
		        })
			},
			{
		        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		        use: [
		          {
		            loader: 'url-loader',
		            options: {
		              limit: 10000,
		              mimetype: 'application/font-woff',
		              outputPath: 'fonts/',
                       name: '[name].[ext]?[hash]'
		            }
		          }
		        ]
		    },
			{
				test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
				use: {
					loader: 'file-loader',
					options: {
			            outputPath: 'fonts/',
	                    name: '[name].[ext]?[hash]'
		            }
				}
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new ExtractTextPlugin('main.css'),
		new BrowserSyncPlugin({
	      host: 'localhost',
	      files: [
				'./**/*.html',
				'./*.html',
				'./**/*.js',
				'./*.js',
				'./**/*.scss',
				'./*.scss',
				'./**/*.css',			
				'./*.css'			
			],
			port: 9000,
			server: { baseDir: ['dist'] }
	    }),
	    new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			title: 'Principal template',
			minify: {
				collapseWhitespace: true
			}
		}),
		new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
	]
}