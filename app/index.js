require('bulma');

const angular = require('angular');
const app = angular.module('tbm', [
    require('angular-route'),
]);

require('./routing.js')(app);
require('./runners.js')(app);
require('./home')(app);
require('./tournaments')(app);
require('./participants')(app);
