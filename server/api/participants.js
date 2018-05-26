const ObjectId = require('mongodb').ObjectId;
const db = require('../mongodb.js');

module.exports = {
    getAll: function (req, res, next) {
        const collection = db.get('participants');
        const projection = { name: 1, alias: 1 };

        collection.find().project(projection).toArray((err, participants) => {
            if (err) return next(err);

            res.send(participants);
        });
    },
    add: function (req, res, next) {
        const collection = db.get('participants');
        const participant = req.body;

        collection.insertOne(participant, (err, result) => {
            if (err) return next(err);

            res.send(result);
        });
    },
    getDetails: function (req, res, next) {
        const collection = db.get('participants');
        const participantIds = req.body;
        const objectIds = participantIds.map(participantId => {
            return new ObjectId(participantId);
        });
        const selector = { _id: { $in: objectIds } };

        collection.find(selector).toArray((err, participant) => {
            if (err) return next(err);

            res.send(participant);
        });
    },
};
