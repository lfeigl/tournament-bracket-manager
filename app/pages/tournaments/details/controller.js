const _ = require('lodash');
const errorHandler = require('../../../misc/error-handler.js');

module.exports = app => {
    app.controller('DetailsCtrl', function ($document, $routeParams, TournamentSrvc, ParticipantSrvc) {
        const vm = this;
        vm.id = $routeParams.id;
        vm.isLoading = false;
        vm.tourMdlVisible = false;
        vm.tourMdlOpts = {
            ctrl: 'details',
            title: 'Edit this tournament',
            submit: 'Save',
        };

        vm.addParticipant = addParticipant;
        vm.deleteTournament = deleteTournament;
        vm.deleteParticipant = deleteParticipant;
        vm.confirm = confirm;
        vm.tourMdlSubmit = editTournament;

        load();

        function load () {
            vm.participants = [];
            vm.isLoading = true;

            TournamentSrvc.getOne(vm.id).then(res => {
                vm.tournament = res.data;
                _.head($document).title = `${vm.tournament.title} ${_.head($document).title}`;

                ParticipantSrvc.getAll().then(res => {
                    vm.allParticipants = res.data;

                    if (!_.isEmpty(vm.tournament.participants)) {
                        ParticipantSrvc.getDetails(vm.tournament.participants).then(res => {
                            vm.participants = res.data.map((participant) => {
                                participant.tourSettings = participant.settings[vm.id];
                                return participant;
                            });
                        }).catch(errorHandler);
                    }

                    vm.isLoading = false;
                }).catch(errorHandler);
            }).catch(errorHandler);
        }

        function addParticipant (selection) {
            vm.isLoading = true;
            vm.addingPart = false;

            TournamentSrvc.addParticipant(vm.id, selection.part._id).then(() => {
                load();
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

        function deleteTournament () {
            TournamentSrvc.deleteTournament(vm.id).then(() => {
                vm.delTourModal = false;
                _.head($document).location = '/tournaments';
            }).catch(errorHandler);
        }

        function deleteParticipant () {
            TournamentSrvc.deleteParticipant(vm.id, vm.participantId).then(() => {
                load();
                vm.delPartMdl = false;
            }).catch(errorHandler);
        }

        function confirm (participantId) {
            vm.participantId = participantId;
            vm.delPartMdl = true;
        }

        function editTournament (edit) {
            TournamentSrvc.update(vm.id, edit).then(() => {
                load();
                vm.tourMdlVisible = false;
            }).catch(errorHandler);
        }
    });
};
