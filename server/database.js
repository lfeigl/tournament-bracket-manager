/* eslint no-console: 0 */

const mongoClient = require('mongodb').MongoClient;
const opts = { useNewUrlParser: true };

function connect (server, port) {
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
