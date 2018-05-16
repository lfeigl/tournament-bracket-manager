module.exports = (app) => {
    app.service('ParticipantsSrvc', function ($http) {
        const srvc = this;

        srvc.getAll = getAll;
        srvc.add = add;

        function getAll () {
            return $http.get('/api/participants');
        }

        function add (participant) {
            return $http.post('/api/participants', participant);
        }
    });
};
