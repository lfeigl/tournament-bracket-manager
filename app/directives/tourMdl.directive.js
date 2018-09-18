module.exports = app => {
    app.directive('tourMdl', () => {
        return {
            scope: {
                ctrl: '=',
                opts: '=',
                input: '=',
            },
            template: require('./tourMdl.template.html'),
        };
    });
};
