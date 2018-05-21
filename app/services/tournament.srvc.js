module.exports = (app) => {
    app.service('TournamentSrvc', function ($http) {
        const srvc = this;

        srvc.getAll = getAll;
        srvc.getOne = getOne;
        srvc.add = add;

        function getAll () {
            return $http.get('/api/tournaments');
        }

        function getOne (id) {
            return $http.get(`/api/tournaments/${id}`);
        }

        function add (tournament) {
            return $http.post('/api/tournaments', tournament);
        }
    });
};
