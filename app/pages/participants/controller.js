module.exports = app => {
    app.controller('ParticipantCtrl', function (ParticipantSrvc, ErrorHandlerSrvc) {
        const vm = this;
        vm.editPart = null;
        vm.input = null;

        vm.add = add;
        vm.edit = edit;
        vm.confirm = confirm;
        vm.remove = remove;

        loadAll();

        function loadAll () {
            ParticipantSrvc.getAll().then(res => {
                vm.all = res.data;
            }).catch(ErrorHandlerSrvc.error);
        }

        function add () {
            ParticipantSrvc.addParticipant(vm.input).then(() => {
                vm.input = null;
                loadAll();
            }).catch(ErrorHandlerSrvc.error);
        }

        function edit (id, edit) {
            ParticipantSrvc.update(id, edit).then(() => {
                vm.editPart = null;
                loadAll();
            }).catch(ErrorHandlerSrvc.error);
        }

        function confirm (id) {
            vm.id = id;
            vm.activeModal = true;
        }

        function remove () {
            ParticipantSrvc.remove(vm.id).then(() => {
                vm.activeModal = false;
                loadAll();
            }).catch(ErrorHandlerSrvc.error);
        }
    });
};
