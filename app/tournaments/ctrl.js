const errorHandler = require('../misc/error-handler.js');

module.exports = app => {
    app.controller('TournamentCtrl', function (TournamentSrvc) {
        const vm = this;

        vm.add = add;

        vm.activeModal = false;

        loadAll();

        function loadAll () {
            TournamentSrvc.getAll().then(res => {
                vm.all = res.data;
            }).catch(errorHandler);
        }

        function add (tournament) {
            TournamentSrvc.add(tournament).then(() => {
                loadAll();
                vm.activeModal = false;
            }).catch(errorHandler);
        }
    });
};
