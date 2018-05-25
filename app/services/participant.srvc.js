module.exports = (app) => {
    app.service('ParticipantSrvc', function ($http) {
        const srvc = this;

        srvc.getAll = getAll;
        srvc.add = add;
        srvc.getDetails = getDetails;

        function getAll () {
            return $http.get('/api/participants');
        }

        function add (participant) {
            return $http.post('/api/participants', participant);
        }

        function getDetails (ids) {
            return $http.post('/api/participants/details', ids);
        }
    });
};
