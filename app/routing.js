module.exports = app => {
    app.config(($locationProvider, $routeProvider) => {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            redirectTo: '/home',
        }).when('/home', {
            controller: 'HomeCtrl',
            controllerAs: 'home',
            template: require('./pages/home/tpl.html'),
        }).when('/tournaments', {
            controller: 'TournamentCtrl',
            controllerAs: 'tour',
            template: require('./pages/tournaments/tpl.html'),
        }).when('/tournaments/:id', {
            controller: 'DetailsCtrl',
            controllerAs: 'details',
            template: require('./pages/tournaments/details/tpl.html'),
        }).when('/participants', {
            controller: 'ParticipantCtrl',
            controllerAs: 'pp',
            template: require('./pages/participants/tpl.html'),
        }).otherwise({
            template: require('./misc/not-found.tpl.html'),
        });
    });
};
