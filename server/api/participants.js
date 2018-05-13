const db = require('../mongodb.js');

module.exports = {
    getAll: function (req, res, next) {
        const collection = db.get('participants');

        collection.find().toArray((err, participants) => {
            if (err) next(err);

            res.send(participants);
        });
    },
};
