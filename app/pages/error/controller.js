const _ = require('lodash');

module.exports = app => {
    app.controller('ErrorHandlerCtrl', function ($rootScope, $location, ErrorHandlerSrvc) {
        const vm = this;
        vm.formatted = null;

        vm.err = ErrorHandlerSrvc.err;

        if (!_.isNull(vm.err)) {
            if (vm.err.status) {
                vm.formatted = JSON.stringify(vm.err, null, 4);
                $rootScope.pageTitle = `${vm.err.status} ${vm.err.statusText}`;
            }
        } else {
            $location.url('/home');
        }
    });
};
