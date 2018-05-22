module.exports = (app) => {
    app.controller('DetailsCtrl', function ($routeParams, TournamentSrvc) {
        const vm = this;

        vm.id = $routeParams.id;

        load(vm.id);

        function load (id) {
            TournamentSrvc.getOne(id).then((res) => {
                vm.tournament = res.data;
            }).catch((err) => {
                console.error(err);
            });
        }
    });
};
