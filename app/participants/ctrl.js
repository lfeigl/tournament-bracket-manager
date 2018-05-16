module.exports = (app) => {
    app.controller('ParticipantsCtrl', function (ParticipantsSrvc) {
        const vm = this;

        vm.add = ParticipantsSrvc.add;
    });
};
