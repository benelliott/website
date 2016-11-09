'use strict';
let path = require('path');
let webpack = require('webpack');
let CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'main': './app/main.dev.ts',
        'polyfills': './polyfills.ts'
    },
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript?tsconfig=tsconfig.dev.json', 'angular2-template']
            },
            {
                test: /\.html$/,
                use: 'raw'
            },
            {
                test: /\.scss$/,
                use: ['raw', 'postcss', 'sass']
            },
            {
                test: /\.css$/,
                use: ['raw', 'postcss']
            }
        ]
    },
    plugins: [
        new CopyPlugin([
            {from: './index.html', to: '.'},
            {from: './assets', to: './assets'}
            ]),
        new webpack.ProgressPlugin(),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(process.cwd(), 'app')
        )
    ],
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'app')
        ],
        extensions: ['.ts', '.js']
    },
};