/* eslint no-console: 0 */

const express = require('express');
const path = require('path');
const config = require('../tbm.config.js');
const api = require('./api');
const db = require('./database.js');

const server = express();
const publicDir = path.resolve('public');
const port = config.port;

server.use(express.static(publicDir));

server.use('/api', api);

server.all('/*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

db.connect((err, dbConfig) => {
    if (err) throw err;

    console.log(`TBM is connected to database "${dbConfig.name}" at ${dbConfig.server} on port ${dbConfig.port}.`);
    server.listen(port, () => {
        console.log(`TBM is listening on port ${port}.`);
    });
});
