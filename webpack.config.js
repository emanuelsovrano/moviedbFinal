const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        app: './src/app/app.js',
        vendor: ['jquery', 'bootstrap', 'lodash', 'less']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: './app/[name].[chunkhash].js' },
    devtool: 'source-map',
    module: {
        rules: [
            {test: /\.css/, use: ExtractTextWebpackPlugin.extract({use: 'css-loader'})},
            {test: /\.less$/, use: ExtractTextWebpackPlugin.extract({use: ['css-loader', 'less-loader']})
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({template:'src/index.html'}),
        new ExtractTextWebpackPlugin('app/app.[chunkhash].css'),
        new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']})
    ]
}




