/* eslint no-console: 0 */

const MongoClient = require('mongodb').MongoClient;
const config = require('../tbm.config.js');

const server = config.mongoDB.server;
const port = config.mongoDB.port;
const dbName = config.mongoDB.dbName;
const opts = { useNewUrlParser: true };

let db = null;

module.exports = {
    connect: function (done) {
        if (db) return done();

        MongoClient.connect(`mongodb://${server}:${port}`, opts, (err, client) => {
            if (err) return done(err);

            console.log(`tbm connected to ${dbName} at ${server} on port ${port}.`);
            db = client.db(dbName);
            done();
        });
    },
    get: function () {
        return db;
    },
};
