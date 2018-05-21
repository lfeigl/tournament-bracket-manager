/* eslint no-unused-vars: 0 */

const expressRouter = require('express').Router;
const bodyParser = require('body-parser');
const tournaments = require('./tournaments.js');
const participants = require('./participants.js');

const router = expressRouter();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/tournaments', tournaments.getAll);
router.get('/tournaments/:id', tournaments.getOne);
router.post('/tournaments', tournaments.add);
router.post('/tournaments/:id', tournaments.update);

router.get('/participants', participants.getAll);
router.post('/participants', participants.add);

router.all('/*', (req, res) => {
    res.sendStatus(404);
});

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});

module.exports = router;
