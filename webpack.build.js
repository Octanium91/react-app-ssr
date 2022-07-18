const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/ssr/server/index.js',

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve('build-ssr'),
        filename: 'index.js'
    },

    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader'},
            {test: /\.css$/, use: "css-loader"}
        ]
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "build", to: "build" }
            ],
        }),
    ],
};