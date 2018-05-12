const mongoClient = require('mongodb').MongoClient;
const opts = { useNewUrlParser: true };

function connect (url) {
    mongoClient.connect(`mongodb://${url}`, opts, (err, client) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`tbm connected to database at ${url}.`);
            const db = client.db('tbmdb');
            const collection = db.collection('test');

            collection.find({}).toArray((err, docs) => {
                console.log(docs);
            });
        }
    });
}

module.exports.connect = connect;
