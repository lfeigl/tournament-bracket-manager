/* eslint no-console: 0 */

const express = require('express');
const path = require('path');
const config = require('../tbm.config.js');
const api = require('./api');
const mongodb = require('./mongodb.js');

const server = express();
const publicDir = path.join(__dirname, '..', 'public');
const port = config.port;

server.use(express.static(publicDir));

server.use('/api', api);

server.all('/*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

mongodb.connect((err, mongoConfig) => {
    if (err) throw err;

    console.log(`tbm connected to ${mongoConfig.dbName} at ${mongoConfig.server} on port ${mongoConfig.port}.`);
    server.listen(port, () => {
        console.log(`tbm listening on port ${port}.`);
    });
});
