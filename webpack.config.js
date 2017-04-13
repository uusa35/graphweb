/**
 * Created by usamaahmed on 4/12/17.
 */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: __dirname + '/schema/schema.js',
    output: {
        filename: 'output.js',
        path: path.resolve(__dirname,'./dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}