const _ = require('lodash');
const errorHandler = require('../../misc/error-handler.js');

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
                        }).catch(errorHandler);
                    }
                }).catch(errorHandler);
            }).catch(errorHandler);
        }

        function addParticipant (selection) {
            vm.addingPart = false;
            TournamentSrvc.addParticipant(vm.id, selection.part._id).then(() => {
                load(vm.id);
                addSetting(selection);
            }).catch(errorHandler);
        }

        function addSetting (selection) {
            const setting = {
                participantId: selection.part._id,
                tournamentId: vm.id,
                settingName: 'useAlias',
                setting: selection.useAlias || false,
            };

            ParticipantSrvc.addSetting(setting).catch(errorHandler);
        }
    });
};
