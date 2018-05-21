module.exports = (app) => {
    app.controller('DetailsCtrl', function ($routeParams, TournamentSrvc) {
        const vm = this;

        load($routeParams.id);

        function load (id) {
            TournamentSrvc.getOne(id).then((res) => {
                vm.tournament = res.data;
            }).catch((err) => {
                console.error(err);
            });
        }
    });
};
