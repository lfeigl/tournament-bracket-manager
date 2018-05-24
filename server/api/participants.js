const ObjectId = require('mongodb').ObjectId;
const db = require('../mongodb.js');

module.exports = {
    getAll: function (req, res, next) {
        const collection = db.get('participants');

        collection.find().toArray((err, participants) => {
            if (err) next(err);

            res.send(participants);
        });
    },
    getOne: function (req, res, next) {
        const collection = db.get('participants');
        const participantId = { _id: new ObjectId(req.params.participantId) };

        collection.findOne(participantId, (err, participant) => {
            if (err) next(err);

            res.send(participant);
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
