module.exports = (app) => {
    require('./ctrl.js')(app);
    require('./srvc.js')(app);
    require('./details')(app);
};
