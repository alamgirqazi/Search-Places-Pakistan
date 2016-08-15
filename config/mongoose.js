var config = require('./config'),
    winston = require('winston'),
    mongoose = require('mongoose');
var _glob = require('glob');
module.exports = function () {
    var db = mongoose.connect(config.db);

    var models = _glob.sync('**/*.server.model.js');
    models.forEach(function (filePath) {
        require('../' + filePath);
        winston.info('loading model', filePath.split('/')[2]);
    });
    //
    // // Load Model Files Here
    // require('../app/models/user.server.model');
    // require('../app/models/article.server.model');
    // require('../app/models/googleplacesearches.server.model');

    return db;
};