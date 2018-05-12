/* eslint no-console: 0 */

const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const path = require('path');
const parseArgs = require('minimist');

const server = express();
const publicDir = path.join(__dirname, 'public');
const args = parseArgs(process.argv.slice(2));
const port = args.port;
const mongoUrl = args.mongodb;
const mongoOpts = { useNewUrlParser: true };

mongoClient.connect(`mongodb://${mongoUrl}`, mongoOpts, (err, client) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`tbm connected to database at ${mongoUrl}.`);
        const db = client.db('tbmdb');
        const collection = db.collection('test');

        collection.find({}).toArray((err, docs) => {
            console.log(docs);
        });
    }
});

server.use(express.static(publicDir));

server.all('/*', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

server.listen(port, () => {
    console.log(`tbm listening on port ${port}.`);
});
