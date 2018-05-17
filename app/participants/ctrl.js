module.exports = (app) => {
    app.controller('ParticipantsCtrl', function (ParticipantsSrvc) {
        const vm = this;

        vm.add = add;

        loadAll();

        function loadAll () {
            ParticipantsSrvc.getAll().then((res) => {
                vm.all = res.data;
            }).catch((err) => {
                console.error(err);
            });
        }

        function add (participant) {
            ParticipantsSrvc.add(participant).then(() => {
                loadAll();
            }).catch((err) => {
                console.error(err);
            });
        }
    });
};
