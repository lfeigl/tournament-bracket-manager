const MongoClient = require('mongodb').MongoClient;
const mongoConfig = require('../tbm.config.js').mongoDB;

const opts = { useNewUrlParser: true };
let db = null;

module.exports = {
    connect: done => {
        if (db) return done(null, mongoConfig);

        MongoClient.connect(`mongodb://${mongoConfig.server}:${mongoConfig.port}`, opts, (err, client) => {
            if (err) return done(err);

            db = client.db(mongoConfig.dbName);
            done(null, mongoConfig);
        });
    },
    get: collection => {
        return db.collection(collection);
    },
};
