var config = require('./config'),
    winston = require('winston'),
    mongoose = require('mongoose');
module.exports = function () {
    var db = mongoose.connect(config.db);

    // Load Model Files Here
    require('../app/models/user.server.model');
    require('../app/models/article.server.model');
    return db;
};