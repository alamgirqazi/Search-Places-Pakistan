module.exports = function (app) {
    var newview = require('../controllers/newview.server.controller.js');
    app.get('/newView', newview.render);
};