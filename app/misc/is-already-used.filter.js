const _ = require('lodash');

module.exports = (app) => {
    app.filter('isAlreadyUsed', () => {
        return (options, alreadyUsed) => {
            const filtered = [];

            _.map(options, (option) => {
                const selector = {
                    _id: option._id,
                };

                if (!_.find(alreadyUsed, selector)) {
                    filtered.push(option);
                }
            });

            return filtered;
        };
    });
};
