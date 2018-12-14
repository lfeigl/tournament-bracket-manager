module.exports = (app) => {
    require('./tournament.service.js')(app);
    require('./participant.service.js')(app);
    require('./error-handler.service.js')(app);
};
