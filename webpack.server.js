const path = require("path");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const browserConfig = {
//     mode: "development",
//     entry: "./src/ssr/client.js",
//     output: {
//         path: path.resolve('.ssr-server-cache'),
//         filename: "client.js",
//     },
//     module: {
//         rules: [
//             {test: /\.(js|jsx)$/, use: 'babel-loader'},
//             {test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader'},
//             { test: /\.css$/, use: ["css-loader"] },
//         ],
//     },
//     plugins: [
//         new webpack.DefinePlugin({
//             __isBrowser__: "true",
//         }),
//     ],
// };

const serverConfig = {
    mode: "development",
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
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            __isBrowser__: "false",
        })
    ],
};
module.exports = [serverConfig];