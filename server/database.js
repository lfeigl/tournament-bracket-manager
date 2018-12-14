const MongoClient = require('mongodb').MongoClient;
const dbConfig = require('../tbm.config.js').database;

const opts = { useNewUrlParser: true };
let db = null;

module.exports = {
    connect: (done) => {
        if (db) return done(null, dbConfig);

        MongoClient.connect(`mongodb://${dbConfig.server}:${dbConfig.port}`, opts, (err, client) => {
            if (err) return done(err);

            db = client.db(dbConfig.name);
            done(null, dbConfig);
        });
    },
    get: (collection) => {
        return db.collection(collection);
    },
};
