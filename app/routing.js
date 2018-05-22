module.exports = (app) => {
    app.config(($locationProvider, $routeProvider) => {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            redirectTo: '/home',
        }).when('/home', {
            controller: 'HomeCtrl',
            controllerAs: 'home',
            template: require('./home/tpl.html'),
        }).when('/tournaments', {
            controller: 'TournamentCtrl',
            controllerAs: 'tour',
            template: require('./tournaments/tpl.html'),
        }).when('/tournaments/:id', {
            controller: 'DetailsCtrl',
            controllerAs: 'details',
            template: require('./tournaments/details/tpl.html'),
        }).when('/participants', {
            controller: 'ParticipantCtrl',
            controllerAs: 'pp',
            template: require('./participants/tpl.html'),
        }).otherwise({
            template: require('./misc/not-found.tpl.html'),
        });
    });
};
