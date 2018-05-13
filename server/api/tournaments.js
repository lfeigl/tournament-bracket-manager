const db = require('../mongodb.js');

module.exports = {
    getAll: function (req, res) {
        const collection = db.get('tournaments');

        collection.find().toArray((err, tournaments) => {
            res.send(tournaments);
        });
    },
};
