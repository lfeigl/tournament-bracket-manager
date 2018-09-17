module.exports = app => {
    app.service('ErrorHandlerSrvc', function ($location) {
        const srvc = this;
        srvc.err = null;

        srvc.error = error;

        function error (err) {
            srvc.err = err;
            console.error('TBM Error Handler Service', err);
            $location.url('/error');
        }
    });
};
