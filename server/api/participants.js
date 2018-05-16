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

        try {
            collection.insertOne(participant);
        } catch (err) {
            next(err);
        }

        res.sendStatus(200);
    },
};
