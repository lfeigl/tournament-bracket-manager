require('bulma');
require('bulma-extensions/bulma-slider/dist/js/bulma-slider.min.js');
require('bulma-extensions/bulma-slider/dist/css/bulma-slider.min.css');
require('@fortawesome/fontawesome-free/js/all.min.js');
require('../public/css/main.css');

window.jQuery = require('jquery');
require('jquery-bracket/dist/jquery.bracket.min.js');
require('jquery-bracket/dist/jquery.bracket.min.css');

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
