module.exports = (app) => {
    app.service('ParticipantsSrvc', function ($http) {
        const srvc = this;

        srvc.add = add;

        function add (participant) {
            $http.post('/api/participants', participant);
        }
    });
};
