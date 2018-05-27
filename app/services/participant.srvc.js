module.exports = app => {
    app.service('ParticipantSrvc', function ($http) {
        const srvc = this;

        srvc.getAll = getAll;
        srvc.add = add;
        srvc.getDetails = getDetails;
        srvc.remove = remove;

        function getAll () {
            return $http.get('/api/participants');
        }

        function add (participant) {
            return $http.post('/api/participants', participant);
        }

        function getDetails (ids) {
            return $http.post('/api/participants/details', ids);
        }

        function remove (id) {
            return $http.delete(`/api/participants/${id}`);
        }
    });
};
