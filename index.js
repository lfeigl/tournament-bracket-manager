const express = require('express');
const server = express();
const port = 1337;

server.get('/', (req, res) => {
    res.send('Hello world!');
});

server.listen(port, () => {
    console.log(`tbm listening on port ${port}.`);
});
