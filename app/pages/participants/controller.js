module.exports = app => {
    app.controller('ParticipantCtrl', function (ParticipantSrvc, ErrorHandlerSrvc) {
        const vm = this;
        vm.all = null;
        vm.editPart = null;
        vm.id = null;
        vm.activeModal = false;
        vm.input = {
            new: null,
            edit: null,
        };

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
            ParticipantSrvc.addParticipant(vm.input.new).then(() => {
                vm.input.new = null;
                loadAll();
            }).catch(ErrorHandlerSrvc.error);
        }

        function edit (id) {
            ParticipantSrvc.update(id, vm.input.edit).then(() => {
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
