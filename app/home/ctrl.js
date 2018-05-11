module.exports = (app) => {
    app.controller('HomeCtrl', function () {
        const vm = this;

        vm.label = 'Hello world!';
    });
};
