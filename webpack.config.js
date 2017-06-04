const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src", "app.js"),
    devtool: "inline-sourcemap",
    context: path.join(__dirname, "src"),
    output: {
        path: "/bin",
        publicPath: '/bin',
        filename: 'bundle.js',
    },
    watch:true,
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
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}