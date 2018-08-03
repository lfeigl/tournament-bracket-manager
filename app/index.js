require('bulma');
require('bulma-extensions/bulma-slider/dist/js/bulma-slider.min.js');
require('bulma-extensions/bulma-slider/dist/css/bulma-slider.min.css');
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
