const expressRouter = require('express').Router;
const router = expressRouter();

const tournaments = require('./tournaments.js');
const participants = require('./participants.js');

router.get('/tournaments', tournaments.getAll);
router.get('/participants', participants.getAll);

router.all('/*', (req, res) => {
    res.sendStatus(404);
});

module.exports = router;
