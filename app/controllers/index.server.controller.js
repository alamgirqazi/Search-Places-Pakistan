var mongoose = require('mongoose'),
    GoogleSearch = mongoose.model('GoogleSearch'),
    winston = require('winston');

var getErrorMessages = function (err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                return err.errors[errName].message;
            } else {
                return 'Unknown Server Error';
            }
        }
    }
};
exports.render = function (req, res) {
    res.render('index', {
        title: 'hello world',
        user: req.user ? JSON.stringify(req.user) : ''
    });
};

exports.showSearches = function (req,res) {

    GoogleSearch.find().where('creator').equals(req.user._id).
    skip(0).limit(10).sort('-created').populate('creator').exec(function (err, googleSearch) {
    if (err) {
            return res.status(400).send({message: getErrorMessages(err)});
    }
    return res.json(googleSearch);

    }).catch(function(err){
        return res.status(400).send({message: getErrorMessages(err)});
    });

};

exports.create = function (req, res) {
    var googleSearch = new GoogleSearch(req.body);
    console.log(req.body);
    googleSearch.name = req.body.name;
    googleSearch.formatted_address = req.body.formatted_address;
    googleSearch.formatted_phone_number = req.body.formatted_phone_number;
    googleSearch.distance_miles = req.body.distance_miles;
    googleSearch.distance_kms = req.body.distance_kms;
    googleSearch.international_phone_number = req.body.international_phone_number;

    googleSearch.creator = req.user;

    googleSearch.save(function (err) {
        if (err) {

            return res.status(400).send({message: getErrorMessages(err)});
        } else {
            return res.json(googleSearch);

        }
    })
};