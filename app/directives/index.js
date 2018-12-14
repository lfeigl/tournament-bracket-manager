module.exports = (app) => {
    require('./bracket.directive.js')(app);
    require('./tourMdl.directive.js')(app);
};
