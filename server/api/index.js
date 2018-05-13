const expressRouter = require('express').Router;
const router = expressRouter();

const participants = require('./participants.js');

router.get('/participants', participants.getAll);

router.all('/*', (req, res) => {
    res.sendStatus(404);
});

module.exports = router;
