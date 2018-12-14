const _ = require('lodash');
const ObjectId = require('mongodb').ObjectId;
const db = require('../database.js');

module.exports = {
    getAll: (req, res, next) => {
        const collection = db.get('participants');
        const projection = { name: 1, alias: 1 };

        collection.find().project(projection).toArray((err, participants) => {
            if (err) return next(err);

            res.send(participants);
        });
    },
    addParticipant: (req, res, next) => {
        const collection = db.get('participants');
        const participant = req.body;

        collection.insertOne(participant, (err, result) => {
            if (err) return next(err);

            res.send(result);
        });
    },
    addSetting: (req, res, next) => {
        const collection = db.get('participants');
        const participantId = new ObjectId(req.body.participantId);
        const tournamentId = new ObjectId(req.body.tournamentId);
        const setting = req.body.setting;
        const settingName = req.body.settingName;
        const selector = { _id: participantId };

        collection.findOne(selector, (err, participant) => {
            if (err) return next(err);

            const oldSettings = participant.settings || {};
            const newSettings = _.set(oldSettings, [ tournamentId, settingName ], setting);
            const update = { $set: { settings: newSettings } };

            collection.updateOne(selector, update, (err, result) => {
                if (err) return next(err);

                res.send(result);
            });
        });
    },
    getDetails: (req, res, next) => {
        const collection = db.get('participants');
        const participantIds = req.body;
        const objectIds = participantIds.map((participantId) => {
            return new ObjectId(participantId);
        });
        const selector = { _id: { $in: objectIds } };

        collection.find(selector).toArray((err, participant) => {
            if (err) return next(err);

            res.send(participant);
        });
    },
    update: (req, res, next) => {
        const collection = db.get('participants');
        const participantId = new ObjectId(req.params.participantId);
        const selector = { _id: participantId };
        const update = { $set: req.body };

        collection.updateOne(selector, update, (err, result) => {
            if (err) return next(err);

            res.send(result);
        });
    },
    delete: (req, res, next) => {
        const collection = db.get('participants');
        const participantId = new ObjectId(req.params.participantId);
        const selector = { _id: participantId };

        collection.deleteOne(selector, (err, result) => {
            if (err) return next(err);

            res.send(result);
        });
    },
};
