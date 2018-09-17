const _ = require('lodash');

module.exports = app => {
    app.controller('ErrorHandlerCtrl', function ($location, ErrorHandlerSrvc) {
        const vm = this;

        vm.err = ErrorHandlerSrvc.err;

        if (_.isNull(vm.err)) {
            $location.url('/home');
        }
    });
};
