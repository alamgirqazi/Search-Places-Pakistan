var user = require('../controllers/user.server.controller');
var maps = require('../controllers/maps.server.controller.js');

    module.exports = function (app) {
    app.get('/maps',user.requiresLogin,user.hasAuthorization, maps.render);

        // app.route('/api/articles')
        //     .get(articles.list)
        //     .post(user.requiresLogin, articles.create);


    };