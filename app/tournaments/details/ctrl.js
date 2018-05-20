module.exports = (app) => {
    app.controller('DetailsCtrl', function ($routeParams) {
        const vm = this;

        vm.label = $routeParams.id;
    });
};
