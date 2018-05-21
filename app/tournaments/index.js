module.exports = (app) => {
    require('./ctrl.js')(app);
    require('./details')(app);
};
