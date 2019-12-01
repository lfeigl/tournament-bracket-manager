module.exports = (app) => {
    app.directive('tourMdl', ($rootScope) => {
        return {
            scope: {
                ctrl: '=',
                opts: '=',
                input: '=',
            },
            template: require('./tourMdl.template.html'),
            link: (scope) => {
                scope._ = $rootScope._;
            },
        };
    });
};
