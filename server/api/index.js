const expressRouter = require('express').Router;
const router = expressRouter();

const test = require('./test.js');

router.get('/test', test.getAll);

module.exports = router;
