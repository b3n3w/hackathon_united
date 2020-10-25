var mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({
    infoURLs:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'urls'
            }
        ]
    ,
    description: {
        type: String,
        required: true
    },
    slotDuration: {
        type: Number,
        min: 10,
        max: 1440
    },
    image: {
        type: String
    },
    email: {
        type: String
    },
    opening_hours: [{
        day: { type: Date }, //mon - sun
        periods: [{
            start: { type: Date },
            end: { type: Date }
        }]
    }],

    visits:
        [{
            visit: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'visits',
                index: true
            }
        }]
});

module.exports = mongoose.model('businesses', PropertySchema);
