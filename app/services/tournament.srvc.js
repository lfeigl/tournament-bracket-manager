module.exports = app => {
    app.service('TournamentSrvc', function ($http) {
        const srvc = this;

        srvc.getAll = getAll;
        srvc.getOne = getOne;
        srvc.addTournament = addTournament;
        srvc.addParticipant = addParticipant;
        srvc.deleteTournament = deleteTournament;
        srvc.deleteParticipant = deleteParticipant;

        function getAll () {
            return $http.get('/api/tournaments');
        }

        function getOne (tournamentId) {
            return $http.get(`/api/tournaments/${tournamentId}`);
        }

        function addTournament (tournament) {
            return $http.post('/api/tournaments', tournament);
        }

        function addParticipant (tournamentId, participantId) {
            return $http.post(`/api/tournaments/${tournamentId}/${participantId}`);
        }

        function deleteTournament (tournamentId) {
            return $http.delete(`/api/tournaments/${tournamentId}`);
        }

        function deleteParticipant (tournamentId, participantId) {
            return $http.delete(`/api/tournaments/${tournamentId}/${participantId}`);
        }
    });
};
