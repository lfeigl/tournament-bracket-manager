const errorHandler = require('../misc/error-handler.js');

module.exports = app => {
    app.controller('TournamentCtrl', function (TournamentSrvc) {
        const vm = this;
        vm.addTourMdl = false;

        vm.add = add;

        loadAll();

        function loadAll () {
            TournamentSrvc.getAll().then(res => {
                vm.all = res.data;
            }).catch(errorHandler);
        }

        function add (tournament) {
            TournamentSrvc.addTournament(tournament).then(() => {
                loadAll();
                vm.addTourMdl = false;
            }).catch(errorHandler);
        }
    });
};
