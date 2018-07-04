module.exports = app => {
    app.directive('tourMdl', () => {
        return {
            template: require('./tourMdl.tpl.html'),
            link: (scope, element, attrs) => {
                const opts = scope.$eval(attrs.opts);

                scope.ctrl = scope[opts.ctrl];
                scope.opts = opts;
            },
        };
    });
};
