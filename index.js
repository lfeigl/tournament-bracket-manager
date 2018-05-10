/* eslint no-console: 0 */

const express = require('express');
const server = express();
const port = 1337;

server.use(express.static('public'));

server.listen(port, () => {
    console.log(`tbm listening on port ${port}.`);
});
