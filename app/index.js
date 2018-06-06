require('bulma');
require('../public/js/fontawesome.js');
require('../public/css/main.css');

const angular = require('angular');
const app = angular.module('tbm', [
    require('angular-route'),
]);

require('./routing.js')(app);
require('./runners.js')(app);

require('./pages')(app);
require('./services')(app);
require('./directives')(app);
require('./misc')(app);
