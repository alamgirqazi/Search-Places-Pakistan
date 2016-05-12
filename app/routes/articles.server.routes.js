var user = require('../controllers/user.server.controller'),
    articles = require('../controllers/articles.server.controller');


module.exports = function (app) {
    app.route('/api/articles')
        .get(articles.list)
        .post(user.requiresLogin, articles.create);

    app.route('/api/articles/:articleId')
        .put(user.requiresLogin, user.hasAuthorization, articles.update)
        .delete(user.requiresLogin, user.hasAuthorization, articles.delete)
    app.param('articleId', articles.articleByID)
}