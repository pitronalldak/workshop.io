/* globals module require __dirname */

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/only-dev-server',
    './src'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/static/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'babel-loader'}
                ],
                include: [
                    path.join(__dirname, 'src'),
                ],
                exclude: [
                    path.join(__dirname, 'src', 'assets'),
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(woff2|woff|ttf|eot|svg)(\?.*$|$)/,
                loader: 'file-loader?name=fonts/[name].[ext]',
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'node_modules'),
                ]
            },
            {
                // test: /\.(jpg|jpeg|gif|png|ico)$/,
                test: /\.(jpg|jpeg|gif|png|ico)(\?.*$|$)$/,
                loader: 'file-loader?name=img/[name].[ext]',
                include: [
                    path.join(__dirname, 'src'),
                    path.join(__dirname, 'node_modules'),
                ]
            }
        ]
    }
};
