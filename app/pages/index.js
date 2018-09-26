module.exports = app => {
    require('./dashboard')(app);
    require('./tournaments')(app);
    require('./participants')(app);
    require('./about')(app);
    require('./error')(app);
};
