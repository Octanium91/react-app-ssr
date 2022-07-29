const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const serverConfig = {
    mode: "production",
    entry: "./src/ssr/server.js",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve('./build-ssr'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader'},
            {test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/, use: 'url-loader'},
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]},
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                { from: "build", to: "." }
            ],
        }),
    ],
};
module.exports = [serverConfig];