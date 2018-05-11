/* eslint no-console: 0 */

const express = require('express');
const path = require('path');
const server = express();
const port = 1337;

server.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => {
    console.log(`tbm listening on port ${port}.`);
});
