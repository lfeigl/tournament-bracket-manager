const expressRouter = require('express').Router;
const router = expressRouter();

const participants = require('./participants.js');

router.get('/participants', participants.getAll);

module.exports = router;
