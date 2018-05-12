/* eslint no-console: 0 */

const mongoClient = require('mongodb').MongoClient;
const config = require('../tbm.config.js');

const server = config.mongoDB.server;
const port = config.mongoDB.port;
const dbName = config.mongoDB.dbName;
const opts = { useNewUrlParser: true };

function connect () {
    mongoClient.connect(`mongodb://${server}:${port}`, opts, (err, client) => {
        if (err) {
            throw err;
        }

        console.log(`tbm connected to database at ${server} on port ${port}.`);
        const db = client.db(dbName);
        const collection = db.collection('test');

        collection.find({}).toArray((err, docs) => {
            console.log(docs);
        });
    });
}

module.exports.connect = connect;
