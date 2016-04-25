var user = require('../controllers/user.server.controller'),
    passport = require('passport');


module.exports = function (app) {
    //app.route('/users')
    //    .get(users.list)
    //    .post(users.create);
    //app.route('/users/:userId')
    //    .get(users.read)
    //    .put(users.update)
    //    .delete(users.delete);
    //app.param('userId', users.userByID)

    app.route('/signin')
        .get(user.renderSignin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/',
            failureFlash: true
        }));
    app.route('/signup')
        .get(user.renderSignup)
        .post(user.signup);
    app.get('/signout', user.signout);

};