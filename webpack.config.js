const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    watch: true,
    entry: './app/src/reactApp/index.jsx',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname + '/app/', 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/index.html'
        })
    ]
};