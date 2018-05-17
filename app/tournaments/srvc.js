module.exports = (app) => {
    app.service('TournamentSrvc', function ($http) {
        const srvc = this;

        srvc.getAll = getAll;
        srvc.add = add;

        function getAll () {
            return $http.get('/api/tournaments');
        }

        function add (tournament) {
            return $http.post('/api/tournaments', tournament);
        }
    });
};
