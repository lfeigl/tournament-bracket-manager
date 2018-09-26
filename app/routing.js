module.exports = app => {
    app.config(($locationProvider, $routeProvider) => {
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            redirectTo: '/dashboard',
        }).when('/dashboard', {
            controller: 'DashboardCtrl',
            controllerAs: 'dashboard',
            template: require('./pages/dashboard/template.html'),
            title: 'Dashboard',
        }).when('/tournaments', {
            controller: 'TournamentCtrl',
            controllerAs: 'tour',
            template: require('./pages/tournaments/overview/template.html'),
            title: 'Tournaments',
        }).when('/tournaments/:id', {
            controller: 'DetailsCtrl',
            controllerAs: 'details',
            template: require('./pages/tournaments/details/template.html'),
            title: 'Details',
            reloadOnSearch: false,
        }).when('/participants', {
            controller: 'ParticipantCtrl',
            controllerAs: 'pp',
            template: require('./pages/participants/template.html'),
            title: 'Participants',
        }).when('/about', {
            controller: 'AboutCtrl',
            controllerAs: 'about',
            template: require('./pages/about/template.html'),
            title: 'About',
        }).when('/error', {
            controller: 'ErrorHandlerCtrl',
            controllerAs: 'error',
            template: require('./pages/error/template.html'),
            title: 'Error',
        }).otherwise({
            template: require('./misc/not-found.template.html'),
            title: '404 Not Found',
        });
    });
};
