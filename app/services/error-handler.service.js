module.exports = app => {
    app.service('ErrorHandlerSrvc', function ($location) {
        const srvc = this;

        srvc.error = error;

        function error (err) {
            console.error('TBM Error Handler Service', err);
            $location.url('/error');
        }
    });
};
