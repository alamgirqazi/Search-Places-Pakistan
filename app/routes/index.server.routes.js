var user = require('../controllers/user.server.controller');

module.exports = function (app) {
    var index = require('../controllers/index.server.controller.js');

    app.get('/', index.render);

    app.route('/api/googleSearch')
        .post( index.create);

    app.route('/api/googleSearch/savedSearches')
        .get( index.showSearches);

};

// user.requiresLogin,