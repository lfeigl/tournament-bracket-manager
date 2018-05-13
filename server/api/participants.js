const db = require('../mongodb.js');

module.exports = {
    getAll: function (req, res) {
        const collection = db.get().collection('participants');

        collection.find().toArray((err, participants) => {
            res.send(participants);
        });
    },
};
