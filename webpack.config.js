const path              = require('path');
const webpack           = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : {
        'polyfills' : './source/polyfills.ts',
        'vendor'    : './source/vendor.ts',
        'app'       : './source/main.ts'
    },
    output : {
        path          : path.resolve('build'),
        publicPath    : '/',
        filename      : '[name].js',
        chunkFilename : '[id].chunk.js'
    },
    devtool : 'cheap-module-eval-source-map',
    resolve : {
        extensions : [ '.ts', '.js' ]
    },
    devServer : {
        historyApiFallback : true,
        stats : 'minimal'
    },
    module: {
        rules: [
            {
                test    : /\.ts$/,
                loaders : [
                    {
                        loader  : 'awesome-typescript-loader',
                        options : {
                            configFileName : path.resolve('tsconfig.json')
                        }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test   : /\.html$/,
                loader : 'html-loader'
            },
            {
                test   : /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader : 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test    : /\.css$/,
                exclude : path.resolve('source', 'app'),
                loader  : ExtractTextPlugin.extract({
                    fallbackLoader : 'style-loader',
                    loader         : 'css-loader?sourceMap'
                })
            },
            {
                test    : /\.css$/,
                include : path.resolve('source', 'app'),
                loader  : 'raw-loader'
            },
            {
                test    : /\.scss$/,
                exclude : /node_modules/,
                loaders : [
                    'raw-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, 'source'),
            {}
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name : [ 'app', 'vendor', 'polyfills' ]
        }),
        new HtmlWebpackPlugin({
            template : path.resolve('source', 'index.html')
        })
    ]
};