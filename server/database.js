/* eslint no-console: 0 */

const mongoClient = require('mongodb').MongoClient;
const config = require('../tbm.config.js');

const server = config.mongodb.server;
const port = config.mongodb.port;
const opts = { useNewUrlParser: true };

function connect () {
    mongoClient.connect(`mongodb://${server}:${port}`, opts, (err, client) => {
        if (err) {
            throw err;
        }

        console.log(`tbm connected to database at ${server} on port ${port}.`);
        const db = client.db('tbmdb');
        const collection = db.collection('test');

        collection.find({}).toArray((err, docs) => {
            console.log(docs);
        });
    });
}

module.exports.connect = connect;
