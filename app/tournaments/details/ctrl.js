const _ = require('lodash');

module.exports = app => {
    app.controller('DetailsCtrl', function ($routeParams, TournamentSrvc, ParticipantSrvc) {
        const vm = this;

        vm.id = $routeParams.id;
        vm.addParticipant = addParticipant;

        load(vm.id);

        function load (id) {
            vm.participants = [];
            TournamentSrvc.getOne(id).then(res => {
                vm.tournament = res.data;
                ParticipantSrvc.getAll().then(res => {
                    vm.allParticipants = res.data;
                    if (!_.isEmpty(vm.tournament.participants)) {
                        ParticipantSrvc.getDetails(vm.tournament.participants).then(res => {
                            vm.participants = res.data;
                        }).catch(err => {
                            console.error(err);
                        });
                    }
                }).catch(err => {
                    console.error(err);
                });
            }).catch(err => {
                console.error(err);
            });
        }

        function addParticipant (selection) {
            vm.addingPart = false;
            TournamentSrvc.addParticipant(vm.id, selection.part._id).then(() => {
                load(vm.id);
            }).catch(err => {
                console.error(err);
            });
        }
    });
};
