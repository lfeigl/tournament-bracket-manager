module.exports = app => {
    require('./home')(app);
    require('./tournaments')(app);
    require('./participants')(app);
    require('./error')(app);
};
