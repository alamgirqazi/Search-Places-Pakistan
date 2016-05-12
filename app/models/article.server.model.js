var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ArticleSchema = new Schema({
    created: {
        type: Date,
        Default: Date.now()
    },
    title: {
        type: String,
        default: '',
        required: 'Title Cannot Be Blank',
        trim: true
    },
    content: {
        type: String,
        default: '',
        required: 'Content is required',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User',
        required: 'User is Must'
    }
});
mongoose.model('Article', ArticleSchema);