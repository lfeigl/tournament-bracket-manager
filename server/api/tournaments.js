const ObjectId = require('mongodb').ObjectId;
const db = require('../mongodb.js');

module.exports = {
    getAll: function (req, res, next) {
        const collection = db.get('tournaments');

        collection.find().toArray((err, tournaments) => {
            if (err) next(err);

            res.send(tournaments);
        });
    },
    add: function (req, res, next) {
        const collection = db.get('tournaments');
        const tournament = req.body;

        try {
            collection.insertOne(tournament);
        } catch (err) {
            next(err);
        }

        res.sendStatus(200);
    },
    update: function (req, res, next) {
        const collection = db.get('tournaments');
        const tournament = { _id: ObjectId(req.params.id) };
        const update = { $set: req.body };

        collection.updateOne(tournament, update, (err, result) => {
            if (err) next(err);

            res.send(result);
        });
    },
};
