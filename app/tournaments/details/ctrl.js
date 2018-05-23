module.exports = (app) => {
    app.controller('DetailsCtrl', function ($routeParams, TournamentSrvc, ParticipantSrvc) {
        const vm = this;

        vm.id = $routeParams.id;
        vm.addParticipant = addParticipant;

        load(vm.id);

        function load (id) {
            TournamentSrvc.getOne(id).then((res) => {
                vm.tournament = res.data;
                ParticipantSrvc.getAll().then((res) => {
                    vm.participants = res.data;
                }).catch((err) => {
                    console.error(err);
                });
            }).catch((err) => {
                console.error(err);
            });
        }

        function addParticipant (selection) {
            vm.addingPart = false;
            console.log(selection);
        }
    });
};
