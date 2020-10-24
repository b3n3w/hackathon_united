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
    openingTimes: {
        mon: {
            type: TimeRanges
        },
        tue: {
            type: TimeRanges
        },
        wed: {
            type: TimeRanges
        },
        thu: {
            type: TimeRanges
        },
        fri: {
            type: TimeRanges
        },
        sat: {
            type: TimeRanges
        },
        sun: {
            type: TimeRanges
        }
    },
    visits:
        [{
            visit: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'visits',
                index: true
            }
        }
        ]
});

module.exports = mongoose.model('properties', PropertySchema);