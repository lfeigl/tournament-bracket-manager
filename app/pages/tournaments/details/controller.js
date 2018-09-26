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
        vm.input = {
            part: null,
            useAlias: null,
        };

        vm.addParticipant = addParticipant;
        vm.deleteTournament = deleteTournament;
        vm.deleteParticipant = deleteParticipant;
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

        function addParticipant () {
            vm.isLoading = true;
            vm.addingPart = false;

            TournamentSrvc.addParticipant(vm.id, vm.input.part._id).then(() => {
                load();
                addSetting();
            }).catch(ErrorHandlerSrvc.error);
        }

        function addSetting () {
            const setting = {
                participantId: vm.input.part._id,
                tournamentId: vm.id,
                settingName: 'useAlias',
                setting: vm.input.useAlias || false,
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
            const firstLevel = [ 'date', 'time' ];
            const secondLevel = [ 'from', 'to' ];

            firstLevel.map(firstLevelItem => {
                secondLevel.map(secondLevelItem => {
                    if (!_.isNil(vm.tournament[firstLevelItem]) && !_.isNil(vm.tournament[firstLevelItem][secondLevelItem])) {
                        vm.tournament[firstLevelItem][secondLevelItem] = new Date(vm.tournament[firstLevelItem][secondLevelItem]);
                    }
                });
            });
        }
    });
};
