const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'app', 'index.js'),
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'app.js',
        sourceMapFilename: 'app.map.js',
    },
    devtool: 'source-map',
};
