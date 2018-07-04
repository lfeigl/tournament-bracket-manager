module.exports = app => {
    require('./tournament.service.js')(app);
    require('./participant.service.js')(app);
};
