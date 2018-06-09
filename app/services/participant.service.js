module.exports = app => {
    app.service('ParticipantSrvc', function ($http) {
        const srvc = this;

        srvc.getAll = getAll;
        srvc.addParticipant = addParticipant;
        srvc.update = update;
        srvc.addSetting = addSetting;
        srvc.getDetails = getDetails;
        srvc.remove = remove;

        function getAll () {
            return $http.get('/api/participants');
        }

        function addParticipant (participant) {
            return $http.post('/api/participants', participant);
        }

        function update (participantId, update) {
            return $http.post(`/api/participants/${participantId}`, update);
        }

        function addSetting (setting) {
            return $http.post('/api/participants/setting', setting);
        }

        function getDetails (participantIds) {
            return $http.post('/api/participants/details', participantIds);
        }

        function remove (participantId) {
            return $http.delete(`/api/participants/${participantId}`);
        }
    });
};
