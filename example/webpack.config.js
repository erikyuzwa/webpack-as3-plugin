
const path = require('path');
const As3Plugin = require('as3-plugin');

module.exports = {

    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },

    plugins: [
        new As3Plugin({
            src: './src/com/wazooinc/Main.as',
            srcPath: './src/',
            output: path.join('dist/main.swf')
        })
    ]

};
