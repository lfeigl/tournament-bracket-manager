module.exports = (app) => {
    app.config(($locationProvider, $routeProvider) => {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
        });

        $routeProvider.when('/', {
            redirectTo: '/home',
        }).when('/home', {
            controller: 'HomeCtrl',
            controllerAs: 'home',
            template: require('./home/tpl.html'),
        }).when('/participants', {
            controller: 'ParticipantsCtrl',
            controllerAs: 'pp',
            template: require('./participants/tpl.html'),
        }).otherwise({
            template: require('./misc/not-found.tpl.html'),
        });
    });
};
