module.exports = (app) => {
    app.controller('TournamentCtrl', function (TournamentSrvc) {
        const vm = this;

        vm.add = add;

        vm.activeModal = false;

        loadAll();

        function loadAll () {
            TournamentSrvc.getAll().then((res) => {
                vm.all = res.data;
            }).catch((err) => {
                console.error(err);
            });
        }

        function add (tournament) {
            TournamentSrvc.add(tournament).then(() => {
                loadAll();
                vm.activeModal = false;
            }).catch((err) => {
                console.error(err);
            });
        }
    });
};
