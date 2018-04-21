/**
 * @author Nickyzhang
 * @date 2018/4/19
 * @description file templates
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: path.join(__dirname, '/src/index'),
    output: {
        path: path.join(__dirname, './build'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].[hash:4].js',
    },
    resolve: {
        extensions: ['.js', '.jsx', 'json', 'css', 'scss'],
        alias: {
            components: path.join(__dirname, '/../src/components'),
            actions: path.join(__dirname, '/../src/actions'),
            api: path.join(__dirname, '/../src/api'),
            reducers: path.join(__dirname, '/../src/reducers'),
            utils: path.join(__dirname, '/../src/utils'),
            style: path.join(__dirname, '/../src/style'),
            pages: path.join(__dirname, '/../src/assets'),
            store: path.join(__dirname, '/../src/assets'),
            assets: path.join(__dirname, '/../src/assets'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:4].[ext]'
                }
            }
        ]
    }
};