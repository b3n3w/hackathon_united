var mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('urls', URLSchema);