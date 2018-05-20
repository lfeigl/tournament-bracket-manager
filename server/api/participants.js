const db = require('../mongodb.js');

module.exports = {
    getAll: function (req, res, next) {
        const collection = db.get('participants');

        collection.find().toArray((err, participants) => {
            if (err) next(err);

            res.send(participants);
        });
    },
    add: function (req, res, next) {
        const collection = db.get('participants');
        const participant = req.body;

        collection.insertOne(participant, (err, result) => {
            if (err) next(err);

            res.send(result);
        });
    },
};
