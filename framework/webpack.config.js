const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const root = path.resolve(__dirname, '../').replace(/\\/g, '/');

module.exports = {
    entry: {
        app: `${root}/framework/index.js`
    },
    output: {
        path: path.resolve(root, './dist') ,
        publicPath: './',
        jsonpFunction: 'webpackJsonp_vue',
        filename: '[name].js'
    },
    devtool: 'source-map'
};
