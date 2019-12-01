const pkg = require('../../../package.json');

module.exports = (app) => {
    app.controller('AboutCtrl', function () {
        const vm = this;
        vm.version = pkg.version;
    });
};
