module.exports = app => {
    app.directive('tourMdl', () => {
        return {
            template: require('./tourMdl.tpl.html'),
            link: (scope, element, attrs) => {
                console.log(scope);
            },
        };
    });
};
