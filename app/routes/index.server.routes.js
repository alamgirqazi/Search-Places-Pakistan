module.exports = function (app) {
    var index = require('../controllers/index.server.controller.js');
    app.get('/', index.render);
    // app.route('/api/googleSearch')
    //     .post(user.requiresLogin, googleplacesearches.create);
    //


};