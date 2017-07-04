const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "app.js"),
    devtool: "inline-sourcemap", //"source-map",//
    context: path.join(__dirname, "src"),
    output: {
        path: path.join(__dirname, "public"),
        filename: 'bundle.min.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                },
            },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.html$/, loader: 'html' }
        ]
    },
    devServer: {
        publicPath: 'http://127.0.0.1:8083/',
        contentBase: __dirname + "/src/",
        hot: true,
        historyApiFallback: true,
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};