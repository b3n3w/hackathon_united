var mongoose = require('mongoose')

const PropertySchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
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
            openTime: {
                type: Date
            },
            closeTime: {
                type: Date
            }
        },
        tue: {
            openTime: {
                type: Date
            },
            closeTime: {
                type: Date
            }
        },
        wed: {
            openTime: {
                type: Date
            },
            closeTime: {
                type: Date
            }
        },
        thu: {
            openTime: {
                type: Date
            },
            closeTime: {
                type: Date
            }
        },
        fri: {
            openTime: {
                type: Date
            },
            closeTime: {
                type: Date
            }
        },
        sat: {
            openTime: {
                type: Date
            },
            closeTime: {
                type: Date
            }
        },
        sun: {
            openTime: {
                type: Date
            },
            closeTime: {
                type: Date
            }
        }
    }
});

module.exports = mongoose.model('properties', PropertySchema);