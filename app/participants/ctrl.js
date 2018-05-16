module.exports = (app) => {
    app.controller('ParticipantsCtrl', function (ParticipantsSrvc) {
        const vm = this;

        vm.add = add;

        ParticipantsSrvc.getAll().then((res) => {
            vm.all = res.data;
        }).catch((err) => {
            console.error(err);
        });

        function add (participant) {
            ParticipantsSrvc.add(participant).catch((err) => {
                console.error(err);
            });
        }
    });
};
