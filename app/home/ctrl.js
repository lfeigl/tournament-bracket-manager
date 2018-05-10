module.exports = (app) => {
    app.controller('HomeCtrl', ($scope) => {
        $scope.label = 'Hello world!';
    });
};
