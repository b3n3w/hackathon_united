var mongoose = require('mongoose')
//const dummy = require('mongoose-dummy');
const ignoredFields = ['_id', 'created_at', '__v', /detail.*_info/];

const BusinessSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
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

let businesses = mongoose.model('businesses', BusinessSchema);
// let randomObject = dummy(businesses, {
//     ignore: ignoredFields,
//     autoDetect: true,
//     returnDate: false
// })
//
// console.log(randomObject);
module.exports = businesses
