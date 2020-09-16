const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        polyfill: '@babel/polyfill/noConflict',
        app:'./src/main.js',
        post:'./src/post.js'
    },
    output: {
        path: __dirname + '/public',
        filename: '[name].js',
    },
    devServer: {
        contentBase: __dirname + '/public',
        host: '0.0.0.0',
        disableHostCheck: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            chunks:['app'],
        }),
        new HtmlWebpackPlugin({
            filename:'cadastro.html',
            template: 'public/cadastro.html',
            chunks:['post'],
        }),
    ]
};