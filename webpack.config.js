const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
    },

    devServer: {
        // contentBase: './deploy',
        open: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Output",
        }),
        new CleanWebpackPlugin(),
    ],
    module: {

        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js)$/,
                use: "babel-loader",
            },
            {
                test: /\.(?:png|jpg|jpeg)$/,
                type: "asset/resource",

            },
        ]
    },
}