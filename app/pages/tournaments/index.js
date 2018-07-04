module.exports = app => {
    require('./controller.js')(app);
    require('./details')(app);
};
