const _ = require('lodash');

module.exports = app => {
    app.controller('DetailsCtrl', function ($rootScope, $routeParams, $location, TournamentSrvc, ParticipantSrvc, ErrorHandlerSrvc) {
        const vm = this;
        let tourBackup = null;
        vm.id = $routeParams.id;
        vm.isLoading = false;
        vm.tournament = null;
        vm.participants = [];
        vm.allParticipants = null;
        vm.addingPart = false;
        vm.delTourModal = false;
        vm.delPartMdl = false;
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
        vm.openTourMdl = openTourMdl;
        vm.cancelTourMdl = cancelTourMdl;

        load();

        function load () {
            vm.isLoading = true;

            TournamentSrvc.getOne(vm.id).then(res => {
                vm.tournament = res.data;
                $rootScope.pageTitle = vm.tournament.title;
                formatDates();

                ParticipantSrvc.getAll().then(res => {
                    vm.allParticipants = res.data;

                    if (!_.isEmpty(vm.tournament.participants)) {
                        ParticipantSrvc.getDetails(vm.tournament.participants).then(res => {
                            vm.participants = res.data.map(participant => {
                                participant.tourSettings = participant.settings[vm.id];
                                return participant;
                            });
                        }).catch(ErrorHandlerSrvc.error);
                    }

                    vm.isLoading = false;
                }).catch(ErrorHandlerSrvc.error);
            }).catch(ErrorHandlerSrvc.error);
        }

        function addParticipant (selection) {
            vm.isLoading = true;
            vm.addingPart = false;

            TournamentSrvc.addParticipant(vm.id, selection.part._id).then(() => {
                load();
                addSetting(selection);
            }).catch(ErrorHandlerSrvc.error);
        }

        function addSetting (selection) {
            const setting = {
                participantId: selection.part._id,
                tournamentId: vm.id,
                settingName: 'useAlias',
                setting: selection.useAlias || false,
            };

            ParticipantSrvc.addSetting(setting).catch(ErrorHandlerSrvc.error);
        }

        function deleteTournament () {
            TournamentSrvc.deleteTournament(vm.id).then(() => {
                vm.delTourModal = false;
                $location.url('/tournaments');
            }).catch(ErrorHandlerSrvc.error);
        }

        function deleteParticipant () {
            TournamentSrvc.deleteParticipant(vm.id, vm.participantId).then(() => {
                load();
                vm.delPartMdl = false;
            }).catch(ErrorHandlerSrvc.error);
        }

        function confirm (participantId) {
            vm.participantId = participantId;
            vm.delPartMdl = true;
        }

        function editTournament (edit) {
            TournamentSrvc.update(vm.id, _.omit(edit, '_id')).then(() => {
                load();
                vm.tourMdlVisible = false;
            }).catch(ErrorHandlerSrvc.error);
        }

        function openTourMdl () {
            tourBackup = _.cloneDeep(vm.tournament);
            vm.tourMdlVisible = true;
        }

        function cancelTourMdl () {
            vm.tournament = tourBackup;
            vm.tourMdlVisible = false;
        }

        function formatDates () {
            if (!_.isNil(vm.tournament.date)) {
                if (!_.isNil(vm.tournament.date.from)) {
                    vm.tournament.date.from = new Date(vm.tournament.date.from);
                }

                if (!_.isNil(vm.tournament.date.to)) {
                    vm.tournament.date.to = new Date(vm.tournament.date.to);
                }
            }

            if (!_.isNil(vm.tournament.time)) {
                if (!_.isNil(vm.tournament.time.from)) {
                    vm.tournament.time.from = new Date(vm.tournament.time.from);
                }

                if (!_.isNil(vm.tournament.time.to)) {
                    vm.tournament.time.to = new Date(vm.tournament.time.to);
                }
            }
        }
    });
};
