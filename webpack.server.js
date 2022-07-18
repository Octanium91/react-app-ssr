const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {

    entry: './src/ssr/server/index.js',

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('.ssr-server-cache'),
        filename: 'index.js'
    },

    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader'},
            {test: /\.css$/, use: "css-loader"}
        ]
    }

};