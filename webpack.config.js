const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'app', 'index.js'),
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'app.js',
    },
};
