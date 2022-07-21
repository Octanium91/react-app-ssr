const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const browserConfig = {
    mode: "production",
    entry: "./src/ssr/client.js",
    output: {
        path: path.resolve('.ssr-server-cache'),
        filename: "client.js",
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader'},
            { test: /\.css$/, use: ["css-loader"] },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            __isBrowser__: "true",
        }),
    ],
};

const serverConfig = {
    mode: "production",
    entry: "./src/ssr/server.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve('.ssr-server-cache'),
        filename: 'server.js'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader'},
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            __isBrowser__: "false",
        }),
        new CopyPlugin({
            patterns: [
                { from: "build", to: "build" }
            ],
        }),
    ],
};
module.exports = [browserConfig, serverConfig];