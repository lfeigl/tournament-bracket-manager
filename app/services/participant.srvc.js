module.exports = (app) => {
    app.service('ParticipantSrvc', function ($http) {
        const srvc = this;

        srvc.getAll = getAll;
        srvc.getOne = getOne;
        srvc.add = add;

        function getAll () {
            return $http.get('/api/participants');
        }

        function getOne (id) {
            return $http.get(`/api/participants/${id}`);
        }

        function add (participant) {
            return $http.post('/api/participants', participant);
        }
    });
};
