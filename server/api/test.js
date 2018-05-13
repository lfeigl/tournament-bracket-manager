const db = require('../mongodb.js');

module.exports = {
    getAll: function (req, res) {
        const collection = db.get().collection('test');

        collection.find().toArray((err, docs) => {
            res.send(docs);
        });
    },
};
