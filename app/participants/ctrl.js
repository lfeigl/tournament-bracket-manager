const errorHandler = require('../misc/error-handler.js');

module.exports = app => {
    app.controller('ParticipantCtrl', function (ParticipantSrvc) {
        const vm = this;

        vm.add = add;
        vm.remove = remove;

        loadAll();

        function loadAll () {
            ParticipantSrvc.getAll().then(res => {
                vm.all = res.data;
            }).catch(errorHandler);
        }

        function add (participant) {
            ParticipantSrvc.add(participant).then(() => {
                loadAll();
            }).catch(errorHandler);
        }

        function remove (id) {
            ParticipantSrvc.remove(id).then(() => {
                loadAll();
            }).catch(errorHandler);
        }
    });
};
