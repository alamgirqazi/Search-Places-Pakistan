var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GoogleSearchSchema = new Schema({
    placename: {
        type: String,
        Default: ''
    },
    formatted_address: {
        type: String,
        default: '',
        trim: true
    },
    formatted_phone_number: {
        type: String,
        default: '',
        trim: true
    },miles: {
        type: String,
        default: '',
        trim: true
    },kms: {
        type: String,
        default: '',
        trim: true
    },
    international_phone_number: {
        type: String,
        default: '',
        trim: true

    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
        // required: 'User is Must'
    }

});

mongoose.model('GoogleSearch', GoogleSearchSchema);