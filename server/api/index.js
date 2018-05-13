/* eslint no-unused-vars: 0 */

const expressRouter = require('express').Router;
const router = expressRouter();

const tournaments = require('./tournaments.js');
const participants = require('./participants.js');

router.get('/tournaments', tournaments.getAll);
router.get('/participants', participants.getAll);

router.all('/*', (req, res) => {
    res.sendStatus(404);
});

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

module.exports = router;
