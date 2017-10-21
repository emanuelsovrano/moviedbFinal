const webpack = require('webpack');

module.exports = {
    entry: './src/app/app.js',
    output: { filename: './public/bundle.js' },
    devtool: 'source-map',
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}




