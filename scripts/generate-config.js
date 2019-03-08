/* eslint no-console: 0 */

const path = require('path');
const fs = require('fs');
const configPath = path.resolve('tbm.config.js');
const template = [
    'const config = require(\'./tbm.config.defaults.js\');',
    'module.exports = config;',
    '',
    '/* add your settings below this */',
    '',
    '',
];

fs.access(configPath, (err) => {
    if (err) {
        if (err.code === 'ENOENT') {
            generateConfig();
        } else {
            throw err;
        }
    } else {
        console.log('Config file already exists. It will not be generated.');
    }
});

function generateConfig () {
    fs.writeFile(configPath, template.join('\n'), (err) => {
        if (err) throw err;

        console.log('Generated config file.');
    });
}
