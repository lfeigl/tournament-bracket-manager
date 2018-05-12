/* eslint no-console: 0 */

const express = require('express');
const path = require('path');
const parseArgs = require('minimist');
const database = require('./database.js');

const server = express();
const publicDir = path.join(__dirname, 'public');
const args = parseArgs(process.argv.slice(2));
const port = args.port;
const mongoUrl = args.mongodb;

server.use(express.static(publicDir));

server.all('/*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

server.listen(port, () => {
    console.log(`tbm listening on port ${port}.`);
    database.connect(mongoUrl);
});
