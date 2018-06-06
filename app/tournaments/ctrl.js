const errorHandler = require('../misc/error-handler.js');

module.exports = app => {
    app.controller('TournamentCtrl', function (TournamentSrvc) {
        const vm = this;
        vm.visibleMdl = false;
        vm.mdlOpts = {
            ctrl: 'tour',
            title: 'Create new tournament',
            submit: 'Create',
        };

        vm.submit = addTournament;

        loadAll();

        function loadAll () {
            TournamentSrvc.getAll().then(res => {
                vm.all = res.data;
            }).catch(errorHandler);
        }

        function addTournament (tournament) {
            TournamentSrvc.addTournament(tournament).then(() => {
                loadAll();
                vm.visibleMdl = false;
            }).catch(errorHandler);
        }
    });
};
