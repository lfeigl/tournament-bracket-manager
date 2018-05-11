/* eslint no-console: 0 */

const express = require('express');
const path = require('path');
const server = express();
const publicDir = path.join(__dirname, 'public');
const port = 1337;

server.use(express.static(publicDir));

server.all('/*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

server.listen(port, () => {
    console.log(`tbm listening on port ${port}.`);
});
