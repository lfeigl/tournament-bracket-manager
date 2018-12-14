const _ = require('lodash');
const $ = require('jquery');

module.exports = (app) => {
    app.directive('bracket', () => {
        return {
            link: (scope, element, attrs) => {
                const id = _.head(element).id;
                const data = {
                    teams: [
                        [ 'Team A', 'Team B' ],
                        [ 'Team C', 'Team D' ],
                    ],
                    results: [
                        [
                            [ 1, 2 ],
                            [ 3, 4 ],
                        ],
                        [
                            [ 5, 6 ],
                            [ 7, 8 ],
                        ],
                    ],
                };

                $(() => {
                    $(`#${id}`).bracket({
                        init: data,
                        disableHighlight: true,
                    });
                });
            },
        };
    });
};
