const path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/, // to target files inding in js
            exclude: /node_modules/,

        }, {
            test: /\.s?css$/, // to target files inding in css or scss as an option
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]


        }]

    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback:true
    }
};