module.exports = (app) => {
    app.run(($rootScope, $location) => {
        $rootScope.isActiveTab = (tab) => {
            const regExp = new RegExp(`^/${tab}`);
            const path = $location.path();

            return regExp.test(path);
        };
    });
};
