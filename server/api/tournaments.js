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
    getOne: function (req, res, next) {
        const collection = db.get('tournaments');
        const tournamentId = { _id: new ObjectId(req.params.id) };

        collection.findOne(tournamentId, (err, tournament) => {
            if (err) next(err);

            res.send(tournament);
        });
    },
    add: function (req, res, next) {
        const collection = db.get('tournaments');
        const tournament = req.body;

        collection.insertOne(tournament, (err, result) => {
            if (err) next(err);

            res.send(result);
        });
    },
    update: function (req, res, next) {
        const collection = db.get('tournaments');
        const tournament = { _id: new ObjectId(req.params.id) };
        const update = { $set: req.body };

        collection.updateOne(tournament, update, (err, result) => {
            if (err) next(err);

            res.send(result);
        });
    },
};
