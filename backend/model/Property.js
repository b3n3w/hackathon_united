var mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    infoURLs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'urls'
        }
    ],
    description: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('properties', PropertySchema);