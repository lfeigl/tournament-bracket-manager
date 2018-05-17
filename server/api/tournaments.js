const db = require('../mongodb.js');

module.exports = {
    getAll: function (req, res, next) {
        const collection = db.get('tournaments');

        collection.find().toArray((err, tournaments) => {
            if (err) next(err);

            res.send(tournaments);
        });
    },
};
