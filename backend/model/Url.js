var mongoose = require('mongoose')

const URLSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('urls', URLSchema);