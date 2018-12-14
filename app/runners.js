const _ = require('lodash');

module.exports = (app) => {
    app.run(($rootScope) => {
        $rootScope._ = _;
    });

    app.run(($rootScope, $location) => {
        $rootScope.isActiveTab = (tab) => {
            const regExp = new RegExp(`^/${tab}`);
            const path = $location.path();

            return regExp.test(path);
        };
    });

    app.run(($rootScope, $location) => {
        $rootScope.isActiveHash = (tab) => {
            const hash = $location.hash();

            return tab === hash;
        };
    });

    app.run(($rootScope, $route) => {
        $rootScope.$on('$routeChangeSuccess', () => {
            $rootScope.pageTitle = $route.current.title;
        });
    });
};
