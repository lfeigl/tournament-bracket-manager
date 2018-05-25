module.exports = app => {
    require('./tournament.srvc.js')(app);
    require('./participant.srvc.js')(app);
};
