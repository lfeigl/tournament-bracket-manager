module.exports = app => {
    require('./home')(app);
    require('./tournaments')(app);
    require('./participants')(app);
    require('./about')(app);
    require('./error')(app);
};
